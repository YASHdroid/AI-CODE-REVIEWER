const express = require("express");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(express.json());

app.use("/review", reviewRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});