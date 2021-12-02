import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import './styles.scss';
import SubCategoryBarContainer from "@src/app/study/SubCategoryBar/SubCategoryBarContainer";
import StudyListContainter from "@src/app/study/StudyList/StudyListContainer";
import StudyCategoryBarContainer from "@src/app/study/StudyCategoryBar/StudyCategoryBarContainer";

const CategoryObj = {
  employment: "취업, 면접",
  certificate: "자격증",
  programming: "프로그래밍",
  etc: "생활 기타",
}
const StudyPage = (): JSX.Element => {
  const location = useLocation();
  const history = useHistory();
  const { category } = useParams<any>();
  const [studyCategory, setStudyCategory] = useState<string>('');
  const [selectedList, setSelectedList] = useState<string[]>([]);
  
  const getValueFromCategoryObj = (key: string) => {
    const path = key.split('/')[2];
    const result = Object.keys(CategoryObj).indexOf(path);
    setStudyCategory(Object.values(CategoryObj)[result]);
  }
  const addSubCategory = (c: string) => {
    setSelectedList(() => [...selectedList, c]);
  }
  const rmSubCategory = (c: string) => {
    const newSelectedList = selectedList.filter((item) => item !== c );
    setSelectedList(newSelectedList);
  };
  const handleRemoveSubCategory = (c: string) => {
    const newSelectedList = selectedList.filter((item) => item !== c );
    setSelectedList(newSelectedList);
  }
  useEffect(() => {
    if (studyCategory === '') {
      getValueFromCategoryObj(location.pathname);
    }
    if (category === undefined) {
      history.push('/study/employment')
    }
  }, [studyCategory])

  return (
    <div className="studyPage-con">
      <div>
        <StudyCategoryBarContainer/>
      </div>
      <div className="studyPage-Toolbar-con">
        <div className="studyPage-Toolbar-wrap">
          <SubCategoryBarContainer addSubCategory={addSubCategory} rmSubCategory={rmSubCategory}/>
        </div>
      </div>
      <StudyListContainter/>
    </div>
  );
};

export default StudyPage;