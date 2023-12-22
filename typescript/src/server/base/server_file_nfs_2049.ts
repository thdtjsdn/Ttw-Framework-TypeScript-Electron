import { ServerBase } from "./server_base";
import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerFileNFS extends ServerBase implements ServerInterfaces {

	constructor(port:number=2049) {
		super(port);
	}
}