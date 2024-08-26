import { defineField, defineType } from "sanity";
import { twitterEmbed } from "../lib/components/twitter-embed";
import {
	hasYoutubeVideoId,
	YoutubeThumbnailEmbed,
} from "../lib/components/youtube-thumbnail-embed";

export const TwitterEmbedType = defineType({
	name: "twitter_embed",
	title: "X post",
	description:
		"paste the id of the tweet you want to include, it will be the last string in the end of the url after the last slash / ",
	type: "object",
	fields: [
		defineField({
			name: "id",
			title: "Tweet id",
			type: "string",
			validation: (rules) => rules.required(),
		}),
	],
	components: {
		preview: twitterEmbed,
	},
	preview: {
		select: {
			id: "id",
		},
	},
});

export const YoutubeEmbedType = defineType({
	name: "youtube_embed",
	title: "youtube",
	type: "object",
	//
	fields: [
		defineField({
			name: "url",
			title: "video url",
			type: "url",
			validation: (rules) => {
				return rules.required().custom((url) => {
					if (!url) {
						return "please add the video url";
					}
					const maybeID = hasYoutubeVideoId(url);
					if (!maybeID.ok) {
						return "the url given doesn't have a valid ID, check the 'v' value after the '?' in the url it must have a value 11 character long. example: 'https://www.youtube.com/watch?v=[11 long string]'";
					}

					return true;
				});
			},
		}),
	],
	components: {
		preview: YoutubeThumbnailEmbed,
	},
	preview: {
		select: {
			url: "url",
		},
	},
});

export const ArticlesSchema = defineType({
	name: "articles",
	type: "document",
	fields: [
		defineField({
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "headline",
			},
		}),
		defineField({
			name: "headline",
			title: "Headline",
			type: "string",
			validation: (rules) => rules.required(),
		}),
		defineField({
			name: "sub_headline",
			title: "Sub-headline",
			type: "string",
			description: "the text that will be under the headline",
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "array",
			of: [
				{ type: "block" },
				{ type: "image" },
				{ type: "twitter_embed" },
				{ type: "youtube_embed" },
			],
			description: "the body of the article",
			validation: (rules) => rules.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			description: "the image for this article",
			validation: (rules) => rules.required(),
		}),
		defineField({
			name: "reading_time",
			title: "reading time",
			description: "the amount of time it takes to read this article",
			type: "string",
			validation: (rules) => rules.required(),
		}),
		defineField({
			name: "created_at",
			title: "Date posted",
			type: "date",
			description: "the date this article is posted",
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [
				{
					type: "reference",
					to: [
						{
							type: "categories",
						},
					],
				},
			],
			validation: (rules) => rules.required(),
		}),
		defineField({
			name: "authors",
			title: "Authors",
			type: "array",
			of: [
				{
					type: "reference",
					to: [
						{
							type: "authors",
						},
					],
				},
			],
			validation: (rules) => rules.required(),
		}),
	],
});
