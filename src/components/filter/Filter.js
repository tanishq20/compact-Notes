import { useFilter } from '../../context/filter/filterProvider'
import style from './Filter.module.css'

export const Filter = () => {
  const { filterState, filterDispatch } = useFilter()
  const { label, priority, sortByDate } = filterState

  return (
    <div className={`${style.filter_wrapper} d-flex flex-col`}>
      <div
        className={`${style.filter_showcase} w-full justify-content-center align-items-center flex-wrap`}
      >
        <div
          className={`${style.filter_heading} d-flex justify-content-between`}
        >
          <p className={style.filter_heading_left}>Filters</p>
          <button
            className={style.filter_heading_right}
            onClick={() => filterDispatch({ type: 'RESET_ALL' })}
          >
            Clear All
          </button>
        </div>
        <div className={style.products_section_change} />
        <div className={`${style.filter_content} overflow-y-auto`}>
          <div className='notes-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Labels</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_rating} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='label'
                    id='home-label'
                    value='home'
                    checked={label === 'home'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_LABEL',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label htmlFor='home-label' className='input-selector-label'>
                    Home
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='label'
                    id='work-label'
                    value='work'
                    checked={label === 'work'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_LABEL',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label htmlFor='work-label' className='input-selector-label'>
                    Work
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='notes-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Priorities</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_availability} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='priority'
                    id='low-priority'
                    value='low'
                    checked={priority === 'low'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_PRIORITY',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor='low-priority'
                    className='input-selector-label'
                  >
                    Low
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='priority'
                    id='medium-priority'
                    value='medium'
                    checked={priority === 'medium'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_PRIORITY',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor='medium-priority'
                    className='input-selector-label'
                  >
                    Medium
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='priority'
                    id='high-priority'
                    value='high'
                    checked={priority === 'high'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_PRIORITY',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor='high-priority'
                    className='input-selector-label'
                  >
                    High
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='notes-section-change' />
          <div className={style.filter_subcontent}>
            <div className={style.filter_subcontent_heading}>Sort By Date</div>
            <div className={style.filter_subcontent_body}>
              <div className={`${style.filter_sorting} d-flex flex-col`}>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sort-date'
                    id='newest-first'
                    value='newest'
                    checked={sortByDate === 'newest'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_SORT_BY_DATE',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor='newest-first'
                    className='input-selector-label'
                  >
                    Newest First
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sort-date'
                    id='oldest-first'
                    value='oldest'
                    checked={sortByDate === 'oldest'}
                    className='input-selector-field'
                    onChange={(e) =>
                      filterDispatch({
                        type: 'SET_SORT_BY_DATE',
                        payload: e.target.value,
                      })
                    }
                  />
                  <label
                    htmlFor='oldest-first'
                    className='input-selector-label'
                  >
                    Oldest First
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
