import { defineField, defineType } from "sanity";

export const AuthorsSchema = defineType({
	name: "authors",
	type: "document",
	fields: [
		defineField({
			name: "full_name",
			title: "Full Name",
			type: "string",
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
			name: "social_link",
			title: "Social Link",
			description: "link to your twitter, youtube or instagram profile",
			type: "url",
			validation: (rules) => rules.required(),
		}),
		defineField({
			name: "social_link_placeholder",
			title: "Social Link placeholder",
			description:
				"this is the text that will represent the social link ex: johnDoe",
			type: "string",
			validation: (rules) => rules.required(),
		}),
	],
});
