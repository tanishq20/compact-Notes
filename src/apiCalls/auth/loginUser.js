import axios from 'axios'
import { Toast } from '../../components'

export const loginUser = async (loginForm, authDispatch, navigate) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: loginForm.email,
      password: loginForm.password,
    })
    if (response.status === 200) {
      authDispatch({
        type: 'GET_LOGIN_SUCCESS',
        userDetailsPayload: response.data.foundUser,
        encodedTokenPayload: response.data.encodedToken,
      })
      localStorage.setItem('encodedToken', response.data.encodedToken)
      localStorage.setItem('firstName', response.data.foundUser.firstName)
      navigate('/notes', { replace: true })
      Toast('Login Successfull', 'success')
    }
  } catch (error) {
    Toast('Login Failed, try again later', 'error')
  }
}
