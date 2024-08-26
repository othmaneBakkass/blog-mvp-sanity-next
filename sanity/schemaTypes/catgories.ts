import { defineField, defineType } from "sanity";

export const CategoriesSchema = defineType({
	name: "categories",
	type: "document",
	fields: [
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			validation: (rules) => rules.required(),
		}),
	],
});
