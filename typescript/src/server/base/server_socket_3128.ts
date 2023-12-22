import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerSocket extends ServerBase implements ServerInterfaces {

	constructor(port:number=3128) {
		super(port);
	}
}