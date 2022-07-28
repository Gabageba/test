import * as actionTypes from "./actionTypes"

const initialState: PageState = {
  page: 1,
  totalCount: 0
}

const pageReducer = (
  state: PageState = initialState,
  action: PageAction
): PageState => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return {...state, page: action.numb}
    case actionTypes.SET_TOTAL_COUNT:
      return {...state, totalCount: action.numb}
  }
  return state
}

export default pageReducer