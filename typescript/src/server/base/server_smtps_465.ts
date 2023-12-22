import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerSMTPS465 extends ServerBase implements ServerInterfaces {

	constructor(port:number=465) {
		super(port);
	}
}