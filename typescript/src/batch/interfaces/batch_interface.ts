import { DictionaryInterface } from "../dictionary/interfaces/dictionary_interface";

export interface BatchInterface{
  host: string;
  port: number;
  uri: string;
  url0: string;

  page_now: number;
	page_total: number;

	RETRY_CNT: number;
	RETRY_CNT_MAX: number;

	dictionary: DictionaryInterface;

	timeoutId: any;

	flagStop: boolean;

  /**
   * API for real-time operation and driveable environments (Electron, Tauri, etc..) rather than a CLI
   * @returns {Boolean}
   */
  crawlingStart(): Boolean;

  /**
   * API for real-time operation and driveable environments (Electron, Tauri, etc..) rather than a CLI
   * @returns {Boolean}
   */
  crawlingStop(): Boolean;

  crawling(owner: BatchInterface):void;


  timeoutIdClear():void;
  timeoutIdSet(n: any):void;
}
