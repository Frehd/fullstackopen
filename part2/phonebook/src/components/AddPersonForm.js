import React from 'react'

const AddPersonForm = ({handleChange, content, handleSubmit}) => (
  <>
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={content.name} onChange={handleChange("Name")} />
        <br/>
        Number: <input value={content.number} onChange={handleChange("Number")} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>
)
  
export default AddPersonForm