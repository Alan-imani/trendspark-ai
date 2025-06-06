export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "facebook",
      data: ["Trending Art Pages", "Group Discussions", "Digital Artist Highlights"]
    }),
  };
}