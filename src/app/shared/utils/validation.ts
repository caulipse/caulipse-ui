/* eslint-disable import/prefer-default-export */
export const validateEmail = (email: string): boolean => {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return !!email.match(validRegex);
};
