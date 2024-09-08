import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Home page</h1>`);
});

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});
