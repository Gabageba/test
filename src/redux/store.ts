import {combineReducers, createStore, Store} from 'redux'
import postsReducer from './postsReducer'
import pageReducer from './pageReducer'

let reducers = combineReducers({
  posts: postsReducer,
  page: pageReducer
})

export let store: Store<PostState, PostAction> & {
  dispatch: DispatchType
} = createStore(reducers)