// connect sanity in to frontend

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

// for image use
// const builder = createImageUrlBuilder(SanityClient);
// export const urlFor = (source) => builder.image(source);

// export const urlFor = (source) =>
//   createImageUrlBuilder(SanityClient).image(source);
