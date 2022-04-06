export const checkInputs = (name, value, validatePassword) => {
  const nameCheck = new RegExp(/^[a-zA-Z ]+$/)
  const emailCheck = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)
  const passwordCheck = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  )

  switch (name) {
    case 'firstName':
      if (!nameCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Name Format',
        }
      }
      return { isValid: true, msg: 'Valid Name Format' }
    case 'lastName':
      if (!nameCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Name Format',
        }
      }
      return { isValid: true, msg: 'Valid Name Format' }
    case 'email':
      if (!emailCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Email Id',
        }
      }
      return { isValid: true, msg: 'Valid Email Id' }
    case 'password':
      if (!passwordCheck.test(value)) {
        return {
          isValid: false,
          msg: 'Invalid Password, must contain eigth characters, at least one uppercase, one lowercase and one number',
        }
      }
      return { isValid: true, msg: 'Valid Password' }
    case 'confirmPassword':
      if (validatePassword !== value) {
        return {
          isValid: false,
          msg: 'Password does not match',
        }
      }
      return { isValid: true, msg: 'Password Matched' }
    default:
      return { isValid: true, msg: '' }
  }
}
