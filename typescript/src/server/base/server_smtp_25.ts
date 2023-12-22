import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerSMTP extends ServerBase implements ServerInterfaces {

	constructor(port:number=25) {
		super(port);
	}
}