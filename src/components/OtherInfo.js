const OtherInfo = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="form-inputs">
                <input type="text" placeholder="Enter your hometown"
                    value={formData.hometown} onChange={(e) => setFormData({...formData, hometown: e.target.value})} />
                <input type="text" placeholder="Enter your dream"
                    value={formData.dream} onChange={(e) => setFormData({...formData, dream: e.target.value})} />
            </div>
        </div>
    )
}

export default OtherInfo;
