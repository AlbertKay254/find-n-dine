import React from 'react'
import './filters.css'
import Filteritem from './filteritem/filteritem'

const Filters = ({filterList}) => {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter) => {
        return< Filteritem filter={filter} key={filter.id}/>
      })}
    </div>
  )
}

export default Filters
