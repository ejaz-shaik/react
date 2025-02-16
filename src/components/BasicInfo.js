import React from 'react'

const BasicInfo = ({ formData, setFormData }) => {
  return (
    <div>
        <div className='form-inputs'>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder="Enter Full Name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <label htmlFor='name'>Email</label>
            <input type='email' placeholder="Enter email" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <label htmlFor='name'>Password</label>
            <input type='password' placeholder="Enter Password" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <label htmlFor='name'>Confirm Password</label>
            <input type='password' placeholder="Confirm Password" 
                value={formData.confirmPassword} 
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
        </div>
    </div>
  )
}

export default BasicInfo;
