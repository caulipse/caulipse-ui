import API from '@src/api';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

export default () => {
	const history = useHistory();

	const mutation = async () => {
		const res = await API.deleteUser();
		return res.data;
	};

	return useMutation(mutation, {
		onSuccess: (response: any) => {
			console.log(response);
			history.push('/');
		},
		onError: (e: Error) => {
			console.error(e.message);
		},
	});
};
