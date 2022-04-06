import axios from 'axios'
import { Toast } from '../../components'

export const signupUser = async (signupForm, navigate) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      firstName: signupForm.firstName,
      lastName: signupForm.lastName,
      email: signupForm.email,
      password: signupForm.password,
    })
    if (response.status === 201) {
      Toast('Signup Successfull', 'success')
      navigate('/login', { replace: true })
    }
  } catch (error) {
    Toast('Signup Failed, try again later.', 'error')
  }
}
