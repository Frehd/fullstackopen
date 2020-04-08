import React from 'react'

const SearchBox = ({handleChange, content}) => (
  <>
    Search: <input value={content} onChange={handleChange} />
  </>
)

export default SearchBox