const FormInput = ({label, type, name, value, onChange, setFormData}) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} value={value} onChange={onChange} setFormData={setFormData} />
        </div>
    )
};

export default FormInput;
