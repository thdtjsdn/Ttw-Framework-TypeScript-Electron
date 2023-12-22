import { UtilLogger } from "../../log/util_logger";

import Axios, { AxiosRequestConfig } from "axios";

export class UtilHttp {

	//-------------------------------------------------- Axios START;

	/**
	 * Axios
	 * @param url http://example.com
	 * @returns 
	 */
	static async get_axios(url: string, config?: AxiosRequestConfig<any>): Promise<any> {
		try{
			var response = await Axios.get(url, config);
		}
		catch(er){
			UtilLogger.error(`UtilHttp.get_axios - ${er}`);
		}
		return response;
	}

	/**
	 * Axios
	 * @param {string} url 
	 * @param {Function} cb function(response){}
	 */
	static get_axios_cb(url: string, cb): void {
		try{
			Axios.get(url)
				.then(cb)
				.catch(cb);
		}
		catch(er){
			UtilLogger.error(`UtilHttp.get_axios_cb - ${er}`);
		}
	}

	/**
	 * Axios
	 * @param {string} url http://example.com
	 * @param {string} params '{"page":1,"date":"2023-01-01"}'
	 * @param {object} headers { headers : { 'Content-Type': 'application/json' } }
	 * @returns 
	 */
	static async post_axios(url: string, params: object, headers: object): Promise<any> {
		try{
			var response = await Axios.post(url, params, headers);
		}
		catch( er ){
			UtilLogger.error(`UtilHttp.post_axios - ${er}`);
		}
		return response;
	}

	/**
	 * Axios
	 * @param {string} url http://example.com
	 * @param {string} params '{"page":1,"date":"2023-01-01"}'
	 * @param {object} headers { headers : { 'Content-Type': 'application/json' } }
	 * @param {Function} cb function(response){}
	 */
	static post_axios_cb(url: string, params: object, headers: object, cb): void {
		try{
			Axios.post(url, params, headers)
				.then(cb)
				.catch(cb);
		}
		catch( er ){
			UtilLogger.error(`UtilHttp.post_axios_cb - ${er}`);
		}
	}

	//-------------------------------------------------- Axios END;

	//-------------------------------------------------- got START;
	//-------------------------------------------------- got END;
	//-------------------------------------------------- request START;
	//-------------------------------------------------- request END;
}