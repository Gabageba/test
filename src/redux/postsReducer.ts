import * as actionTypes from "./actionTypes"

const initialState: PostState = {
  posts: [],
  visiblePosts: [],
  allPosts: []
}

const postsReducer = (
  state: PostState = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case actionTypes.ADD_POSTS:
      return {...state, posts: action.post}
    case actionTypes.ADD_VISIBLE_POSTS:
      return {...state, visiblePosts: action.post}
    case actionTypes.SET_ALL_POSTS:
      return {...state, allPosts: action.post}
  }
  return state
}

export default postsReducer