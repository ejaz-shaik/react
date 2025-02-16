import React from 'react'

const Summary = ({ formData }) => {
  return (
    <div>
      <h2>Please review befor submitting</h2>
      <div>
        <h3>Basic Info</h3>
        <p><strong>Name: </strong>{formData.name}</p>
        <p><strong>Email: </strong>{formData.email}</p>

        <h3>Professional Info</h3>
        <p><strong>Company: </strong>{formData.company}</p>
        <p><strong>Designation: </strong>{formData.designation}</p>

        <h3>Other Info</h3>
        <p><strong>Hometown: </strong>{formData.hometown}</p>
        <p><strong>Dream: </strong>{formData.dream}</p>
      </div>
    </div>
  )
};

export default Summary
