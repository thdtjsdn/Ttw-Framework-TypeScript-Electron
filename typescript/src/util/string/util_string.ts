export class UtilString {

    /**
     * ip address cheker
     * @param ipStr 
     * @returns 
     */
    static isIPAddress(ipStr: string): Boolean {
        const octets = ipStr.split('.');
        if(octets.length !== 4){
            return false;
        }

        for(const octet of octets){
            let n_octet = Number(octet);
            if(!Number.isInteger(n_octet) || n_octet < 0 || n_octet > 255){
                return false;
            }
        }

        return true;
    }
	static isIPAddress_regexp(ipStr: string): Boolean {
        const regExp = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if(regExp.test(ipStr)){
            return true;
        }
        else {
            return false;
        }
    }
}