// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TweetBody } from "../../typing";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweet: TweetBody = JSON.parse(req.body);
  //   responsible of the tweet show case
  const mutations = {
    mutations: [
      {
        create: {
          _type: "tweet",
          text: tweet.text,
          username: tweet.username,
          blockTweet: false,
          profileImg: tweet.profileImg,
          image: tweet.image,
        },
      },
    ],
  };

  // create the sanity http api in frontend
  const apiEndPoint = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`;

  const result = await fetch(apiEndPoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  const json = await result.json();

  res.status(200).json({ message: "Added!" });
}
