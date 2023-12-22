import { ServerInterfaces } from "../interfaces/server_interfaces";

export class ServerBase implements ServerInterfaces {

	name: string = this.constructor.name;

	/**
	 * 
	 */
	private value_port: number;

	constructor(port:number) {
		this.value_port = port;
	}

	// createServer(): any {
	// 	return;
	// }

	restart(): ServerBase {
		return this;
	}

	start(): ServerBase {
		return this;
	}

	stop(): ServerBase {
		return this;
	}

	get port():number {
		return this.value_port;
	}
	set port(port:number) {
		//this.value_port = port;
	}
}