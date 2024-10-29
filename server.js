import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const port = 5000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.get("/RecipesData", (req, res) => {
  res.sendFile(path.join(__dirname, "RecipesData.json"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
