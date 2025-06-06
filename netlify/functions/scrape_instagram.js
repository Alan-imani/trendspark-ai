// Netlify Function: scrape_instagram
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ platform: "instagram", data: "sample data" })
  };
};
