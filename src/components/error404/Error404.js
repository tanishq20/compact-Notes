import { Link } from 'react-router-dom'
import style from './Error.module.css'

export const Error404 = () => {
  return (
    <>
      <div className='d-flex align-items-center justify-contents-center flex-col'>
        <p className={style.error_num}>404</p>
        <h3 className={style.error_msg}>Oops! Page not found</h3>
        <h3 className={style.error_msg}>
          Head back to{' '}
          <Link to={'/'} className='global-redirect-btn'>
            Home
          </Link>{' '}
        </h3>
      </div>
    </>
  )
}
