import { UtilHttpResponse } from "./util/http/util_http_response";
import { UtilProcess } from "./util/process/util_process";

import { ServerHttp } from "./server/base/server_http_80";
import { UtilConsole } from "./util/console/util_console";

function bootstrap() {

	const consoleFileLog = new UtilConsole('D:/GitHub_Ttw--Base/Ttw-Electron-TypeScript/log/80/');
	
	//Check whether the operating environment is CLI or Electron;
	if(UtilProcess.isElectron()){
	} else {
	}

	const server_http = new ServerHttp(80);
		server_http.createServer();
		server_http.addRouter("/b", (req, res) => {
			UtilHttpResponse.response_200(req, res, 'b입니다');
		});
}
bootstrap();