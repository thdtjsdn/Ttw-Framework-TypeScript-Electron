import { EnumHttpResponseHeader } from "../../enums/enum_http_response_header";
import { EnumMimeType } from "../../enums/enum_mime_type";

export class UtilHttpResponse {

	static response_header_CORS(req, res){
		res.setHeader('Access-Control-Allow-Origin', '*');
	}

	static response_header_common_json_utf8(req, res) {
		this.response_header_CORS(req, res);
		res.setHeader(EnumHttpResponseHeader.CONTENT_TYPE, EnumHttpResponseHeader.APPLICATION_JSON_UTF8);
	}

	static response_header_common_text_utf8(req, res) {
		this.response_header_CORS(req, res);
		res.setHeader(EnumHttpResponseHeader.CONTENT_TYPE, EnumHttpResponseHeader.TEXT_PLAIN_UTF8);
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_200(req, res, message: string='ok'): void {
		this.response_header_common_text_utf8(req, res);
		res.writeHead(200, EnumMimeType.txt);
		res.write(message);
		res.end();
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_200_Boolean_False(req, res, message: Boolean=false): void {
		this.response_header_common_text_utf8(req, res);
		res.writeHead(200, EnumMimeType.txt);
		res.write(message.toString());
		res.end();
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_200_Boolean_True(req, res, message: Boolean=true): void {
		this.response_header_common_text_utf8(req, res);
		res.writeHead(200, EnumMimeType.txt);
		res.write(message.toString());
		res.end();
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_200_JSON(req, res, message: object={c: 200, m: 'ok'}): void {
		this.response_header_common_json_utf8(req, res);
		res.writeHead(200, EnumMimeType.txt);
		res.write(JSON.stringify(message));
		res.end();
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_404(req, res, message: string='404 Not Found'): void {
		this.response_header_common_text_utf8(req, res);
		res.writeHead(404, EnumMimeType.txt);
		res.write(message);
		res.end();
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_500(req, res, message: string='500 Internal server error'): void {
		this.response_header_common_text_utf8(req, res);
		res.writeHead(500, EnumMimeType.txt);
		res.write(message);
		res.end();
	}

	/**
	 * 
	 * @param req http.IncomingMessage
	 * @param res http.ServerResponse
	 * @param message 
	 */
	static response_500_JSON(req, res, message: object={c: 500, m: 'Internal server error'}): void {
		this.response_header_common_json_utf8(req, res);
		res.writeHead(500, EnumMimeType.txt);
		res.write(JSON.stringify(message));
		res.end();
	}
}