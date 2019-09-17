import * as Types from '../actions/types'

const init = {
  isAuthenticated: false,
  user: {},
  error: {}
}

const authReducer = (state=init, action) => {
  switch(action.type) {
    case Types.SET_USER: {
      return {
        isAuthenticated: action.payload.user !== 0,
        user: action.payload.user,
        error: action.payload.error
      }
    }
    case Types.USER_LOGOUT: {
      return {
        isAuthenticated: false,
        user: action.payload.user,
        error: action.payload.error
      }
    }
    default: return state
  }
}

export default authReducer
