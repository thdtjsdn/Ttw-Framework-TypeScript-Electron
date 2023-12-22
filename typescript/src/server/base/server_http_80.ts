import { ServerLogger } from "../../log/server_logger";
import { UtilHttpResponse } from "../../util/http/util_http_response";

import { ServerHttpBase } from "./server_http_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

import { Server } from "http";

export class ServerHttp extends ServerHttpBase implements ServerInterfaces {

	http = require("http");

	instance_server: Server;

	constructor(port:number=80, pathRoot: string="") {
		super(port, pathRoot);
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 */
	evt_request(req, res, owner:ServerHttp) {
		/*/
		req.connection;
		req.connection.remoteAddress;
		req.rawHeaders;
		req.socket;
		req.url
		//*/
		const ip = req.connection.remoteAddress;

		//very important, listerner's this : nodejs's Server Class;

		const uri = owner.getURIFromURL(req.url);
		const routers = owner.getRouters(); 
		const router = routers[uri];
		if(router){
			if(owner.value_displayAllAccessURILogs){
				ServerLogger.log_uri(`${ip} - ${req.url}`, owner);
			} 
			router(req, res);
			return;
		}
		else {
			//ServerLogger.warn(`A request was made for a non-existent URL`, owner);
			ServerLogger.warn(`404 - ${ip} - ${req.url}`, owner);
			UtilHttpResponse.response_404(req, res);
			return;
		}
	}

	/**
	 * 
	 * @returns 
	 */
	createServer(): Server {
		if(this.instance_server){
			ServerLogger.warn(`A server has already been created`, this);
			return this.instance_server;
		}
		else {
			this.instance_server = this.http.createServer((req, res) => { this.evt_request(req, res, this); });
			this.instance_server.listen(this.port);

			ServerLogger.logc(`Http server running : ${this.port}`, this);
		}

		return this.instance_server;
	}
}