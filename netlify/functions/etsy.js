export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "etsy",
      data: ["Digital Art Bundle", "Watercolor Clipart", "SVG Logo Kit"]
    }),
  };
}
// trigger redeploy
