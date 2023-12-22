import { AppLogger } from "../log/app_logger";

export class ProcessExceptions {

	constructor() {
		
	}
}

//*/
(function(){
	global.process.on(`uncaughtException`, function(error){
		try {
			AppLogger.error(error.message, error.stack, this);
	
			//send webhooks;
			
			//slack, telegram, jandi, kakaotalk, etc ...
		} catch( e ){
	
		}
	});
})();
//*/