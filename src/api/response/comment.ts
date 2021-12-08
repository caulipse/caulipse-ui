export interface GetCommentResponse {
  id: string
  userId: string
  studyId: string
  nestedCommentId: string
  createdAt: string
  isNested: boolean
  content: string
}