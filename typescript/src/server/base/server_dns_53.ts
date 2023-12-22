import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerDNS extends ServerBase implements ServerInterfaces {

	constructor(port:number=53) {
		super(port);
	}
}