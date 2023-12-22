import { UtilLogger } from "../../log/util_logger";

export class UtilProcess {

    process = require('process');
    
    /*/
    static isElectron(): Boolean {
        const v = process.env.ELECTRON_VERSION;
        if(v){
            UtilLogger.logy(`Electron Version : ${v}`, this);
            return true;
        }
        else {
            return false;
        }
    }
    //*/

    static isElectron(): Boolean {
        const b0 = (process.execPath.indexOf('Electron') == -1) ? false : true;
        const b1 = (process.execPath.indexOf('electron') == -1) ? false : true;
        const b = (b0 && b1);

        UtilLogger.logy(`is Electron : ${b}`, this);
        
        if(b){
            return true;
        }
        else {
            return false;
        }
    }
}