const ProfessionalInfo = ({ formData,setFormData }) => {
    return (
        <div>
            <div className="form-inputs">
                <input type="text" placeholder="Enter the company you work in"
                    value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                <input type="text" placeholder="Enter your designation"
                    value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} />
            </div>
        </div>
    )
}

export default ProfessionalInfo;
