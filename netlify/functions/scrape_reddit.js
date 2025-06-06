export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "reddit",
      data: ["Subreddit: r/DigitalArt", "Popular Threads