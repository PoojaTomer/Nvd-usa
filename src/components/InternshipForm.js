import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

export default function InternshipForm(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [internshipForm,setInternshipForm] = useState({
        processing: false,
        fullName: "",
        fullNameError: "",
        email: "",
        emailError: "",
        mobile: "",
        mobileError: "",
        services: "-1",
        servicesError: "",
        message: "",
        messageError: "",
        resume: "",
        resumeError: ""
    });

    useEffect(() => {
       setInternshipForm({
            processing: false,
            fullName: "",
            fullNameError: "",
            email: "",
            emailError: "",
            mobile: "",
            mobileError: "",
            services: "-1",
            servicesError: "",
            message: "",
            messageError: "",
            resume: "",
            resumeError: ""
        });
    }, [props.isModalVisible]);

    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

       setInternshipForm({
            ...internshipForm,
            processing: true
        });

        let InternshipFormField = { ...internshipForm };

        if (InternshipFormField.fullName === "") {
            errorFound = true;
            InternshipFormField.fullNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(InternshipFormField.fullName)) {
            errorFound = true;
            InternshipFormField.fullNameError = "alphabatic only";
        } else {
            InternshipFormField.fullNameError = "";
        }
        if (InternshipFormField.email === "") {
            errorFound = true;
            InternshipFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(InternshipFormField.email)) {
            errorFound = true;
            InternshipFormField.emailError = "enter valid email";
        } else {
            InternshipFormField.emailError = "";
        }
        if (InternshipFormField.mobile === "") {
            errorFound = true;
            InternshipFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(InternshipFormField.mobile)) {
            errorFound = true;
            InternshipFormField.mobileError = "enter valid phone number";
        } else {
            InternshipFormField.mobileError = "";
        }
        if (InternshipFormField.services === "-1") {
            errorFound = true;
            InternshipFormField.servicesError = "this field is required";
        } else {
            InternshipFormField.servicesError = "";
        }

        if (InternshipFormField.message === "") {
            errorFound = true;
            InternshipFormField.messageError = "this field is required";
        } else {
            InternshipFormField.messageError = "";
        } 
         if (InternshipFormField.resume === "") {
            errorFound = true;
            InternshipFormField.resumeError = "this field is required";
        } else {
            InternshipFormField.resumeError = "";
        }

        if (errorFound) {
           setInternshipForm({
                ...InternshipFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", InternshipFormField.fullName);
            formData.append("email", InternshipFormField.email);
            formData.append("mobile", InternshipFormField.mobile);
            formData.append("apply_for", InternshipFormField.services);
            formData.append("message", InternshipFormField.message);
            formData.append("file", InternshipFormField.resume);
          
            axios({
                url: `https://phpstack-281388-2949987.cloudwaysapps.com/mails/internship.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log(response.data);
                if (response.data) {
                   setInternshipForm({
                        processing: false,
                        fullName: "",
                        fullNameError: "",
                        email: "",
                        emailError: "",
                        mobile: "",
                        mobileError: "",
                        services: "-1",
                        servicesError: "",
                        message: "",
                        messageError: "",
                        resume: "",
                        resumeError: ""
                    });
                    props.handleCancel();
                    navigate("/thank-you");
                 
                } else {
                    alert("error###",response.data.message);

                }
                // alert("success");
            }, error => {
                console.log("error", error);
                alert("error");
            });
        }
    }
    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    return (
        <Modal className="custom-pop1" open={props.isModalVisible} onOk={() => props.handleOk()} onCancel={() => props.handleCancel()} footer={null} closable={false}>
    <button type="button" className="close" onClick={() => props.handleOk()}>
         <span aria-hidden="true">&times;</span>
       </button>
       <div className="form-content">
           <h3>Apply For<span className="highlight"> Internship</span></h3>
           <form onSubmit={(e) => submitHandler(e)}>
                   <input type="hidden" className="form-control" name="enquery-form" id="enquery-form3" value="enquery-form" placeholder="Enquery Form" />
               <ul className="form-list">
                   <li>
                       <input type="text" name="name" className="form-control" placeholder="Full Name*"  value={internshipForm.fullName} onChange={e => setInternshipForm({
                            ...internshipForm,
                            fullName: e.target.value,
                            fullNameError: ""
                        })}
                            disabled={internshipForm.processing} />
                            <span className='error'>{internshipForm.fullNameError}</span>
                   </li>
                   <li>
                    <input type="email" name="email" className="form-control" placeholder="Email Address*"  value={internshipForm.email} onChange={e => setInternshipForm({
                            ...internshipForm,
                            email: e.target.value,
                            emailError: ""
                        })} disabled={internshipForm.processing} />
                            <span className='error'>{internshipForm.emailError}</span>
                    </li>
                   <li>
                       <input type="number" onKeyPress={preventMinus} name="phone" className="form-control" placeholder="Phone Number*" value={internshipForm.mobile} onChange={e => setInternshipForm({
                                ...internshipForm,
                                mobile: e.target.value.slice(0, 10),
                                mobileError: ""
                            })} disabled={internshipForm.processing} />
                                <span className='error'>{internshipForm.mobileError}</span>
                   </li>
                   <li>
                       <select name="services" className="form-control" value={internshipForm.services} onChange={e => setInternshipForm({
                            ...internshipForm,
                            services: e.target.value,
                            servicesError: ""
                        })} disabled={internshipForm.processing}>
                           <option value="">Apply job for*</option>
                           <option value="Social Media Excutive">Social Media Excutive</option>
                           <option value="PPC Excutive">PPC Excutive</option>
                           <option value="Content Writer">Content Writer</option>
                           <option value="Social Media Manager">Social Media Manager</option>
                           <option value="SEO Excutive">SEO Excutive</option>
                       </select>
                       <span className='error'>{internshipForm.servicesError}</span>
                   </li>
                  
                    <li className="cnr-full">
                        <input type="file" name="file" className="form-control" placeholder="resume*" onChange={e => 
                         { setInternshipForm({
                            ...internshipForm,
                            resume: e.target.files[0],
                            resumeError: ""
                        }) }} disabled={internshipForm.processing} />
                            <span className='error'>{internshipForm.resumeError}</span>
                    </li>
                   <li className="cnr-full">
                       <textarea className="form-control" name="message" placeholder="Message*" value={internshipForm.message} onChange={e => setInternshipForm({
                            ...internshipForm,
                            message: e.target.value,
                            messageError: ""
                        })}
                            disabled={internshipForm.processing}
                        ></textarea>
                            <span className='error'>{internshipForm.messageError}</span>
                   </li>
                   <li>
                    <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                        size="invisible"
                        />
                    </li>
                   <li className="cnr-full text-center mt-3">
                   <button className="btn-1">Submit</button>
                       {/* <input type="button" value="Submit" className="btn-1" id="your_submit2" /> */}
                   </li>
               </ul>
           </form>
       </div>
    </Modal>
    );
}
