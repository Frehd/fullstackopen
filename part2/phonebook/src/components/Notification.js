import React from 'react'

const Notification = ({message, positive}) => {
  if (message === null | message === undefined | message === '') {
    return null
  }

  return (
    <div className={positive?'positive':'error'}>
      {message}
    </div>
  )
}
    
export default Notification