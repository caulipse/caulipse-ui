import API from '@src/api';
import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

export default () => {
	const history = useHistory();

	const mutation = async (): Promise<any> => {
		const res = await API.logout();
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
