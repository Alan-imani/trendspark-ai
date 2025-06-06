// Netlify Function: scrape_youtube
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ platform: "youtube", data: "sample data" })
  };
};
