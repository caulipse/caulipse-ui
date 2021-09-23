import React from "react";
import StudyListContainter from "./StudyList/StudyListContainer";
import StudySearchBarContainer from "./StudySearchBar/StudySearchBarContainer";
import SubCategoryBarContainer from "./SubCategoryBar/SubCategoryBarContainer";

const StudyListPage = ():JSX.Element => {
  return (
    <>
      <SubCategoryBarContainer/>
      <StudySearchBarContainer/>
      <StudyListContainter/>
    </>
  );
};

export default StudyListPage;
