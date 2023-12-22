import { DictionaryInterface } from "./interfaces/dictionary_interface";

import { AppLogger } from "../../log/app_logger";

export class DictionaryStoreTransaction implements DictionaryInterface {

	//private arr: object[] = [];
	private dic: Map<string, object> = new Map();

	constructor() {}

	add( transactionId: string, data: object ){
		if( !this.dic.get( transactionId ) ){
			this.dic.set( transactionId, data );
			//this.arr.push( data );
		}
	}

	check( transactionId: string ){
		if( this.dic.get( transactionId ) ){
			return true;
		}
		
		return false;
	}

	del(transactionId: string){
		AppLogger.logy(`Delete Transaction - ${transactionId}`, this);
		this.dic.delete(transactionId);
	}

	get(transactionId: string): object{
		return this.dic.get(transactionId);
	}

	get list(): object[]{
		//return this.arr;
		return null;
	};
	
	get map(): Map<string, object>{
		return this.dic;
	};
}
