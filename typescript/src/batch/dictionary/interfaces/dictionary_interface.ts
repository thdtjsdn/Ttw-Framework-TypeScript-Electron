export interface DictionaryInterface {

	add( transactionId: string, data: object ): void;

	check( transactionId: string ): void;

	del(transactionId: string): void;

	get(transactionId: string): object;

	get list(): object[];
	get map(): Map<string, object>;
}
