import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import Sidebar from "../src/Compontents/Sidebar";
import Feed from "../src/Compontents/Feed";
import Widgets from "../src/Compontents/Widgets";
import Head from "next/head";
import { SanityClient } from "../sanityConfig/client";
import { fetchTweets } from "../utils/fetchtweets";
import { Tweet } from "../typing";
import { Toaster } from "react-hot-toast";

// typing data file
interface Props {
  tweets: Tweet;
}

const index = ({ tweets }: Props) => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden  lg:max-w-6xl">
      <Head>
        <title>Twitter-Clone</title>
      </Head>
      <Toaster />

      {/*for responsive thats why we use main */}
      <main className="grid grid-cols-9 ">
        {/* sidebar left  */}
        <Sidebar />
        {/* Main Feed  */}
        <Feed tweets={tweets} />
        {/* Widgets  */}
        <Widgets />
      </main>
    </div>
  );
};

// for connecting backend to frontend
export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: { tweets },
  };
};

export default index;
