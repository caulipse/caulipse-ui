import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAtom } from 'jotai';
import Snackbar from '@common/snackbar/Snackbar';
import './App.scss';
import { Footer, Header } from './app/shared/components';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import StudyPage from './pages/study';
import StudyDetailPage from './pages/studyDetail';
import globalState from './state';

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
			<Header />
			<MainContainer />
			<Footer />
		</Router>
	);
};

export default App;
