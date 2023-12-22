import { UtilDate } from "../date/util_date";

//2023.12.21 23:00 - I guess this is the only way?
(function(){
    const console = require("console");
	global._console = console;
	global._console._debug  = console.debug;
	global._console._error  = console.error;
	global._console._log    = console.log;
	global._console._log_uri= console.log;
	global._console._warn   = console.warn;
})();

export class UtilConsole {

    fs = require("fs");
    util = require("util");

    CWD: string = global.process.cwd() + '/';

    //--------------------------------------------------;
    //Log file updated every day;
    //fn0: Function = UtilDate.getNowLocaleString_D;
    //Log file updated every hour;
    fn0: Function = UtilDate.getNowLocaleString_H;
    //Log file updated every minutes;
    //fn0: Function = UtilDate.getNowLocaleString_HM;
    //--------------------------------------------------;


	fileName: string = this.fn0() + ' - ' + UtilDate.getNow() + '.txt';


    private _filePath_debug  : string;
	private _filePath_error  : string;
	private _filePath_log    : string;
    private _filePath_log_uri: string;
	private _filePath_warn   : string;

    fileConsoleDebug;
    fileConsoleError;
    fileConsoleLog;
    fileConsoleLogURI;
    fileConsoleWarn;

    constructor(logPath: string='') {
        if(logPath != ''){
            this.CWD = logPath;

            this._filePath_debug   = this.CWD + 'DEBUG   ' + this.fileName;
            this._filePath_error   = this.CWD + 'ERROR   ' + this.fileName;
            this._filePath_log     = this.CWD + 'LOGS    ' + this.fileName;
            this._filePath_log_uri = this.CWD + 'LOG_URI ' + this.fileName;
            this._filePath_warn    = this.CWD + 'WARN    ' + this.fileName;

            this.fileConsoleDebug = this.fs.createWriteStream(this._filePath_debug  , { flags : 'w' });
            this.fileConsoleError = this.fs.createWriteStream(this._filePath_error  , { flags : 'w' });
            this.fileConsoleLog   = this.fs.createWriteStream(this._filePath_log    , { flags : 'w' });
            this.fileConsoleLogURI= this.fs.createWriteStream(this._filePath_log_uri, { flags : 'w' });
            this.fileConsoleWarn  = this.fs.createWriteStream(this._filePath_warn   , { flags : 'w' });
        }

        const owner = this;

        global.console.debug = function(message?: any, ...optionalParams: any[]){
            owner.update();
            global._console._debug(message, ...optionalParams);
            owner.fileConsoleDebug.write(`\n${message}`);
        };

        global.console.error = function(message?: any, ...optionalParams: any[]){
            owner.update();
            global._console._error(message, ...optionalParams);
            owner.fileConsoleError.write(`\n${message}`);
        };

        global.console.log = function(message?: any, ...optionalParams: any[]){
            owner.update();
            global._console._log(message, ...optionalParams);
            owner.fileConsoleLog.write(`\n${message}`);
        };

        global.console['log_uri'] = function(message?: any, ...optionalParams: any[]){
            owner.update();
            global._console._log_uri(message, ...optionalParams);
            owner.fileConsoleLogURI.write(`\n${message}`);
        };

        global.console.warn = function(message?: any, ...optionalParams: any[]){
            owner.update();
            global._console._warn(message, ...optionalParams);
            owner.fileConsoleWarn.write(`\n${message}`);
        };
	}

    update() {
        const fileName = this.fn0() + ' - ' + UtilDate.getNow() + '.txt';

        //delete ' - Date.now()'
        if(fileName.replace(/\ \-\ .*/, '') == this.fileName.replace(/\ \-\ .*/,'')) {
            return;
        }
        this.fileName = fileName;

        const _filePath_debug  : string = this.CWD + 'DEBUG   ' + fileName;
        const _filePath_error  : string = this.CWD + 'ERRROR  ' + fileName;
        const _filePath_log    : string = this.CWD + 'LOGS    ' + fileName;
        const _filePath_log_uri: string = this.CWD + 'LOG_URI ' + fileName;
        const _filePath_warn   : string = this.CWD + 'WARN    ' + fileName;

        if(_filePath_debug != this._filePath_debug){
            this._filePath_debug = _filePath_debug;
            this.fileConsoleDebug.close();
            this.fileConsoleDebug = this.fs.createWriteStream(this._filePath_debug, { flags : 'w' });
        }
        if(_filePath_error != this._filePath_error){
            this._filePath_error = _filePath_error;
            this.fileConsoleError.close();
            this.fileConsoleError = this.fs.createWriteStream(this._filePath_error, { flags : 'w' });
        }
        if(_filePath_log != this._filePath_log){
            this._filePath_log = _filePath_log;
            this.fileConsoleLog.close();
            this.fileConsoleLog = this.fs.createWriteStream(this._filePath_log, { flags : 'w' });
        }
        if(_filePath_log_uri != this._filePath_log_uri){
            this._filePath_log_uri = _filePath_log_uri;
            this.fileConsoleLogURI.close();
            this.fileConsoleLogURI = this.fs.createWriteStream(this._filePath_log_uri, { flags : 'w' });
        }
        if(_filePath_warn != this._filePath_warn){
            this._filePath_warn = _filePath_warn;
            this.fileConsoleWarn.close();
            this.fileConsoleWarn = this.fs.createWriteStream(this._filePath_warn, { flags : 'w' });
        }
    }
}