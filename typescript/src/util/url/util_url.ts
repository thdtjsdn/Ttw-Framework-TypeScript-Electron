export class UtilURL {

    static url = require("url");

    /**
     * 
     * @param urlParam 
     * @returns 
     */
    static getURIFromURL(urlParam: string){
        return this.url.parse( urlParam ).pathname;
    }
}