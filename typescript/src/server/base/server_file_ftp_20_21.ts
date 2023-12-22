import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerFileFTP extends ServerBase implements ServerInterfaces {

	constructor(port:number=20|21) {
		super(port);
	}
}