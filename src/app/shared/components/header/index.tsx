import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header: React.FC = () => (
  <div className="header-con">
    <div className="header-wrap">
      <div>
        <Link to="/">LOGO</Link>
      </div>
    </div>
  </div>
);

export default Header;