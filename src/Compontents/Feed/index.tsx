import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import { Tweet } from "../../../typing";
import TweetComponent from "./TweetComponent";
import TweetBox from "./TweetBox";

// typing data file
interface Props {
  tweets: Tweet;
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-bold ">Home</h1>
        <RefreshIcon
          className="h-8 w-8 cursor-pointer text-twitter transition-all 
      duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* Tweet Box  */}
      <div>
        <TweetBox />
      </div>

      {/* Feed Tweets fetch from sanity  */}
      {/* for map the all tweets  */}
      <div>
        {tweets.map((tweets} => (
          <TweetComponent key={tweets._id} tweets={tweets} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
