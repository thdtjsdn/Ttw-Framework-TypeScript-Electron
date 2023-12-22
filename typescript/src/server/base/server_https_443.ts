import { EnumHttpEvents } from "../../enums/enum_http_events";
import { ServerLogger } from "../../log/server_logger";
import { UtilFS } from "../../util/file/util_fs";
import { UtilHttpResponse } from "../../util/http/util_http_response";

import { ServerHttpBase } from "./server_http_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

import { Server } from "https";

/*/
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem
//*/

export class ServerHttps extends ServerHttpBase implements ServerInterfaces {

	http = require("http");
	https = require("https");

	name = this.constructor.name;

	instance_server: Server;

	constructor(port:number=443, pathRoot: string="") {
		super(port, pathRoot);
	}

	/**
	 * 
	 * @param err 
	 * @param owner 
	 */
	evt_error(err, owner: ServerHttps): void {
		ServerLogger.error(`Error Request - ${err}`, `${owner.name} / 35`, this);
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 */
	evt_request(req, res, owner: ServerHttps): void {
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
	createServer(pathPemKey: string='./resources/ssl/key.pem', pathPemCert: string='./resources/ssl/certificate.pem'): Server {
		ServerLogger.logy(`key.pem path - ${pathPemKey}`, this);
		ServerLogger.logy(`certificate.pem path - ${pathPemCert}`, this);

		const stat_pem = UtilFS.statSync(pathPemKey);
		const stat_cer = UtilFS.statSync(pathPemCert);

		const log_stat = `pem status: ${stat_pem.isFile()} / cert status: ${stat_cer.isFile()}`;
		if(stat_pem.isFile() && stat_cer.isFile()){
			ServerLogger.logr(log_stat, this);
		}
		else {
			ServerLogger.error(log_stat, `${this.name} / 85`, this);
			return this.instance_server;
		}

		if(this.instance_server){
			ServerLogger.warn(`A server has already been created`, this);
			return this.instance_server;
		}
		else {
			//this.instance_server = this.https.createServer({
			this.instance_server = this.http.createServer({
				key: UtilFS.readFileSync(pathPemKey)
				, cert: UtilFS.readFileSync(pathPemCert)
				, https: true
			});
			this.instance_server.on(EnumHttpEvents.ERROR, (err) => { this.evt_error(err, this); });
			this.instance_server.on(EnumHttpEvents.REQUEST, (req, res) => { this.evt_request(req, res, this); });
			this.instance_server.listen(this.port);
						
			ServerLogger.logc(`Https server running : ${this.port}`, this);
		}

		return this.instance_server;
	}
}