import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello from api ");
});

app.listen(port, () => {
  console.log(`api  listening at http://localhost:${port}`);
});
