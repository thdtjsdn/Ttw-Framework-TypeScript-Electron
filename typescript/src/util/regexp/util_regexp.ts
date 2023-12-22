export class UtilRegExp {

	/**
	 * 문자열의 라인별 '시작 문자' 매칭 후 삭제하기
	 * @param input 
	 * @returns 
	 */
	static 문자열의_라인별_시작_문자_매칭_삭제(input: {target: string; result: string, deleteStr: string}): {target: string; result: string, deleteStr: string}	{
		const regExp = new RegExp('\n' + input.deleteStr + '.*', 'gi');
		input.result = input.target.replace(regExp, '');
		return input;
	}
}