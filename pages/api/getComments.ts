// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { SanityClient } from "../../sanityConfig/client";
import { Comment } from "../../typing";

const commentQuery = groq`*[_type == "comment" && references(*[_type == "tweet" && _id == ${tweetID}._id])]{
    _id, 
    ...
} | order(_createdAt desc)
`;

type Data = {
  comments: Comment[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // for connecting sanity
  const { tweetID } = req.query;
  const comments: Comment[] = await SanityClient.fetch(commentQuery, {
    tweetID,
  });
  console.log(comments);
  res.status(200).json({ comments });
}
