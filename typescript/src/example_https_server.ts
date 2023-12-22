import { UtilHttpResponse } from "./util/http/util_http_response";
import { UtilProcess } from "./util/process/util_process";

import { ServerHttps } from "./server/base/server_https_443";
import { UtilConsole } from "./util/console/util_console";

function bootstrap() {

	const consoleFileLog = new UtilConsole('D:/GitHub_Ttw--Base/Ttw-Electron-TypeScript/log/443/');

	let path_pem;
	let path_cer;

	//Check whether the operating environment is CLI or Electron;
	if(UtilProcess.isElectron()){
		//set import paths;
		const cwd = process.cwd()
		path_pem = cwd + '/_projects/typescript/src/resources/ssl/key.pem';
		path_cer = cwd + '/_projects/typescript/src/resources/ssl/certificate.pem';
	} else {
		path_pem = './resources/ssl/key.pem';
		path_cer = './resources/ssl/certificate.pem';
	}

	const server_https = new ServerHttps(443);
		server_https.createServer(path_pem, path_cer);
		
		server_https.addRouter("/b", (req, res) => {
			UtilHttpResponse.response_200(req, res, 'b입니다');
		});
}
bootstrap();