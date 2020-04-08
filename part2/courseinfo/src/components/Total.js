import React from 'react'

const Total = ({parts}) => (
  <>
    <p>
      <h3>Number of exercises: {parts.reduce((a, b) => a + b.exercises, 0)}</h3>
    </p>
  </>
)

export default Total