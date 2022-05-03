import style from './Search.module.css'

export const Search = () => {
  return (
    <div className={`${style.header_src} d-flex`}>
      <input
        type='text'
        name='search'
        placeholder='Search'
        className={style.header_src_input}
      />
      <button
        type='submit'
        className={`${style.header_src_btn} d-flex justify-content-center align-items-center`}
      >
        <i className='fa fa-search' />
      </button>
    </div>
  )
}
