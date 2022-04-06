import { Link } from 'react-router-dom'
import { useAuth } from '../../context'
import { Toast } from '../../components'
import style from './Header.module.css'

export const Header = () => {
  const { authState, authDispatch } = useAuth()
  const { userLogin } = authState

  const logoutClickHandler = () => {
    localStorage.removeItem('encodedToken')
    localStorage.removeItem('firstName')
    authDispatch({ type: 'GET_LOGOUT_SUCCESS' })
    Toast('Logout Successfull', 'success')
  }

  return (
    <header
      className={`header-container ${style.header_container} justify-content-between`}
    >
      <div className={`header-brand ${style.header_brand}`}>
        <img
          src='https://ik.imagekit.io/tanishq20/assets/logo/logo_9hi_XlJ7k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645964002032'
          alt='logo'
        />
        <Link to={'/'} className={`header-logo ${style.header_logo}`}>
          Compact Notes
        </Link>
      </div>

      <nav className={`header-nav ${style.header_nav}`}>
        <ul className={`header-list ${style.header_list}`}>
          {userLogin ? (
            <div
              className={`header-item ${style.header_item} d-flex flex-col align-items-center justify-content-center`}
            >
              <button className='btn btn-primary' onClick={logoutClickHandler}>
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={'/login'}
              className={`header-item ${style.header_item} d-flex flex-col align-items-center justify-content-center`}
            >
              <button className='btn btn-primary'>Login</button>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  )
}
