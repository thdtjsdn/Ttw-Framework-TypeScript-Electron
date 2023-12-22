export class UtilFS {

    static fs = require('fs');

    static async readFile(path: string) {
        //return await fs.readFile(path);
    }

    /**
     * 
     * @param path 
     * @param cb function(err,data){}
     */
    static readFile_cb(path: string, cb: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void {
        this.fs.readFile(path, cb);
    }

    /**
     * 
     * @param path 
     * @returns 
     */
    static readFileSync(path: string) {
        return this.fs.readFileSync(path);
    }

    static async stat(path: string) {
        return this.fs.stat(path);
    }

    static stat_cb(path: string, cb): void {
        this.fs.state(path, cb);
    }

    static statSync(path: string) {
        return this.fs.statSync(path);
    }
}