/* eslint-disable import/prefer-default-export */
import { differenceInDays } from 'date-fns';

export const getDday = (dueDate: string): string => {
	let separator;
	if (new Date(dueDate) >= new Date()) {
		separator = '-';
	} else {
		separator = '+';
	}
	return `D${separator}${Math.abs(differenceInDays(new Date(dueDate), new Date()))}`;
};
