import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import Snackbar from '@common/snackbar/Snackbar';
import getCookie from '@shared/utils/getCookie';
import './App.scss';
import { Footer, Header } from './app/shared/components';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import StudyPage from './pages/study';
import StudyDetailPage from './pages/studyDetail';
import globalState from './state';

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
	const { open, message, type } = state.snackbar;

	return (
		<div className="router-con">
			<div className="main-con">
				<Switch>
					<Route exact path="/study/:category" component={StudyPage} />
					<Route path="/profile" component={ProfilePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/study/detail/:studyId" component={StudyDetailPage} />
					<Redirect path="*" to="/study/employment" />
				</Switch>
			</div>
			{open && <Snackbar open={open} message={message} type={type} />}
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
