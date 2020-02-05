console.clear();

require("dotenv").config();
process.env.APP_PORT = process.env.APP_PORT || "3000";
process.env.DEV_PORT = process.env.DEV_PORT || "3001";

import addWebpack from "./addWebpack";
import fs from "fs-extra";
import path from "path";
import http from "http";
import express from "express";
import prodApp from "../../../docs/server/server";

fs.emptyDir(path.resolve(process.cwd(), "docs", "build"));
const devApp = express();
const prodServer = http.createServer(prodApp);
const devServer = http.createServer(devApp);

const rootDir = process.cwd();
const distDir = path.resolve(rootDir, "docs");

prodApp.get("/", (req, res) => res.sendFile(path.join(distDir, "dev.html")));
prodApp.get("/devPort", (req, res) => res.send({ port: process.env.DEV_PORT }));

devServer.listen(process.env.DEV_PORT);

prodServer.listen(process.env.APP_PORT, () => {
	addWebpack(devServer, () => {
		console.log(`Dev ready.  Listening at http://localhost:${process.env.APP_PORT}`);
	});
});
