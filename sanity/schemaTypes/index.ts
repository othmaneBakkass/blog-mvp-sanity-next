import { type SchemaTypeDefinition } from "sanity";
import { ArticlesSchema, TwitterEmbedType, YoutubeEmbedType } from "./articles";
import { AuthorsSchema } from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [ArticlesSchema, TwitterEmbedType, YoutubeEmbedType, AuthorsSchema],
};
