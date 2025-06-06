// Netlify Function: scrape_reddit
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ platform: "reddit", data: "sample data" })
  };
};
