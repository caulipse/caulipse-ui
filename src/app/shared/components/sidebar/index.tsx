import React from 'react';
import { useHistory } from 'react-router-dom';
import "./index.scss";

const SideBar: React.FC = () => {

  const history = useHistory();

  const onClick = (route: string) => {
    history.push(route);
  }
  return (
    <div className="sidebar-con">
      <div>
        <button type="button" onClick={() => onClick("/study/list")}>
          <div>스터디</div>
        </button>
        <button type="button" onClick={() => onClick("/study/search")}>
          <div>찾아보기</div>
        </button>
      </div>
        <button type="button" onClick={() => onClick("/post")}>
          <div>게시글</div>
        </button>
        <button type="button" onClick={() => onClick("/nonsub")}>
          <div>비교과</div>
        </button>
    </div>
  );
};

export default SideBar;