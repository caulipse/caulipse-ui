export const validateEmail = (email: string): boolean => {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return !!email.match(validRegex);
};
export const validateCAUEmail = (email: string): boolean => {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@cau.ac.kr$/;
	return !!email.match(validRegex);
};
export const validatePassword = (password: string): boolean => {
	const validRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
	return !!password.match(validRegex);
};
