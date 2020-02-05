console.clear();

import http from "http";
import app from "./server";

require("dotenv").config();
process.env.APP_PORT = process.env.APP_PORT || "3000";

const server = http.createServer(app);

server.listen(process.env.APP_PORT, () => {
	console.log(`App ready.  Listening on port ${process.env.APP_PORT}`);
});
