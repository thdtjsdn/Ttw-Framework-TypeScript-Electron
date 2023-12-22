import { DictionaryInterface } from "../dictionary/interfaces/dictionary_interface";

export class BatchBase {
	name: string = this.constructor.name;

	constructor(dictionary: DictionaryInterface, host: string, port: number, uri: string, timeCycle: number) {

	}
}