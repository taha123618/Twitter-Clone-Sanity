export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    // Text
    {
      name: "text",
      title: "text",
      type: "string",
    },
    // blockTweet
    {
      name: "blockTweet",
      title: "Block Tweet",
      description: "Block this tweet from showing up in the feed",
      type: "boolean",
    },
    // username
    {
      name: "username",
      title: "User Name",
      type: "string",
    },
    // Profile Image
    {
      name: "profileImg",
      title: "Profile Image",
      type: "image",
    },
    // Image
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
