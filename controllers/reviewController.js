const aiService = require("../services/aiService");

async function reviewCode(req, res) {
  const code = req.body.code;

  if (!code) {
    return res.status(400).json({
      error: "Code is required",
    });
  }

  try {
    const review = await  aiService.reviewCode(code);

    res.json(review);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to review code",
    });
  }
}

module.exports = {
  reviewCode,
};