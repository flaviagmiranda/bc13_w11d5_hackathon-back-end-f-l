import express from "express";
import morgan from "morgan";
import cors from "cors";

import catsRouter from "./routes/cats.js";
//import factsRouter from "./routes/facts.js";

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.use("/api/cats", catsRouter);
//app.use("/api/facts", factsRouter);

export default app;