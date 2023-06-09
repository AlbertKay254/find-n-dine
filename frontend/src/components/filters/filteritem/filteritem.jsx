import React from 'react'
import './filteritem.css'

const filteritem = ({filter}) => {
  return (
    <div className='filter-item'>
      {filter.icon && filter.icon}
       <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default filteritem
