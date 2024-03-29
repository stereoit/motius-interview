import React, { PropTypes } from 'react'
import UsecaseCard from './UsecaseCard'

const UsecaseList = ({usecases, loading}) => {
  return (
    <div>
      <h1>Available usecases</h1>
      <div className="usecase-list">
      { loading ?
          <div className="loader">Loading....</div>
          :
          usecases.map( (usecase,idx) =>
            <UsecaseCard key={idx} usecase={usecase} />
          )
      }
      </div>
    </div>
  )
}

export default UsecaseList
