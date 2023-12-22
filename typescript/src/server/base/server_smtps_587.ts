import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerSMTPS587 extends ServerBase implements ServerInterfaces {

	constructor(port:number=587) {
		super(port);
	}
}