interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

type PostState = {
  posts: IPost[]
  visiblePosts: IPost[]
  allPosts: IPost[]
}

type PageState = {
  page: number
  totalCount: number
}

type PostAction = {
  type: string
  post: IPost[]
}

type PageAction = {
  type: string
  numb: number
}

type IState = {
  posts: PostState
  page: PageState
}

type DispatchType = (args: any) => any