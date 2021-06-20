export interface SidebarSubCategoryType {
  name: string;
  route: string;
}
export interface SidebarCategoryType {
  id: string,
  name: string;
  defaltRoute: string;
  subCategories: SidebarSubCategoryType[];
}
export const sidebarCategoriesInMain: SidebarCategoryType[] = [
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
    subCategories: []
  },
  {
    id: "nonsub",
    name: "중앙대 비교과",
    defaltRoute: "/nonsub",
    subCategories: []
  },
];
export const sidebarCategoriesInProfile: SidebarCategoryType[] = [
  {
    id: "my profile",
    name: "내 정보",
    defaltRoute: "/profile/my",
    subCategories: [
      {
        name: "프로필 설정",
        route: "/profile/my",
      },
      {
        name: "업적",
        route: "/profile/achievement",
      },
      {
        name: "계정설정",
        route: "/profile/setting",
      },
      
    ]
  },
  {
    id: "bookmark",
    name: "북마크",
    defaltRoute: "/profile/bookmark",
    subCategories: []
  },
  {
    id: "manage study",
    name: "스터디 관리",
    defaltRoute: "/profile/study",
    subCategories: [
      {
        name: "신청한 스터디",
        route: "/profile/study",
      },
      {
        name: "내가 모집한 스터디",
        route: "/profile/study-recruit",
      },
    ]
  },
];
