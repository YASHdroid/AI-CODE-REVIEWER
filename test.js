const reviewCode = require("./aiService");

async function run() {
  const code = `
def add(a, b):
    return a - b
`;

  const review = await reviewCode(code);

  console.log(review);
}

run();