import express, { Express, Request, Response } from "express";
import { greeting } from "./simple/controllers";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
})

// simple exapmle of hello the fucking world
app.get("/sample", greeting.index);

app.get("/simple", (req, res) => {
  res.send("simple");
})

app.get("/over-eingineering-is-the-only-way", (req, res) => {
  res.send("hello") // we need to encryptize "hello" because this is way too easy
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
