export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "shopify",
      data: ["Printable Wall Art", "Abstract Backgrounds", "Modern Line Art"]
    }),
  };
}
