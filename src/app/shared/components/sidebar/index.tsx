import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "./index.scss";
import {
  sidebarCategoriesInMain, 
  sidebarCategoriesInProfile, 
  SidebarCategoryType 
} from './sidebarList';

const SideBar: React.FC = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState<string>("");
  const [List, setList] = useState<SidebarCategoryType[]>(sidebarCategoriesInMain);
  const locationPath = useLocation().pathname;
  const history = useHistory();
  
  const handleDefalutRoute = (route: string, id: string) => {
    setCurrentCategoryId(id);
    history.push(route);
  }
  useEffect(() => {
    if (locationPath === "/") {
      setCurrentCategoryId("");
      setList(sidebarCategoriesInMain);
    }
    if (locationPath.includes("profile")) setList(sidebarCategoriesInProfile);
  }, [locationPath]);

  return (
    <div className="sidebar-con">
      <div className="sidebar-wrapper">
        {
          List.map((category: SidebarCategoryType) => (
            <div className="sidebar-bts"key={category.id}>
              <button onClick={() => handleDefalutRoute(category.defaltRoute, category.id)} type="button">
                <div className="category-bt">{category.name}</div>
              </button>
              <div className="sub-bts">
                { 
                  currentCategoryId === category.id &&
                    category.subCategories.map((sub) => (
                      <button type="button" key={sub.name} onClick={() => history.push(sub.route)}>
                        <div className="sub-bt">{sub.name}</div>
                      </button>
                    ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SideBar;