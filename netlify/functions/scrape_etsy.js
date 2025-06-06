// Netlify Function: scrape_etsy
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ platform: "etsy", data: "sample data" })
  };
};
