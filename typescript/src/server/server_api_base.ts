import { ServerBase } from "./base/server_base";
import { ServerInterfaces } from "./interfaces/server_interfaces";

export class ServerAPIBase extends ServerBase implements ServerInterfaces {

	constructor(port:number) {
		super(port);
	}
}