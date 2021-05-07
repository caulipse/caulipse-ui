import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header: React.FC = () => (
  <div className="header-con">
    <div className="header-wrap">
      <div>
        <Link to="/">LOGO</Link>
      </div>
      <div className="header-user-bt">
        <div>
          <Link to="/profile">profile</Link>
        </div>
        <div>
          <Link to="/bookmark">Book Mark</Link>
        </div>
        <div>
          <Link to="/note">Note</Link>
        </div>
        
      </div>
    </div>
  </div>
);

export default Header;