import { Link } from 'react-router-dom'
import style from './Sidebar.module.css'

export const Sidebar = () => {
  return (
    <aside className={style.sidebar_wrapper}>
      <div className={style.sidebar_showcase}>
        <div className={`${style.sidebar_content} overflow-y-auto`}>
          <div className={style.sidebar_subcontent}>
            <Link
              to={'/'}
              className={`${style.sidebar_subcontent_heading} d-flex align-items-center`}
            >
              <i className='fas fa-regular fa-house md-icon' />
              Home
            </Link>
          </div>
          <div className={style.sidebar_subcontent}>
            <a
              className={`${style.sidebar_subcontent_heading} d-flex align-items-center`}
            >
              <i className='fas fa-regular fa-tag md-icon' />
              Labels
            </a>
          </div>
          <div className={style.sidebar_subcontent}>
            <Link
              to={'/archive'}
              className={`${style.sidebar_subcontent_heading} d-flex align-items-center`}
            >
              <i className='fas fa-regular fa-box-archive md-icon' />
              Archive
            </Link>
          </div>
          <div className={style.sidebar_subcontent}>
            <Link
              to={'/trash'}
              className={`${style.sidebar_subcontent_heading} d-flex align-items-center`}
            >
              <i className='fas fa-trash-can md-icon' />
              Trash
            </Link>
          </div>
          <div className={style.sidebar_subcontent}>
            <a
              className={`${style.sidebar_subcontent_heading} d-flex align-items-center`}
            >
              <i className='fas fa-circle-user md-icon' />
              Profile
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}
