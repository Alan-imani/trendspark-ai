exports.handler = async function () {
  const data = [
    "Top-voted Digital Art Posts",
    "Requests for New Art Styles",
    "Trending Subreddits (r/digitalart, r/ArtCrit)"
  ];

  return {
    statusCode: 200,
    body: JSON.stringify({
      platform: "reddit",
      data
    })
  };
};
