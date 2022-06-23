import React, { useEffect, useState } from "react";
import { Comment, Tweet } from "../../../../typing";
// import TimeAgo from "react-time-ago";
import TimeAgo from "timeago-react";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../../../../utils/fetchComments";
import { useSession } from "next-auth/react";

// typing data file
interface Props {
  tweets: Tweet;
}

const TweetComponent = ({ tweets }: Props) => {
  const { data: session } = useSession();

  const [comments, setComments] = useState<Comment[]>([]);

  // for comment last logic

  const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  // fetching the comments through useEffect
  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweets._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  console.log(comments);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5 ">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover "
          src={tweets.profileImg}
          alt="profile"
        />
        {/* parent div */}
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweets.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweets.username.replace(/\s+/g, "".toLowerCase())}.
            </p>
            {/* Time ofn the tweet  */}
            {/* <TimeAgo
              className="text-sm text-gray-500"
              date={tweets._createdAt}
            /> */}
            <TimeAgo datetime={tweets._createdAt} locale="zh_CN" />
          </div>
          <p className="pt-1">{tweets.text}</p>
          {tweets.image && (
            <img
              src={tweets.image}
              alt="tweet"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      {/* icons  */}
      <div className="mt-5 flex justify-between">
        <div
          onClick={() => session && setCommentBoxVisible(!commentBoxVisible)}
          className="flex cursor-pointer items-center space-x-3 text-gray-400"
        >
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
      </div>
      {/* Comment Box Logic  */}

      {/* last logic in comments  */}

      {commentBoxVisible && (
        <form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
            type="text"
            placeholder="Write a comment..."
          />
          <button
            disabled={!input}
            type="submit"
            className="text-twitter disabled:text-gray-200"
          >
            Post
          </button>
        </form>
      )}

      {/* last End  logic in comments */}
      {comments?.length > 0 && (
        <div
          className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll
        border-t border-gray-100 p-5 "
        >
          {comments.map((comment) => (
            <div key={comment._id} className=" relative flex space-x-2">
              <hr
                className="absolute left-5 top-10 h-8 border-x 
              border-twitter-30 "
              />
              <img
                src={comment.profileImg}
                className=" mt-2 h-7 w-7 object-cover rounded-full"
                alt="profile"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    @{comment.username.replace(/\s+/g, "".toLowerCase())}.
                  </p>
                  {/* Time  */}
                  {/* <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  /> */}
                  <TimeAgo datetime={tweets._createdAt} locale="zh_CN" />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TweetComponent;
