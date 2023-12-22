import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerFileAFP extends ServerBase implements ServerInterfaces {

	constructor(port:number=548) {
		super(port);
	}
}