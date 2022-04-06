import style from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className='d-flex flex-col justify-content-center align-items-center'>
      <div className={style.footer_head}>
        Made with ❤️ By{' '}
        <a href='#' target='_blank' className={style.footer_head_link}>
          Tanishq Kumar
        </a>{' '}
        | © 2022
      </div>
      <div
        className={`${style.social_buttons} d-flex align-items-center flex-wrap`}
      >
        <a
          href='https://github.com/tanishq20'
          target='_blank'
          className={`${style.social_icon} ${style.github_icon} d-flex justify-content-center align-items-center`}
        >
          <i className='fa fa-github' aria-hidden='true' />
        </a>
        <a
          href='https://www.linkedin.com/in/tanishq-kumar-b03a52194/'
          className={`${style.social_icon} ${style.linkedin_icon} d-flex justify-content-center align-items-center`}
          target='_blank'
        >
          <i className='fa fa-linkedin' aria-hidden='true' />
        </a>
        <a
          href='https://twitter.com/tanishqkumar_20'
          target='_blank'
          className={`${style.social_icon} ${style.twitter_icon} d-flex justify-content-center align-items-center`}
        >
          <i className='fa fa-twitter' aria-hidden='true' />
        </a>
      </div>
    </footer>
  )
}
