export enum EnumMimeType {

	 //applications
	//, xls = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	//, xlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

	//application / javascript;
	cjs = 'application/javascript' //no open;
	//, dbjs = 'application/javascript' //no open;
	, js = 'application/javascript'
	//, tjs = 'application/javascript' //no open;
	//, ts = 'application/typescript' //no open;

	//audio;
	, mid = 'audio/midi'//, mid = 'application/x-midi'
	, mp3 = 'audio/mpeg'
	, wav = 'audio/wav'

	//Font;
	, ttf = 'application/x-font-ttf'
	, woff = 'application/x-font-woff'
	, woff2 = 'application/x-font-woff'

	//image;
	, bmp = 'image/bmp'
	, gif = 'image/gif'
	, jpeg = 'image/jpeg'
	, jpg = 'image/jpeg'
	, png = 'image/png'

	//text;
	, css = 'text/css'
	, csv = 'text/plain'

	//, debug = 'text/plain'  //no open;		

	, html = 'text/html'

	//, less = 'text/css' //no open;

	, list = 'text/plain'
	, json = 'text/json'
	, map = 'text/plain'

	//, thtml = 'text/html' //no open;

	, txt = 'text/plain'
	, xml = 'text/xml'
}