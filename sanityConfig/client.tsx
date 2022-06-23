// connect sanity in to frontend

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

// for image use
const builder = imageUrlBuilder(SanityClient);
export const urlFor = (source: String) => {
  builder.image(source);
};

// This Way

// export const urlFor = (source) =>
//   createImageUrlBuilder(SanityClient).image(source);
