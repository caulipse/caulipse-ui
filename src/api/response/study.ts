export interface GetStudyResponse {
  id: string
  createdAt: string
  title: string
  studyAbout: string
  time: number
  weekday: number
  frequency: number
  location: string
  hostId: string
  capacity: number
  membersCount: number
  vacancy: number
  isOpen: boolean
  category: number
  views: number
}

export interface GetStudyUserResponse {
  userId: string,
  studyId: string,
  isAccepted: boolean,
  tempBio: string,
}

