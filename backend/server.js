import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("dist"));

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, content: "What falls, but never needs a bandage? The rain." },
    {
      id: 2,
      content:
        "I was going to tell you a joke about boxing but I forgot the punch line.",
    },
    {
      id: 3,
      content:
        "I'm not a fan of spring cleaning. Let's be honest, I'm not into summer, fall, or winter cleaning either.",
    },
    { id: 4, content: "Why did the egg hide? It was a little chicken." },
    { id: 5, content: "Why did the egg hide? It was a little chicken." },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log("Server started");
});
