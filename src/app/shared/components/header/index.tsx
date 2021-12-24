import React from 'react';
import { useHistory } from 'react-router-dom';
import { HeaderButtonProps, headerButtons } from './headerList';
import './index.scss';

const Header: React.FC = () => {
  const history = useHistory();
  
  return (
    <header className="header-con">
      <div className="header-wrap">
        <div>
          <button type="button" onClick={() => history.push("/study/employment")}>
            <div className="header-logo">Caulipse</div>
          </button>
        </div>
        <div className="header-user-bt">
          {
            headerButtons.map((button: HeaderButtonProps) => (
              <button key={button.title} type="button" onClick={() => history.push(button.route)}>
                <div>{button.title}</div>
              </button>
            ))
          }
        </div>
      </div>
    </header>
  );
};

export default Header;