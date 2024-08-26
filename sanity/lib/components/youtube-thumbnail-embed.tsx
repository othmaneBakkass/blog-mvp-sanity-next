"use client";

import { env } from "@/env";
import { Image } from "next-sanity/image";
import { useEffect, useState } from "react";
import { PreviewProps } from "sanity";
import { z } from "zod";

export function hasYoutubeVideoId(url: string) {
	const id = new URL(url).searchParams.get("v");
	if (id && id.length === 11) {
		return { id, ok: true } as const;
	}

	return { ok: false } as const;
}

const responseSchema = z.object({
	kind: z.string(),
	etag: z.string(),
	pageInfo: z.object({
		totalResults: z.number(),
		resultsPerPage: z.number(),
	}),
	items: z.array(
		z.object({
			snippet: z.object({
				publishedAt: z.string(),
				channelId: z.string(),
				title: z.string(),
				description: z.string(),
				thumbnails: z.object({
					medium: z.object({
						url: z.string(),
						width: z.number(),
						height: z.number(),
					}),
					standard: z.object({
						url: z.string(),
						width: z.number(),
						height: z.number(),
					}),
				}),
			}),
		})
	),
});

export type getVideoThumbnailData = z.infer<typeof responseSchema>;

function ErrorBlock({ msg }: { msg: string }) {
	return <p>{msg}</p>;
}

async function getVideoThumbnail(videoId: string) {
	const url = new URL("https://www.googleapis.com/youtube/v3/videos");
	url.searchParams.set("part", "snippet");
	url.searchParams.set("id", videoId);
	url.searchParams.set("key", env.NEXT_PUBLIC_YOUTUBE_API_KEY);

	const response = await fetch(url, {
		method: "GET",
		headers: {
			"content-type": "application/json",
		},
	}).catch((e) => false as const);

	if (!response) {
		return {
			ok: false as const,
			msg: "an error has occurred while trying to get video thumbnail from youtube, please try again later",
		};
	}

	if (response.status === 200) {
		const json = await response.json().catch((e) => false);

		if (!json) {
			return {
				ok: false as const,
				msg: "unable to parse video information, if the problem keeps occurring please contact support",
			};
		}

		const validResponse = responseSchema.safeParse(json);

		if (!validResponse.success) {
			return {
				ok: false as const,
				msg: "internal error has occurred, if the problem keeps occurring please contact support",
			};
		}
		return {
			ok: true as const,
			res: validResponse.data,
		};
	}

	if (response.status === 400 || response.status === 404) {
		return {
			ok: false as const,
			msg: "the linked video is not available",
		};
	}

	if (response.status === 403) {
		return {
			ok: false as const,
			msg: "you're not authorizes to fetch video thumbnail, if the problem keeps occurring please contact support",
		};
	}

	return {
		ok: false as const,
		msg: "unknown error has occurred, if the problem keeps occurring please contact support",
	};
}

export function YoutubeThumbnailEmbed(props: PreviewProps & { url?: string }) {
	const [data, setData] = useState<{
		ok: boolean;
		msg?: string;
		res?: getVideoThumbnailData;
	}>({ ok: true });

	useEffect(() => {
		const fetcher = async () => {
			if (!props.url) {
				setData({ ok: false, msg: "invalid url, please try again" });
				return;
			}

			const maybeID = hasYoutubeVideoId(props.url);

			if (!maybeID.ok) {
				setData({
					ok: false,
					msg: "the url given doesn't have a valid ID, check the 'v' value after the '?' in the url it must have a value 11 character long. example: 'https://www.youtube.com/watch?v=[11 long string]'",
				});
				return;
			}
			const { ok, res, msg } = await getVideoThumbnail(maybeID.id);
			if (!ok) {
				setData({ ok: false, msg });
				return;
			}
			setData({ ok, res });
		};
		fetcher();
	}, [props.url]);

	return (
		<>
			{data.ok && data.res ? (
				<Image
					src={data.res.items[0].snippet.thumbnails.standard.url}
					width={data.res.items[0].snippet.thumbnails.standard.width}
					height={data.res.items[0].snippet.thumbnails.standard.height}
					alt={`thumbnail of ${data.res.items[0].snippet.title}`}
				/>
			) : (
				<ErrorBlock msg={data.msg ?? "unknown error"} />
			)}
		</>
	);
}
