// Netlify Function: scrape_shopify
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ platform: "shopify", data: "sample data" })
  };
};
