import React from "react";
import { NextPage } from "next";
import { SearchIcon } from "@heroicons/react/outline";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const Widgets: NextPage = () => {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      {/* Search Box */}
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none "
        />
      </div>
      {/* Twitter Eembed  */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="tahaahmed"
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default Widgets;
