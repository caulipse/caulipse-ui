import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./index.scss";

const SideBar: React.FC = () => {
  const [currentCategotyId, setCurrentCategoryId] = useState<string>("");
  const history = useHistory();

  const onClick = (route: string) => {
    history.push(route);
  }
  const hhandleDefalutRoute = (route: string, id: string) => {
    setCurrentCategoryId(id);
    history.push(route);
  }
  interface SidebarSubCategoryType {
    name: string;
    route: string;
  }
  interface SidebarCategoryType {
    id: string,
    name: string;
    defaltRoute: string;
    subCategories: SidebarSubCategoryType[];
  }
  const sidebarCategories: SidebarCategoryType[] = [
    {
      id: "study",
      name: "스터디",
      defaltRoute: "/study/list",
      subCategories: [
        {
          name: "스터디",
          route: "/study/list",
        },
        {
          name: "찾아보기",
          route: "/study/search",
        },
      ]
    },
    {
      id: "post",
      name: "게시글",
      defaltRoute: "/post",
      subCategories: [
        {
          name: "게시글",
          route: "/post",
        },
      ]
    },
    {
      id: "nonsub",
      name: "중앙대 비교과",
      defaltRoute: "/nonsub",
      subCategories: []
    },
  ];

  return (
    <div className="sidebar-con">
      <div className="sidebar-wrapper">
        {
          sidebarCategories.map((category: SidebarCategoryType) => (
            <div key={category.id} >
              <button onClick={() => hhandleDefalutRoute(category.defaltRoute, category.id)} type="button">
                <div>{category.name}</div>
              </button>
              { currentCategotyId === category.id ? 
                category.subCategories.map((sub) => (
                  <button type="button" key={sub.name} onClick={() => onClick(sub.route)}>
                    <div>{sub.name}</div>
                  </button>
                ))
                :
                <></>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SideBar;