import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAtom } from 'jotai';
import './App.scss';
import { Footer, Header } from './app/shared/components';
import LoginPage from './pages/login';
import ProfilePage from './pages/profile';
import StudyPage from './pages/study';
import StudyDetailPage from './pages/studyDetail';
import globalState from './state';

const MainContainer = (): JSX.Element => (
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
	</div>
);

const App = (): JSX.Element => {
	// 만약 globalState 에 저장되어 있는 값을 변경하고 싶으면
	// const [state, setState] = useAtom(globalState);
	// 위 코드에서 setState 로 변경할 수 있다.
	const [state] = useAtom(globalState);
	if (state.login) {
		console.info('login');
	} else {
		console.info('not login');
	}
	return (
		<Router>
			<Header />
			<MainContainer />
			<Footer />
		</Router>
	);
};

export default App;
