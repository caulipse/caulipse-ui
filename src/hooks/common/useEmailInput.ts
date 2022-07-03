import { validateCAUEmail, validateEmail } from '@src/app/shared/utils/validation';
import { SetStateAction } from 'jotai';
import React, { Dispatch, useState } from 'react';

const useEmailInput = (initialEmail: string): [string, Dispatch<SetStateAction<string>>, string] => {
	const [email, setEmail] = useState<string>(initialEmail);
	const [emailHelperText, setEmailHelperText] = useState<string>('');

	if (!email) {
		setEmailHelperText('이메일을 입력해 주세요.');
	} else if (!validateEmail(email) || !validateCAUEmail(email)) {
		setEmailHelperText('이메일 양식이 올바르지 않습니다. 중앙대 이메일을 사용해주세요.');
	}

	return [email, setEmail, emailHelperText];
};
export default useEmailInput;
