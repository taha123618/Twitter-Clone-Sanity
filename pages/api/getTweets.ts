// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SanityClient } from "../../sanityConfig/client";
import { Tweet } from "../../typing";
import { groq } from "next-sanity";

const feedQuery = groq`*[_type == "tweet" && !blockTweet]{
_id, 
...
} | order(_createdAt desc)
`;

type Data = {
  tweets: Tweet[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // for connecting sanity
  const tweets: Tweet[] = await SanityClient.fetch(feedQuery);
  console.log(tweets);
  res.status(200).json({ tweets });
}
