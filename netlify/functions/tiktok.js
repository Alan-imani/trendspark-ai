export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "tiktok",
      data: ["Trending AI Art", "Animated Posters", "Aesthetic Stickers"]
    }),
  };
}
