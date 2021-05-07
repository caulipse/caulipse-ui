import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar-con">
      <div>
        <Link to="/study/list">스터디</Link>
        <div>
          <Link to="/study/search">찾아보기</Link>
        </div>
      </div>
      <div>
        <Link to="/post">게시글</Link>
      </div>
      <div>
        <Link to="/nonsub">비교과</Link>
      </div>
    </div>
  );
};

export default SideBar;