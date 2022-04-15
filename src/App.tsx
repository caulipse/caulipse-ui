import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import loadable from '@loadable/component';
import Snackbar from '@common/snackbar/Snackbar';
import getCookie from '@shared/utils/getCookie';
import useModal from '@src/hooks/modal/useModal';
import './App.scss';
import { Footer, Header } from './app/shared/components';
import ProfilePage from './pages/profile';
import StudyPage from './pages/study';
import StudyDetailPage from './pages/studyDetail';
import MainPage from './pages/main';
import globalState from './state';
import ResetPwPage from './pages/signup/ResetPwPage';
import StudySearchResultPage from './pages/studySearchResult';

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
	return (
		<Router forceRefresh>
			<Location />
			<Header />
			<Switch>
				<Route exact path="/study/search" component={StudySearchResultPage} />
				<Route exact path="/study/:category" component={StudyPage} />
				<Route exact path="/study" component={StudyPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route exact path="/study/detail/:studyId" component={StudyDetailPage} />
				<Route exact path="/" component={MainPage} />
				<Redirect path="*" to="/" />
			</Switch>
			<Footer />
		</Router>
	);
};

const RootContainer = (): JSX.Element => {
	return (
		<Router forceRefresh>
			<Switch>
				<Route exact path="/reset-password" component={ResetPwPage} />
				<Route path="/" component={MainContainer} />
				<Redirect path="*" to="/" />
			</Switch>
		</Router>
	);
};

const App = (): JSX.Element => {
	const [state] = useAtom(globalState);
	const { open: snackbarOpen, message, type } = state.snackbar;
	const { open: modalOpen, key, params } = state.modal;
	const { closeModal } = useModal();

	const Component = loadable(() => import(`@modal/${key}`));

	return (
		<div>
			<div className="main-con">
				<RootContainer />
			</div>
			{snackbarOpen && <Snackbar open={snackbarOpen} message={message} type={type} />}
			{modalOpen && Component && <Component open={modalOpen} onClose={closeModal} params={params} />}
		</div>
	);
};

export default App;
