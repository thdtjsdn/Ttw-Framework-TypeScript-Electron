import { ServerLogger } from "../../log/server_logger";
import { UtilURL } from "../../util/url/util_url";
import { UtilHttpResponse } from "../../util/http/util_http_response";

import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";
import { UtilString } from "../../util/string/util_string";

export class ServerHttpBase extends ServerBase implements ServerInterfaces {

	value_BLOCKED_IP: string = '';

	value_boolean_service_file: Boolean = true;
	value_boolean_service_Router: Boolean = true;

	/**
	 * 
	 */
	value_displayAllAccessURILogs: Boolean = true;

	private value_pathRoot: string;

	/*/
	private enable_mimeType: object = {

		//applications
		//, xls: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
		//, xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

		//application / javascript;
		  cjs: "application/javascript" //no open;
		//, dbjs: "application/javascript" //no open;
		, js: "application/javascript"
		//, tjs: "application/javascript" //no open;
		//, ts: "application/typescript" //no open;

		//audio;
		, mid: "audio/midi"//, mid: "application/x-midi"
		, mp3: "audio/mpeg"
		, wav: "audio/wav"

		//Font;
		, ttf: "application/x-font-ttf"
		, woff: "application/x-font-woff"
		, woff2: "application/x-font-woff"

		//image;
		, bmp: "image/bmp"
		, gif: "image/gif"
		, jpeg: "image/jpeg"
		, jpg: "image/jpeg"
		, png: "image/png"

		//text;
		, css: "text/css"
		, csv: "text/plain"

		//, debug: "text/plain"  //no open;		

		, html: "text/html"

		//, less: "text/css" //no open;

		, list: "text/plain"
		, json: "text/json"
		, map: "text/plain"

		//, thtml: "text/html" //no open;

		, txt: "text/plain"
		, xml: "text/xml"
	};
	//*/

	/**
	 * { "/a": function(req: http.IncomingMessage, res: http.ServerResponse){} }
	 */
	private dictionary_routers: {[key:string]: (req, res) => void} = {
		'/a': function(req, res){ UtilHttpResponse.response_200_Boolean_True(req, res); }
	};

	/**
	 * 
	 * @param port 
	 * @param pathRoot 
	 */
	constructor(port:number=80, pathRoot: string="") {
		super(port);

		this.value_pathRoot = pathRoot;
	}

	/**
	 * 
	 * @param ipStr 222.222.222.222
	 * @returns 
	 */
	addBlockedIP(ipStr: string): Boolean {
		const b0 = UtilString.isIPAddress(ipStr);
		const b1 = UtilString.isIPAddress_regexp(ipStr);
		if(b0 && b1){
			this.BLOCKED_IP += '\n' + ipStr;
			return true;
		}

		return false;
	}

	/**
	 * 
	 * @param uri "/getUser/"
	 * @param listener function(req: http.IncomingMessage, res: http.ServerResponse){}
	 * @returns 
	 */
	addRouter(uri:string, listener: (req, res) => void): Boolean {
		if(this.dictionary_routers[uri]){
			ServerLogger.warn(`The same URI is registered`, this);
			return false;
		}

		this.dictionary_routers[uri] = listener;
		return true;
	}

	/**
	 * 
	 * @param uri "/getUser/"
	 * @param listener function(req: http.IncomingMessage, res: http.ServerResponse){}
	 * @returns 
	 */
	deleteRouter(uri: string, listener?: (req, res) => void): Boolean {
		if(this.dictionary_routers[uri]){
			if(listener){
				if(this.dictionary_routers[uri] == listener){
					ServerLogger.error(`The same URI is registered`, `${this.name} / 102`, this);
					return false;
				}
				else {
					delete this.dictionary_routers[uri];
					return true;
				}
			}
		}
		else {
			ServerLogger.warn(`That URI does not exist`, this);
			return false;
		}

		return false;
	}

	/**
	 * 
	 * @param url 
	 * @returns 
	 */
	getURIFromURL(url: string): string {
		return UtilURL.getURIFromURL(url);
	}

	/**
	 * 
	 * @return { "/a": function(req: http.IncomingMessage, res: http.ServerResponse){}, "/b": function(req: http.IncomingMessage, res: http.ServerResponse){} }
	 */
	getRouters(): {[key:string]: (req, res) => void} {
		return this.dictionary_routers;
	}

	/**
	 * @obj { "/a": function(req: http.IncomingMessage, res: http.ServerResponse){}, "/b": function(req: http.IncomingMessage, res: http.ServerResponse){} }
	 */
	setRouters(obj: {[key:string]: (req, res) => void}) {
		ServerLogger.warn(`All routers cannot be updated. Use add and delete`, this);
		//this.routers = obj;
	}

	/*/
	get mimeType(): object {
		return this.enable_mimeType;
	}
	
	set mimeType(mimeTypes: {[key: string]: string} ){
		ServerLogger.warn(`Changing the input type structure all at once is dangerous.`);

		//this.enable_mimeType = mimeTypes;
	}
	//*/

	get bool_DisplayAllAccessURILogs(): Boolean {
		return this.value_displayAllAccessURILogs;
	}

	set bool_DisplayAllAccessURILogs(b: Boolean) {
		this.value_displayAllAccessURILogs = b;
	}

	get BLOCKED_IP(): string {
		return this.BLOCKED_IP;
	}
	set BLOCKED_IP(s: string) {
		ServerLogger.warn(`BLOCKED_IP cannot be overwritten`, this);
		//this.BLOCKED_IP = s;
	}

	get pathRoot(): string {
		return this.value_pathRoot;
	}
	
	set pathRoot(pathRootParam: string) {
		if(pathRootParam == ""){
			ServerLogger.error(`The server path information is error`, `${this.name} / 100`, this);
			return;
		}

		this.value_pathRoot = pathRootParam;
	}

	/**
	 * 
	 * @return { "/a": function(req: http.IncomingMessage, res: http.ServerResponse){}, "/b": function(req: http.IncomingMessage, res: http.ServerResponse){} }
	 */
	// get routers(): {[key:string]: (req, res) => void} {
	//  	return this.dictionary_routers;
	// }

	/**
	 * @obj { "/a": function(req: http.IncomingMessage, res: http.ServerResponse){}, "/b": function(req: http.IncomingMessage, res: http.ServerResponse){} }
	 */
	// set routers(obj: {[key:string]: (req, res) => void}) {
	//  	this.dictionary_routers = obj;
	// }
}