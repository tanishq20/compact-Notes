export const authReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LOGIN_SUCCESS':
      return {
        ...state,
        userLogin: true,
        userDetails: action.userDetailsPayload,
        encodedToken: action.encodedTokenPayload,
      }
    case 'GET_LOGOUT_SUCCESS':
      return { ...state, userLogin: false, userDetails: {}, encodedToken: '' }
    default:
      return state
  }
}
