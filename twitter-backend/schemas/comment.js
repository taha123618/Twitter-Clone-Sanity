export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    // Text
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    // username
    {
      name: "username",
      title: "User Name",
      type: "string",
    },
    // Profile Image
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
    },
    // tweet reference
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference the Tweet the comment is associated to:",
      type: "reference",
      to: [{ type: "tweet" }],
    },
  ],
};
