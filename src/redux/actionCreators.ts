import * as actionTypes from './actionTypes'

export const addPosts = (post: IPost[]) => {
  const action: PostAction = {
    type: actionTypes.ADD_POSTS,
    post,
  }
  return action
}

export const addVisiblePosts = (post: IPost[]) => {
  const action: PostAction = {
    type: actionTypes.ADD_VISIBLE_POSTS,
    post,
  }
  return action
}

export const setPage = (numb: number) => {
  const action: PageAction = {
    type: actionTypes.SET_PAGE,
    numb,
  }
  return action
}

export const setTotalCount = (numb: number) => {
  const action: PageAction = {
    type: actionTypes.SET_TOTAL_COUNT,
    numb,
  }
  return action
}

export const setAllPosts = (post: IPost[]) => {
  const action: PostAction = {
    type: actionTypes.SET_ALL_POSTS,
    post,
  }
  return action
}