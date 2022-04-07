import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Auth.module.css'
import { signupUser } from '../../apiCalls'
import { checkInputs } from '../../formValidation/formValidation'

export const SignupForm = () => {
  let navigate = useNavigate()

  const defaultSignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [signupForm, setSignupForm] = useState(defaultSignupForm)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordValidation, setPasswordValidation] = useState('')
  const [formValidation, setFormValidation] = useState(false)
  const [inputValidation, setInputValidation] = useState({
    firstName: { isValid: true, msg: '' },
    lastName: { isValid: true, msg: '' },
    email: { isValid: true, msg: '' },
    password: { isValid: true, msg: '' },
    confirmPassword: { isValid: true, msg: '' },
  })

  useEffect(() => {
    let flag = true
    Object.entries(inputValidation).forEach((item) => {
      if (!item[1].isValid) {
        flag = false
      }
    })
    setFormValidation(flag)
  }, [inputValidation])

  const signupFormChangeHandler = (e) => {
    const { name, value } = e.target
    if (name === 'password') {
      setPasswordValidation(value)
    }
    const validateValue = checkInputs(name, value, passwordValidation)
    setInputValidation((prev) => ({ ...prev, [name]: { ...validateValue } }))
    setSignupForm({ ...signupForm, [name]: value })
  }

  const resetFormHandler = () => {
    setSignupForm(defaultSignupForm)
  }

  const signupFormSubmitHandler = async (e) => {
    e.preventDefault()
    signupUser(signupForm, navigate)
    setSignupForm(defaultSignupForm)
  }

  return (
    <main>
      <div className={`${style.auth_wrapper} w-full rounded-5`}>
        <form
          className={`${style.auth_body} d-flex flex-col`}
          onSubmit={(e) => signupFormSubmitHandler(e)}
        >
          <div className={style.auth_head}>Sign-Up</div>
          <div className={`${style.form_container} d-flex flex-col`}>
            <div
              className={`input-container ${
                signupForm.firstName &&
                (inputValidation.firstName.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='firstName' className='input-label'>
                First Name <span className='required-mark'>*</span>
              </label>
              <input
                type='text'
                name='firstName'
                id='firstName'
                value={signupForm.firstName}
                onChange={(e) => signupFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              {signupForm.firstName &&
                (inputValidation.firstName.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.firstName.msg}{' '}
                    {inputValidation.firstName.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.firstName.msg}{' '}
                    {inputValidation.firstName.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`input-container ${
                signupForm.lastName &&
                (inputValidation.lastName.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='lastName' className='input-label'>
                Last Name <span className='required-mark'>*</span>
              </label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                value={signupForm.lastName}
                onChange={(e) => signupFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              {signupForm.lastName &&
                (inputValidation.lastName.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.lastName.msg}{' '}
                    {inputValidation.lastName.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.lastName.msg}{' '}
                    {inputValidation.lastName.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`input-container ${
                signupForm.email &&
                (inputValidation.email.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='email' className='input-label'>
                Email Address <span className='required-mark'>*</span>
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={signupForm.email}
                onChange={(e) => signupFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              {signupForm.email &&
                (inputValidation.email.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.email.msg}{' '}
                    {inputValidation.email.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.email.msg}{' '}
                    {inputValidation.email.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`input-container ${
                signupForm.password &&
                (inputValidation.password.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='password' className='input-label'>
                Password <span className='required-mark'>*</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                value={signupForm.password}
                onChange={(e) => signupFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              <div onClick={() => setShowPassword(true)}>
                {showPassword ? (
                  <i
                    className={`fa-solid fa-eye-slash ${style.password_icon}`}
                  ></i>
                ) : (
                  <i className={`fa-solid fa-eye ${style.password_icon}`}></i>
                )}
              </div>
              {signupForm.password &&
                (inputValidation.password.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.password.msg}{' '}
                    {inputValidation.password.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.password.msg}{' '}
                    {inputValidation.password.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`input-container ${
                signupForm.confirmPassword &&
                (inputValidation.confirmPassword.isValid
                  ? 'input-success'
                  : 'input-error')
              }`}
            >
              <label htmlFor='confirmPassword' className='input-label'>
                Confirm Password <span className='required-mark'>*</span>
              </label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                id='confirmPassword'
                value={signupForm.confirmPassword}
                onChange={(e) => signupFormChangeHandler(e)}
                className={`${style.input_field} input-field`}
                required
              />
              <div onClick={() => setShowConfirmPassword(true)}>
                {showConfirmPassword ? (
                  <i
                    className={`fa-solid fa-eye-slash ${style.password_icon}`}
                  ></i>
                ) : (
                  <i className={`fa-solid fa-eye ${style.password_icon}`}></i>
                )}
              </div>
              {signupForm.confirmPassword &&
                (inputValidation.confirmPassword.isValid ? (
                  <span className='input-success-msg'>
                    {inputValidation.confirmPassword.msg}{' '}
                    {inputValidation.confirmPassword.msg && (
                      <i className='far fa-check-circle input-success-icon' />
                    )}
                  </span>
                ) : (
                  <span className='input-error-msg'>
                    {inputValidation.confirmPassword.msg}{' '}
                    {inputValidation.confirmPassword.msg && (
                      <i className='fa fa-solid fa-exclamation input-error-icon' />
                    )}
                  </span>
                ))}
            </div>
            <div
              className={`${style.auth_form_subsection} d-flex align-items-center justify-content-between`}
            >
              <div className='input-selector'>
                <input
                  type='checkbox'
                  name='agreeTerms'
                  id='agreeTerms'
                  className='input-selector-field'
                />
                <label htmlFor='agreeTerms' className='input-selector-label'>
                  I accept all Terms &amp; Conditions{' '}
                  <span className='required-mark'>*</span>
                </label>
              </div>
            </div>
            <button
              disabled={formValidation ? false : true}
              className={`btn btn-primary w-full ${
                formValidation ? '' : 'pointer-none'
              }`}
              type='submit'
            >
              Create New Account
            </button>
          </div>
        </form>
        <div className={`${style.auth_body} d-flex flex-col`}>
          <button
            disabled={formValidation ? false : true}
            className={`btn btn-default w-full ${style.mt2} ${
              formValidation ? '' : 'pointer-none'
            }`}
            type='submit'
            onClick={resetFormHandler}
          >
            Reset
          </button>
          <p className={style.auth_form_ask}>
            Already have an account?{' '}
            <Link to={'/login'} className={style.auth_form_ask_link}>
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
