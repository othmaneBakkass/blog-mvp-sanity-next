import { type SchemaTypeDefinition } from "sanity";
import { ArticlesSchema, TwitterEmbedType, YoutubeEmbedType } from "./articles";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [ArticlesSchema, TwitterEmbedType, YoutubeEmbedType],
};
