import React from 'react'

const SectionHeader = ({title, description}) => {
  return (
    <div className='section-header'>
          <span className='text-primary'>Practice Advice</span>
          <h2>{title}</h2>
          <p>{ description}</p>
    </div>
  )
}

export default SectionHeader
