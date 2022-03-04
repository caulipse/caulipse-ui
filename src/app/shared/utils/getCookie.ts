const getCookie = (params: string) => {
	const key = `${params}=`;
	const { cookie } = document;
	let start = cookie.indexOf(key);
	let value = '';
	if (start !== -1) {
		start += key.length;
		let end = cookie.indexOf(';', start);
		if (end === -1) {
			end = cookie.length;
			value = cookie.substring(start, end);
		}
	}
	return value;
};

export default getCookie;
