const express = require("express");
const reviewCode = require("./aiService");

const app = express();

app.use(express.json());

app.post("/review", async (req, res) => {
  const code = req.body.code;

  if(!code){
    return res.status(400).json({
      error : "code is required"
    })
  }
try{

   const review = await reviewCode(code);

  res.json(review);
}catch(error){
  console.error(error);

  res.status(500).json({
       error: "Failed to review code",
  });
}

}
)

 

app.listen(3000, () => {
  console.log("Server running on port 3000");
});