import { Link } from 'react-router-dom'
import style from './Home.module.css'

export const Home = () => {
  return (
    <main>
      <div className={`${style.landing_section} d-flex align-items-center`}>
        <div className={`${style.hero_content} d-flex flex-col`}>
          <h1 className={style.hero_head}>All In One Compact Notes</h1>
          <p className={style.hero_desc}>
            Remember everything and tackle any project with your notes, tasks,
            and schedule all in one place.
          </p>
          <Link to={'/signup'} className={style.hero_btns}>
            <button className='btn btn-primary'>Signup</button>
          </Link>
        </div>
        <div className='hero-banner'>
          <img
            src='https://ik.imagekit.io/tanishq20/Compact_Notes/Hero/notes_hero_Vtm7af2V1.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649237420472'
            alt='landing-hero'
            className='img-responsive'
          />
        </div>
      </div>
    </main>
  )
}
