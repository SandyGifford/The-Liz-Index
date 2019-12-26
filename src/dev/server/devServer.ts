console.clear();

import addWebpack from "./addWebpack";
import fs from "fs-extra";
import path from "path";
import express from "express";
import routing from "./routing";
import http from "http";
import prodApp from "../../../docs/server/server";

require("dotenv").config();
process.env.APP_PORT = process.env.APP_PORT || "3001";
process.env.DEV_PORT = process.env.DEV_PORT || "3000";

fs.emptyDir(path.resolve(process.cwd(), "docs", "build"));

const devApp = express();

fs.emptyDir(path.resolve(process.cwd(), "docs", "build"));

const devServer = http.createServer(devApp);
devApp.use(routing);

devServer.listen(process.env.DEV_PORT, () => {
	addWebpack(devServer, () => {
		console.log(`Dev ready.  Listening at http://localhost:${process.env.DEV_PORT}`);
	});
});

const prodServer = http.createServer(prodApp);

prodServer.listen(process.env.APP_PORT, () => {
	console.log(`App ready on port ${process.env.APP_PORT}`);
});