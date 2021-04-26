import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@src/pages/Home";
import { StudySearchPage, StudyListPage } from "@src/pages/Study";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* 스터디 > 과목별 스터디 */}
          <Route exact path="/study/list" component={StudyListPage} />
          {/* 스터디 > 찾아보기 */}
          <Route exact path="/study/search" component={StudySearchPage} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
