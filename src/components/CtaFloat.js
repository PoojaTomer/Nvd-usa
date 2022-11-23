import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

export default function CtaFloatForm(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [GetAQuoteForm, setGetAQuoteForm] = useState({
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
        messageError: ""
    });

    useEffect(() => {
        setGetAQuoteForm({
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
            messageError: ""
        });
    }, [props.isModalVisible]);

    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

        setGetAQuoteForm({
            ...GetAQuoteForm,
            processing: true
        });

        let GetAQuoteFormField = { ...GetAQuoteForm };

        if (GetAQuoteFormField.fullName === "") {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(GetAQuoteFormField.fullName)) {
            errorFound = true;
            GetAQuoteFormField.fullNameError = "alphabatic only";
        } else {
            GetAQuoteFormField.fullNameError = "";
        }
        if (GetAQuoteFormField.email === "") {
            errorFound = true;
            GetAQuoteFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(GetAQuoteFormField.email)) {
            errorFound = true;
            GetAQuoteFormField.emailError = "enter valid email";
        } else {
            GetAQuoteFormField.emailError = "";
        }
        if (GetAQuoteFormField.mobile === "") {
            errorFound = true;
            GetAQuoteFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(GetAQuoteFormField.mobile)) {
            errorFound = true;
            GetAQuoteFormField.mobileError = "enter valid phone number";
        } else {
            GetAQuoteFormField.mobileError = "";
        }
        if (GetAQuoteFormField.services === "-1") {
            errorFound = true;
            GetAQuoteFormField.servicesError = "this field is required";
        } else {
            GetAQuoteFormField.servicesError = "";
        }

        // if (GetAQuoteFormField.message === "") {
        //     errorFound = true;
        //     GetAQuoteFormField.messageError = "this field is required";
        // } else {
        //     GetAQuoteFormField.messageError = "";
        // }

        if (errorFound) {
            setGetAQuoteForm({
                ...GetAQuoteFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", GetAQuoteFormField.fullName);
            formData.append("email", GetAQuoteFormField.email);
            formData.append("mobile", GetAQuoteFormField.mobile);
            formData.append("service", GetAQuoteFormField.services);
            formData.append("message", GetAQuoteFormField.message);

            axios({
                url: `http://site4clientdemo.com/nvd-usa/mails/get_quote.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setGetAQuoteForm({
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
                        messageError: ""
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
      <>
     <div className="cta-float" open={props.isCtaVisible} onOk={() => props.handleOk()} onCancel={() => props.handleCancel()} footer={null} closable={false}  data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
        <button type="button" className="close" onClick={() => props.handleOk()}>
             <span aria-hidden="true">&times;</span>
           </button>
        <h4>Get a Free <span className="highlight">Consultation</span></h4>
        <form onSubmit={(e) => submitHandler(e)}>
                       <input type="hidden" className="form-control" name="enquery-form" id="enquery-form3" value="enquery-form" placeholder="Enquery Form" />
                   <ul className="form-list">
                   <li className="cnr-full">
                           <input type="text" name="name" className="form-control" placeholder="Full Name*" value={GetAQuoteForm.fullName} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            fullName: e.target.value,
                            fullNameError: ""
                        })}
                            disabled={GetAQuoteForm.processing} />
                            <span className='error'>{GetAQuoteForm.fullNameError}</span>
                       </li>
                       <li className="cnr-full">
                           <input type="number" name="phone" className="form-control" placeholder="Phone Number*" value={GetAQuoteForm.mobile} onChange={e => setGetAQuoteForm({
                                ...GetAQuoteForm,
                                mobile: e.target.value,
                                mobileError: ""
                            })} disabled={GetAQuoteForm.processing} />
                                <span className='error'>{GetAQuoteForm.mobileError}</span>
                       </li>
                       <li className="cnr-full">
                       <input type="email" name="email" className="form-control" placeholder="Email Address*" value={GetAQuoteForm.email} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            email: e.target.value,
                            emailError: ""
                        })} disabled={GetAQuoteForm.processing} />
                            <span className='error'>{GetAQuoteForm.emailError}</span>
                       </li>
                       <li className="cnr-full">
                        <select name="services" className="form-control" value={GetAQuoteForm.services} onChange={e => setGetAQuoteForm({
                            ...GetAQuoteForm,
                            services: e.target.value,
                            servicesError: ""
                        })} disabled={GetAQuoteForm.processing}>
                            <option value="-1" selected="">Select Services</option>
                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                            <option value="Social Media Optimization">Social Media Optimization</option>
                            <option value="Influencer Marketing">Influencer Marketing</option>
                            <option value="Online Reputation Marketing">Online Reputation Marketing</option>
                            <option value="Wordpress Development">Email Marketing</option>
                            <option value="Social Media Marketing">Ecommerce Marketplace Management</option>
                            <option value="PPC">PPC</option>
                            <option value="Social Media Ads">Social Media Ads</option>
                            <option value="Wordpress Development">Wordpress Development</option>
                            <option value="Magento Development">Magento Development</option>
                            <option value="Shopify Development">Shopify Development</option>
                            <option value="React Development">React Development</option>
                            <option value="PHP Development">PHP Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Business Setup">Business Setup</option>
                            <option value="Accounting &amp; Auditing">Accounting &amp; Auditing</option>
                            <option value="CFO Service">CFO Service</option>
                            <option value="Zoho Consulting">Zoho Consulting</option>
                            <option value="Cloud Services">Cloud Services</option>
                           </select>
                           <span className='error'>{GetAQuoteForm.servicesError}</span>
                       </li>
                     
                       <li>
                    <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                        size="invisible"
                        />
                    </li>
                       <li className="cnr-full text-center">
                           <button type="submit" value="" className="btn-1" id="your_submit2">Submit</button>
                       </li>
                   </ul>
               </form>
    </div>
      </>
    );
}