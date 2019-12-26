console.clear();

import addWebpack from "./addWebpack";
import fs from "fs-extra";
import path from "path";
import express from "express";
import routing from "./routing";
import http from "http";
import prodApp from "../../../docs/server/server";

fs.emptyDir(path.resolve(process.cwd(), "docs", "build"));

const devApp = express();

fs.emptyDir(path.resolve(process.cwd(), "docs", "build"));

const devServer = http.createServer(devApp);
devApp.use(routing);

devServer.listen(3000, () => {
	addWebpack(devServer, () => {
		console.log("Dev ready.  Listening at http://localhost:3000");
	});
});

const prodServer = http.createServer(prodApp);

prodServer.listen(3001, () => {
	console.log("App ready on port 3000");
});