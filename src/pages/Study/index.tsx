import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import StudyListPage from "@src/app/study/StudyListPage";
import './styles.scss';

const CategoryObj = {
  employment: "취업, 면접",
  certificate: "자격증",
  programming: "프로그래밍",
  etc: "생활 기타",
}
const StudyPage = (): JSX.Element => {
  const location = useLocation();
  
  const getValueFromCategoryObj = (key: string) => {
    const path = key.split('/')[2];
    const result = Object.keys(CategoryObj).indexOf(path);
    return Object.values(CategoryObj)[result];
  }

  return (
    <div className="studyPage-con">
      <div className="studyPage-title">
        <span className="studyPage-text">스터디</span>
        <span className="studyPage-category">&gt; {getValueFromCategoryObj(location.pathname)}</span>
      </div>
      <Switch>
        <Route exact path='/study/employment'component={StudyListPage}/>
        <Route exact path='/study/certificate'component={StudyListPage}/>
        <Route exact path='/study/programming'component={StudyListPage}/>
        <Route exact path='/study/etc'component={StudyListPage}/>
      </Switch>
    </div>
  );
};

export default StudyPage;