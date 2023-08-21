import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "../ui/App";

const app = express();

app.get("/chat", (_: unknown, res: express.Response) => {
  console.log("res", res);
  console.log("res.send", res.send(renderToString(<App />)));
  res.send(renderToString(<App />));
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
