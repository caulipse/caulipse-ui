// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line consistent-return
const getCookie = (name: string) => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export default getCookie;
