import { type SchemaTypeDefinition } from "sanity";
import { ArticlesSchema, TwitterEmbedType, YoutubeEmbedType } from "./articles";
import { AuthorsSchema } from "./author";
import { CategoriesSchema } from "./catgories";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		ArticlesSchema,
		TwitterEmbedType,
		YoutubeEmbedType,
		AuthorsSchema,
		CategoriesSchema,
	],
};
