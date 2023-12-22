import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerSSH extends ServerBase implements ServerInterfaces {

	constructor(port:number=22) {
		super(port);
	}
}