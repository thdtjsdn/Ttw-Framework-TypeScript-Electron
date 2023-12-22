import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerProxy extends ServerBase implements ServerInterfaces {

	constructor(port:number) {
		super(port);
	}
}