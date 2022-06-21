// coming from sanity

export interface Tweet extends TweetBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
}

export type TweetBody = {
  text: string;
  username: string;
  profileImg: string;
  image?: string;
};

// Foe Comments

export interface Comment extends CommentBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "comment";
  _updatedAt: string;
  tweet: {
    _ref: string;
    _type: "reference";
  };
}
export type CommentBody = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "comment";
  _updatedAt: string;
};
