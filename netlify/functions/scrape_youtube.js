export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "youtube",
      data: ["Digital Art Shorts", "Speedpaints", "Procreate Tutorials"]
    }),
  };
}