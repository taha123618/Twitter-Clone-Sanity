import { Comment } from "../typing";

export const fetchComments = async (tweetID: string) => {
  const res = await fetch(`/api/getComments?tweetID=${tweetID}`);
  const comments: Comment[] = await res.json();
  return comments;
};
