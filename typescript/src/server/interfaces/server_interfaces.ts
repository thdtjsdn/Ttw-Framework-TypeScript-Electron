import { ServerBase } from "../base/server_base";

export interface ServerInterfaces {
    port: number;

    restart(): ServerBase;
    start(): ServerBase;
    stop(): ServerBase;
}