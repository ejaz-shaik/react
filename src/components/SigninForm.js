import { useEffect, useState } from "react";
import BasicInfo from "./BasicInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import OtherInfo from "./OtherInfo";
import Summary from "./Summary";
import { useNavigate } from "react-router";

const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    designation: "",
    hometown: "",
    dream: ""
};

const useFormStorage = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : initialFormData;
    })

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return { formData, setFormData };
};    

const SigninForm = () => {
    const [page, setPage] = useState(0);
    const [showSuccess, setShowSuccess] = useState(false);
    const { formData, setFormData } = useFormStorage();
    const navigate = useNavigate();
    const PageTitles = ["Basic Info", "Professional Info", "Other Info", "Summary"];

    

    
    const displayPage = () => {
        if(page === 0) {
            return <BasicInfo formData={formData} setFormData={setFormData} />
        } else if(page === 1) {
            return <ProfessionalInfo formData={formData} setFormData={setFormData} />
        }else if(page === 2) {
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }else {
            return <Summary formData={formData} />
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted..", formData);
        setShowSuccess(true);

        setTimeout(() => {
            navigate('/');
        }, 5000);
    }

    return (
        <div className="signin-form">
            {showSuccess && (
                alert("Form submitted successfully! Redirecting to home page...")
            )}
            <div className="progress-bar"></div>
            <div className="form-container">
                <h3>{PageTitles[page]}</h3>
                <div>{displayPage()}</div>
                <div className='buttons'>
                    <button disabled={page === 0} className='btn-prev' 
                    onClick={() => {setPage((currPage) => currPage - 1)}}>
                        Prev
                    </button>
                    {page === PageTitles.length-1 ? (
                        <button className="btn-next" onClick={handleSubmit}>Confirm</button>
                    ) : (
                        <button className='btn-next' 
                            onClick={() => setPage(prev => prev + 1)}
                        >Next</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SigninForm;
