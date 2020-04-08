import React from 'react'

const SearchBox = ({handleChange, content}) => (
  <>
    Find Countries: <input value={content} onChange={handleChange} />
  </>
)

export default SearchBox