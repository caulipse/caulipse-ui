import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const Header: React.FC = () => {

  const history = useHistory();

  const onClick = (route: string ) => {
    history.push(route);
  }
  return (
    <div className="header-con">
      <div className="header-wrap">
        <div>
          <button type="button" onClick={() => onClick("/")}>
            <div className="header-logo">Caulips</div>
          </button>
        </div>
        <div className="header-user-bt">
          <button type="button" onClick={() => onClick("/profile")}>
            <div>profile</div>
          </button>
          <button type="button" onClick={() => onClick("/bookmark")}>
            <div>book mark</div>
          </button>
          <button type="button" onClick={() => onClick("/bookmark")}>
            <div>Note</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;