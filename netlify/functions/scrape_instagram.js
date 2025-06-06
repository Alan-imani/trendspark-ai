export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "instagram",
      data: ["Boho Art Reels", "Fantasy Illustration", "Minimalist Line Art"]
    }),
  };
}