import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { NextPage } from "next";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { Tweet, TweetBody } from "../../../../typing";
import { fetchTweets } from "../../../../utils/fetchtweets";
import toast from "react-hot-toast";


interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}

const TweetBox = ({setTweets}: Props) => {
  const [input, setInput] = useState<string>("");
  const { data: session } = useSession();
  // for image url
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);

  // for image url Reference
  const imageInputRef = useRef<HTMLInputElement>(null);


  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    if (!imageInputRef.current?.value) return;
    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageUrlBoxIsOpen(false);
  };

  // for Tweet button submit

  const postTweet =  async () =>{
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || "https://links.papareact.com/gll"
      image: image,
    }

    const result = await fetch('/api/addTweet' , {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    })

    const json = await result.json()

    // fetch the tweet again 

    const newTweets = await fetchTweets()
    setTweets(newTweets)

    toast('Tweet Posted' , {
      icon: "👍"
    })

    return json
  }




  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // posting tweet
    postTweet();

    setInput('')
    setImage('')
    setImageUrlBoxIsOpen(false)

  };

  return (
    <div className="flex space-x-2 p-5  ">
      <img
        className="h-14 w-14 rounded-full object-cover mt-4"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt="Profile-Image"
      />
      {/* form */}
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          {/* search  */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl "
            type="text"
            placeholder="tweet the tweet"
          />
          {/*parent div  */}
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              {/* Icons  */}
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h-5 w-5 cursor-pointer 
              transition-transform duration-150 ease-out  hover:scale-150"
              />
              <EmojiHappyIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
              <SearchCircleIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!input || !session}
              className="bg-twitter rounded-full px-5 py-2 
              font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4k">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image URl..."
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}

          {image && (
            <img
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
              src={image}
              alt="image"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
