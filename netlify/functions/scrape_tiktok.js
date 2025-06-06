// Netlify Function: scrape_tiktok
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ platform: "tiktok", data: "sample data" })
  };
};
