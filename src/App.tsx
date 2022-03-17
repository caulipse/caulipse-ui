import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import loadable from '@loadable/component';
import Snackbar from '@common/snackbar/Snackbar';
import getCookie from '@shared/utils/getCookie';
import useModal from '@src/hooks/modal/useModal';
import './App.scss';
import { Footer, Header } from './app/shared/components';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import StudyPage from './pages/study';
import StudyDetailPage from './pages/studyDetail';
import globalState from './state';
import SignupPage from './pages/signup';

const Location = () => {
	const { pathname } = useLocation();
	const [state, setState] = useAtom(globalState);
	const accessToken = getCookie('accessToken');

	useEffect(() => {
		setState({ ...state, login: !!accessToken });
	}, [pathname, accessToken]);
	return null;
};

const MainContainer = (): JSX.Element => {
	const [state] = useAtom(globalState);
	const { open: snackbarOpen, message, type } = state.snackbar;
	const { open: modalOpen, key, params } = state.modal;
	const { closeModal } = useModal();

	const Component = loadable(() => import(`@modal/${key}`));

	return (
		<div>
			<div className="main-con">
				<Switch>
					<Route exact path="/study/:category" component={StudyPage} />
					<Route path="/profile" component={ProfilePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignupPage} />
					<Route path="/study/detail/:studyId" component={StudyDetailPage} />
					<Redirect path="*" to="/study/employment" />
				</Switch>
			</div>
			{snackbarOpen && <Snackbar open={snackbarOpen} message={message} type={type} />}
			{modalOpen && Component && <Component open={modalOpen} onClose={closeModal} params={params} />}
		</div>
	);
};

const App = (): JSX.Element => {
	return (
		<Router>
			<Location />
			<Header />
			<MainContainer />
			<Footer />
		</Router>
	);
};

export default App;
