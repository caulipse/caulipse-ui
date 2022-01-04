export interface GetCommentResponse {
  id: string
  userId: string
  studyId: string
  nestedCommentId: string | null
  createdAt: string
  isNested: boolean
  content: string
}