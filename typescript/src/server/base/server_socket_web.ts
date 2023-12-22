import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerSocketWeb extends ServerBase implements ServerInterfaces {

	constructor(port:number) {
		super(port);
	}
}