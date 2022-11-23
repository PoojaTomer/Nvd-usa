import React, {useState, useRef } from 'react';
import axios from 'axios';
import REGX from '../../../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

export default function SendAMessage(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [SendAMessageForm, setSendAMessageForm] = useState({
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

    const submitHandler = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        captchaRef.current.reset();
        let errorFound = false;

        setSendAMessageForm({
            ...SendAMessageForm,
            processing: true
        });

        let SendAMessageFormField = { ...SendAMessageForm };

        if (SendAMessageFormField.fullName === "") {
            errorFound = true;
            SendAMessageFormField.fullNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(SendAMessageFormField.fullName)) {
            errorFound = true;
            SendAMessageFormField.fullNameError = "alphabatic only";
        } else {
            SendAMessageFormField.fullNameError = "";
        }
        if (SendAMessageFormField.email === "") {
            errorFound = true;
            SendAMessageFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(SendAMessageFormField.email)) {
            errorFound = true;
            SendAMessageFormField.emailError = "enter valid email";
        } else {
            SendAMessageFormField.emailError = "";
        }
        if (SendAMessageFormField.mobile === "") {
            errorFound = true;
            SendAMessageFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(SendAMessageFormField.mobile)) {
            errorFound = true;
            SendAMessageFormField.mobileError = "enter valid phone number";
        } else {
            SendAMessageFormField.mobileError = "";
        }
        if (SendAMessageFormField.services === "-1") {
            errorFound = true;
            SendAMessageFormField.servicesError = "this field is required";
        } else {
            SendAMessageFormField.servicesError = "";
        }

        if (SendAMessageFormField.message === "") {
            errorFound = true;
            SendAMessageFormField.messageError = "this field is required";
        } else {
            SendAMessageFormField.messageError = "";
        }

        if (errorFound) {
            setSendAMessageForm({
                ...SendAMessageFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", SendAMessageFormField.fullName);
            formData.append("email", SendAMessageFormField.email);
            formData.append("mobile", SendAMessageFormField.mobile);
            formData.append("service", SendAMessageFormField.services);
            formData.append("message", SendAMessageFormField.message);

            axios({
                url: `http://site4clientdemo.com/nvd-usa/mails/contact.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setSendAMessageForm({
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
        <section className="contact-sec2">
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="con-form">
                        <div className="cen-h">
                        <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear">Send A <span className='highlight'>Message</span></h2>
                    </div>
                        <form onSubmit={(e) => submitHandler(e)}>
                        <ul className="form-list">
                            <li data-aos="zoom-in" data-aos-delay="100" data-aos-offset="0"> 
                                <input type="text" name="name" placeholder="Name" className="form-control" value={SendAMessageForm.fullName} onChange={e => setSendAMessageForm({
                                        ...SendAMessageForm,
                                        fullName: e.target.value,
                                        fullNameError: ""
                                    })} disabled={SendAMessageForm.processing} />
                                <span className='error'>{SendAMessageForm.fullNameError}</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="300" data-aos-offset="0">
                                <input type="email" name="name" placeholder="Email Id" className="form-control" value={SendAMessageForm.email} onChange={e => setSendAMessageForm({
                                        ...SendAMessageForm,
                                        email: e.target.value,
                                        emailError: ""
                                    })} disabled={SendAMessageForm.processing} />
                                <span className='error'>{SendAMessageForm.emailError}</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="500" data-aos-offset="0"> 
                                <input type="number" name="name" placeholder="Phone No." className="form-control" value={SendAMessageForm.mobile} onChange={e => setSendAMessageForm({
                                        ...SendAMessageForm,
                                        mobile: e.target.value,
                                        mobileError: ""
                                    })} disabled={SendAMessageForm.processing} />
                                <span className='error'>{SendAMessageForm.mobileError}</span>
                            </li>
                            <li data-aos="zoom-in" data-aos-delay="700" data-aos-offset="0">
                            <select className="form-control" value={SendAMessageForm.services} onChange={e => setSendAMessageForm({
                                        ...SendAMessageForm,
                                        services: e.target.value,
                                        servicesError: ""
                                    })} disabled={SendAMessageForm.processing}>
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
                                <span className='error'>{SendAMessageForm.servicesError}</span>
                            </li>
                            <li className="cnr-full" data-aos="zoom-in" data-aos-delay="900" data-aos-offset="0">
                                <textarea rows="4" placeholder="Message" name="message" className="form-control" value={SendAMessageForm.message} onChange={e => setSendAMessageForm({
                                        ...SendAMessageForm,
                                        message: e.target.value,
                                        messageError: ""
                                    })} disabled={SendAMessageForm.processing}
                                    >
                                </textarea>
                                <span className='error'>{SendAMessageForm.messageError}</span>
                            </li>
                            <li className="cnr-full">
                                <ReCAPTCHA ref={captchaRef} sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi" size="invisible" />
                            </li>
                            <li className="cnr-full" data-aos="zoom-in" data-aos-delay="1000" data-aos-offset="0"><center><button className="btn-1">Submit</button></center></li>
                        </ul>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    );
}
