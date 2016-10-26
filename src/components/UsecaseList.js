import React, { PropTypes } from 'react'
import UsecaseCard from './UsecaseCard'

const UsecaseList = ({usecases, loading}) => {
  return (
    <div>
      <h1>Available usecases</h1>
      { loading ?
          <div className="loader">Loading....</div>
          :
          usecases.map( usecase =>
            <UsecaseCard usecase={usecase} />
          )
      }
    </div>
  )
}

export default UsecaseList
