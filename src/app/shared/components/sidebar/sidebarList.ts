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
    defaltRoute: "/study/employment",
    subCategories: [
      {
        name: "취업, 면접",
        route: "/study/employment",
      },
      {
        name: "자격증",
        route: "/study/certificate",
      },
      {
        name: "프로그래밍",
        route: "/study/programming",
      },
      {
        name: "생활 기타",
        route: "/study/etc",
      },
    ]
  },
];
export const sidebarCategoriesInProfile: SidebarCategoryType[] = [
  {
    id: "my profile",
    name: "내 정보",
    defaltRoute: "/profile",
    subCategories: [
      {
        name: "프로필 설정",
        route: "/profile",
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
    defaltRoute: "/bookmark",
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
