import express from "express";
import path from "path";

const app = express();

const rootDir = process.cwd();
const distDir = path.resolve(rootDir, "docs");

app.get("/", (req, res) => res.sendFile(path.join(distDir, "index.html")));
app.get(/^\/(assets|build)\/.*/, (req, res) => res.sendFile(path.join(distDir, req.url)));

export default app;
