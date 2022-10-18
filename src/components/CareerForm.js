import React, { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

export default function CareerForm(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [careerForm, setCareerForm] = useState({
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
        experience: "",
        experienceError: "",
        relevantExperience: "",
        relevantExperienceError: "",
        currentPackage: "",
        currentPackageError: "",
        expactedPackage: "",
        expactedPackageError: "",
        noticePeriod: "",
        noticePeriodError: "",
        resume: "",
        resumeError: ""
    });

    useEffect(() => {
        setCareerForm({
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
            experience: "",
            experienceError: "",
            relevantExperience: "",
            relevantExperienceError: "",
            currentPackage: "",
            currentPackageError: "",
            expactedPackage: "",
            expactedPackageError: "",
            noticePeriod: "",
            noticePeriodError: "",
            resume: "",
            resumeError: ""
        });
    }, [props.isModalVisible]);

    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

        setCareerForm({
            ...careerForm,
            processing: true
        });

        let ResumeFormField = { ...careerForm };
        if (ResumeFormField.fullName === "") {
            errorFound = true;
            ResumeFormField.fullNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(ResumeFormField.fullName)) {
            errorFound = true;
            ResumeFormField.fullNameError = "alphabatic only";
        } else {
            ResumeFormField.fullNameError = "";
        }
        if (ResumeFormField.email === "") {
            errorFound = true;
            ResumeFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(ResumeFormField.email)) {
            errorFound = true;
            ResumeFormField.emailError = "enter valid email";
        } else {
            ResumeFormField.emailError = "";
        }
        if (ResumeFormField.mobile === "") {
            errorFound = true;
            ResumeFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(ResumeFormField.mobile)) {
            errorFound = true;
            ResumeFormField.mobileError = "enter valid phone number";
        } else {
            ResumeFormField.mobileError = "";
        }
        if (ResumeFormField.services === "-1") {
            errorFound = true;
            ResumeFormField.servicesError = "this field is required";
        } else {
            ResumeFormField.servicesError = "";
        }

        if (ResumeFormField.message === "") {
            errorFound = true;
            ResumeFormField.messageError = "this field is required";
        } else {
            ResumeFormField.messageError = "";
        }
        if (ResumeFormField.experience === "") {
            errorFound = true;
            ResumeFormField.experienceError = "this field is required";
        }else {
            ResumeFormField.experienceError = "";
        }
        if (ResumeFormField.relevantExperience === "") {
            errorFound = true;
            ResumeFormField.relevantExperienceError = "this field is required";
        }else {
            ResumeFormField.relevantExperienceError = "";
        }
        if (ResumeFormField.currentPackage === "") {
            errorFound = true;
            ResumeFormField.currentPackageError = "this field is required";
        }else {
            ResumeFormField.currentPackageError = "";
        }
        if (ResumeFormField.expactedPackage === "") {
            errorFound = true;
            ResumeFormField.expactedPackageError = "this field is required";
        } else {
            ResumeFormField.expactedPackageError = "";
        }

        if (ResumeFormField.noticePeriod === "") {
            errorFound = true;
            ResumeFormField.noticePeriodError = "this field is required";
        } else {
            ResumeFormField.noticePeriodError = "";
        }
        if (ResumeFormField.resume === "") {
            errorFound = true;
            ResumeFormField.resumeError = "this field is required";
        } else {
            ResumeFormField.resumeError = "";
        }

        if (errorFound) {
            setCareerForm({
                ...ResumeFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", ResumeFormField.fullName);
            formData.append("email", ResumeFormField.email);
            formData.append("mobile", ResumeFormField.mobile);
            formData.append("apply_for", ResumeFormField.services);
            formData.append("total_experience", ResumeFormField.experience);
            formData.append("relevant_experience", ResumeFormField.relevantExperience);
            formData.append("current_package", ResumeFormField.currentPackage);
            formData.append("expacted_package", ResumeFormField.expactedPackage);
            formData.append("notice_period", ResumeFormField.noticePeriod);
            formData.append("message", ResumeFormField.message);
            formData.append("file", ResumeFormField.resume);

            axios({
                url: `https://site4clientdemo.com/nvd-usa/mails/career.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data) {
                    setCareerForm({
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
                        experience: "",
                        experienceError: "",
                        relevantExperience: "",
                        relevantExperienceError: "",
                        currentPackage: "",
                        currentPackageError: "",
                        expactedPackage: "",
                        expactedPackageError: "",
                        noticePeriod: "",
                        noticePeriodError: "",
                        resume: "",
                        resumeError: ""
                    });
                    props.handleCancel();
                    navigate("/thank-you");
                } else {
                    alert(response.data.message);
                }
                // alert("success");
            }, error => {
                console.log("error", error);
                alert("error");
            });
        }
    }
    return (
        <Modal className="custom-pop1" open={props.isModalVisible} onCancel={() => props.handleCancel()} footer={null} closable={false}>
        <button type="button" className="close" onClick={() => props.handleOk()}>
             <span aria-hidden="true">&times;</span>
           </button>
           <div className="form-content">
               <h3>Boost Your<span className="text-orange"> Career With Us</span></h3>
               <form onSubmit={(e) => submitHandler(e)}>
                       <input type="hidden" className="form-control" name="enquery-form" id="enquery-form3" value="enquery-form" placeholder="Enquery Form" />
                   <ul className="form-list">
                       <li>
                           <input type="text" name="name" className="form-control" placeholder="Full Name*" value={careerForm.fullName} onChange={e => setCareerForm({
                            ...careerForm,
                            fullName: e.target.value,
                            fullNameError: ""
                        })}
                            disabled={careerForm.processing} />
                            <span className='error'>{careerForm.fullNameError}</span>
                       </li>
                       <li>
                        <input type="email" name="email" className="form-control" placeholder="Email Address*" value={careerForm.email} onChange={e => setCareerForm({
                            ...careerForm,
                            email: e.target.value,
                            emailError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.emailError}</span>
                        </li>
                       <li>
                           <input type="number" name="phone" className="form-control" placeholder="Phone Number*"  value={careerForm.mobile} onChange={e => setCareerForm({
                                ...careerForm,
                                mobile: e.target.value,
                                mobileError: ""
                            })} disabled={careerForm.processing} />
                                <span className='error'>{careerForm.mobileError}</span>
                       </li>
                       <li>
                           <select name="services" className="form-control" id="your_services2" value={careerForm.services} onChange={e => setCareerForm({
                            ...careerForm,
                            services: e.target.value,
                            servicesError: ""
                        })} disabled={careerForm.processing}>
                               <option value="">Apply job for</option>
                               <option value="Social Media Excutive">Social Media Excutive</option>
                               <option value="PPC Excutive">PPC Excutive</option>
                               <option value="Content Writer">Content Writer</option>
                               <option value="Social Media Manager">Social Media Manager</option>
                               <option value="SEO Excutive">SEO Excutive</option>
                           </select>
                           <span className='error'>{careerForm.servicesError}</span>
                       </li>
                       <li>
                        <input type="text" name="experience" className="form-control" placeholder="Total Experience*"  value={careerForm.experience} onChange={e => setCareerForm({
                            ...careerForm,
                            experience: e.target.value,
                            experienceError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.experienceError}</span>
                        </li>
                        <li>
                            <input type="text" name="relevantexperience" className="form-control" placeholder="Relevant Experience*" value={careerForm.relevantExperience} onChange={e => setCareerForm({
                            ...careerForm,
                            relevantExperience: e.target.value,
                            relevantExperienceError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.relevantExperienceError}</span>
                        </li>
                        <li>
                            <input type="text" name="currentpackage" className="form-control" placeholder="Current Package*" value={careerForm.currentPackage} onChange={e => setCareerForm({
                            ...careerForm,
                            currentPackage: e.target.value,
                            currentPackageError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.currentPackageError}</span>
                        </li>
                        <li>
                            <input type="text" name="expactedpackage" className="form-control" placeholder="Expacted Package*" value={careerForm.expactedPackage} onChange={e => setCareerForm({
                            ...careerForm,
                            expactedPackage: e.target.value,
                            expactedPackageError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.expactedPackageError}</span>
                        </li>
                        <li>
                            <input type="text" name="noticeperiod" className="form-control" placeholder="Notice Period*" value={careerForm.noticePeriod} onChange={e => setCareerForm({
                            ...careerForm,
                            noticePeriod: e.target.value,
                            noticePeriodError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.noticePeriodError}</span>
                        </li>
                        <li>
                            <input type="file" name="file" className="form-control" placeholder="resume*" onChange={e => setCareerForm({
                            ...careerForm,
                            resume: e.target.files[0],
                            resumeError: ""
                        })} disabled={careerForm.processing} />
                            <span className='error'>{careerForm.resumeError}</span>
                        </li>
                       <li className="cnr-full">
                           <textarea className="form-control" name="message" placeholder="Message" value={careerForm.message} onChange={e => setCareerForm({
                            ...careerForm,
                            message: e.target.value,
                            messageError: ""
                        })}
                            disabled={careerForm.processing}
                        ></textarea>
                            <span className='error'>{careerForm.messageError}</span>
                       </li>
                       <li>
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                            size="invisible"
                            />
              </li>
                       <li className="cnr-full text-center mt-3">
                           <input type="submit" value="Submit" className="btn-1" id="your_submit2" />
                       </li>
                   </ul>
               </form>
           </div>
    </Modal>
    );
}
