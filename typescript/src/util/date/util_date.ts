export class UtilDate {

	static getNow(): number {
		return Date.now();
	}

	/*/
	static getNowLocaleString(): string {
		return new Date().toLocaleString();
	}
	/*/
	static getNowLocaleString(): string {
		const d = new Date();
		const yy: string = d.getFullYear().toString();
		let mm: string = (d.getMonth() + 1).toString();
			mm = (mm.length==1)?"0"+mm:mm;
		let dd: string = d.getDate().toString();
			dd = (dd.length==1)?"0"+dd:dd;
		let h: string = d.getHours().toString();
			h = (h.length==1)?"0"+h:h;
		let m: string = d.getMinutes().toString();
			m = (m.length==1)?"0"+m:m;
		let s: string = d.getSeconds().toString();
			s = (s.length==1)?"0"+s:s;
		return `${yy}-${mm}-${dd} ${h}:${m}:${s}`;
	}

	static getNowLocaleString_D(): string {
		const d = new Date();
		const yy: string = d.getFullYear().toString();
		let mm: string = (d.getMonth() + 1).toString();
			mm = (mm.length==1)?"0"+mm:mm;
		let dd: string = d.getDate().toString();
			dd = (dd.length==1)?"0"+dd:dd;
		let h: string = d.getHours().toString();
			h = (h.length==1)?"0"+h:h;
		return `${yy}-${mm}-${dd}`;
	}

	static getNowLocaleString_H(): string {
		const d = new Date();
		const yy: string = d.getFullYear().toString();
		let mm: string = (d.getMonth() + 1).toString();
			mm = (mm.length==1)?"0"+mm:mm;
		let dd: string = d.getDate().toString();
			dd = (dd.length==1)?"0"+dd:dd;
		let h: string = d.getHours().toString();
			h = (h.length==1)?"0"+h:h;
		return `${yy}-${mm}-${dd} ${h}H`;
	}

	static getNowLocaleString_HM(): string {
		const d = new Date();
		const yy: string = d.getFullYear().toString();
		let mm: string = (d.getMonth() + 1).toString();
			mm = (mm.length==1)?"0"+mm:mm;
		let dd: string = d.getDate().toString();
			dd = (dd.length==1)?"0"+dd:dd;
		let h: string = d.getHours().toString();
			h = (h.length==1)?"0"+h:h;
		let m: string = d.getMinutes().toString();
			m = (m.length==1)?"0"+m:m;
		return `${yy}-${mm}-${dd} ${h}：${m}M`;
	}
}