import React, {useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import REGX from '../constants/Regx';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import GetAQuoteButton from './GetAQuoteButton';

export default function ReadyToGet(props) {
    const navigate = useNavigate();
    const captchaRef = useRef(null)
    const [discoveryCallForm, setDiscoveryCallForm] = useState({
        processing: false,
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
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

        setDiscoveryCallForm({
            ...discoveryCallForm,
            processing: true
        });

        let DiscoveryCallFormField = { ...discoveryCallForm };

        if (DiscoveryCallFormField.firstName === "") {
            errorFound = true;
            DiscoveryCallFormField.firstNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(DiscoveryCallFormField.firstName)) {
            errorFound = true;
            DiscoveryCallFormField.firstNameError = "alphabatic only";
        } else {
            DiscoveryCallFormField.firstNameError = "";
        }
        if (DiscoveryCallFormField.lastName === "") {
            errorFound = true;
            DiscoveryCallFormField.lastNameError = "this field is required";
        } else if (!REGX.FULLNAME.test(DiscoveryCallFormField.lastName)) {
            errorFound = true;
            DiscoveryCallFormField.lastNameError = "alphabatic only";
        } else {
            DiscoveryCallFormField.lastNameError = "";
        }
        if (DiscoveryCallFormField.email === "") {
            errorFound = true;
            DiscoveryCallFormField.emailError = "this field is required";
        } else if (!REGX.EMAIL.test(DiscoveryCallFormField.email)) {
            errorFound = true;
            DiscoveryCallFormField.emailError = "enter valid email";
        } else {
            DiscoveryCallFormField.emailError = "";
        }
        if (DiscoveryCallFormField.mobile === "") {
            errorFound = true;
            DiscoveryCallFormField.mobileError = "this field is required";
        } else if (!REGX.MOBILE_NUMBER.test(DiscoveryCallFormField.mobile)) {
            errorFound = true;
            DiscoveryCallFormField.mobileError = "enter valid phone number";
        } else {
            DiscoveryCallFormField.mobileError = "";
        }
        if (DiscoveryCallFormField.services === "-1") {
            errorFound = true;
            DiscoveryCallFormField.servicesError = "this field is required";
        } else {
            DiscoveryCallFormField.servicesError = "";
        }

        if (DiscoveryCallFormField.message === "") {
            errorFound = true;
            DiscoveryCallFormField.messageError = "this field is required";
        } else {
            DiscoveryCallFormField.messageError = "";
        }

        if (errorFound) {
            setDiscoveryCallForm({
                ...DiscoveryCallFormField,
                processing: false
            });

        } else {
            let formData = new FormData();
            formData.append("fullName", DiscoveryCallFormField.firstName  +" "+ DiscoveryCallFormField.lastName);
            formData.append("email", DiscoveryCallFormField.email);
            formData.append("mobile", DiscoveryCallFormField.mobile);
            formData.append("service", DiscoveryCallFormField.services);
            formData.append("message", DiscoveryCallFormField.message);
            axios({
                url: `https://phpstack-281388-2949987.cloudwaysapps.com/mails/discovery_call.php`,
                method: "post",
                responseType: 'json',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if (response.data.status === "success") {
                    setDiscoveryCallForm({
                        processing: false,
                        firstName: "",
                        firstNameError: "",
                        lastName: "",
                        lastNameError: "",
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
        const preventMinus = (e) => {
            if (e.code === 'Minus') {
                e.preventDefault();
            }
        };
    return (
        <>
        {
            props.form === false ?
            <section className="form-cta">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                            <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">{props.Title}</h4>
                            <p data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">{props.Description}</p>
                            <GetAQuoteButton Title="Get In Touch" btn="btn-1" />
                            {/* <Link className="btn-3" to="/contact">Get In Touch</Link> */}
                        <a data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" href="tel:+1 (407) 204-0600" className="btn-2 ml-2"><FontAwesomeIcon icon={faPhone} /> +1 (407) 204-0600</a>
                        </div>
                </div>
            </div>
        </section>:
        // <div className='bg-wrap'>
        <section className="inner-service-sec5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    {/* <div className="cta-box"> */}
                        <h4 data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">{props.Title}</h4>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">{props.Description}</p>
                        {/* <Link className="btn-3" to="/contact">Get In Touch</Link> */}
                        <a href="tel:+1 (407) 204-0600" className="btn-2 ml-2" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0"><FontAwesomeIcon icon={faPhone} /> +1 (407) 204-0600</a>
                        {/* </div> */}
                </div>
                <div className="col-md-6">
                    <div className="h-sec8-form">
                        <div className="h-form-in">
                            <h3>Let's Get <strong>On A Discovery Call</strong></h3>
                            <form onSubmit={(e) => submitHandler(e)}>
                            <ul className="form-list">
                                <li data-aos="fade-up" data-aos-delay="100" data-aos-offset="0">
                                    <input type="text" className="form-control" placeholder="First Name*" value={discoveryCallForm.firstName} onChange={e => setDiscoveryCallForm({
                                            ...discoveryCallForm,
                                            firstName: e.target.value,
                                            firstNameError: ""
                                        })} disabled={discoveryCallForm.processing} />
                                     <span className='error'>{discoveryCallForm.firstNameError}</span>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
                                    <input type="text" className="form-control" placeholder="Last Name*" value={discoveryCallForm.lastName} onChange={e => setDiscoveryCallForm({
                                                ...discoveryCallForm,
                                                lastName: e.target.value,
                                                lastNameError: ""
                                            })}  disabled={discoveryCallForm.processing} />
                                    <span className='error'>{discoveryCallForm.lastNameError}</span>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
                                    <input type="email" className="form-control" placeholder="Email*" value={discoveryCallForm.email} onChange={e => setDiscoveryCallForm({
                                                ...discoveryCallForm,
                                                email: e.target.value,
                                                emailError: ""
                                            })} disabled={discoveryCallForm.processing} />
                                    <span className='error'>{discoveryCallForm.emailError}</span>
                               </li>
                                <li data-aos="fade-up" data-aos-delay="400" data-aos-offset="0"> 
                                    <input type="number" onKeyPress={preventMinus} className="form-control" placeholder="Phone*" value={discoveryCallForm.mobile} onChange={e => setDiscoveryCallForm({
                                            ...discoveryCallForm,
                                            mobile: e.target.value.slice(0, 10),
                                            mobileError: ""
                                        })} disabled={discoveryCallForm.processing} />
                                    <span className='error'>{discoveryCallForm.mobileError}</span>
                                </li>
                                <li className="cnr-full" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
                                    <select className="form-control" placeholder="Select Services*" value={discoveryCallForm.services} onChange={e => setDiscoveryCallForm({
                                                ...discoveryCallForm,
                                                services: e.target.value,
                                                servicesError: ""
                                            })} disabled={discoveryCallForm.processing}>
                                            <option value="-1" selected="">Select Services*</option>
                                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                                            <option value="Social Media Optimization">Social Media Optimization</option>
                                            <option value="Online Reputation Marketing">Online Reputation Marketing</option>
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
                                    </select>
                                    <span className='error'>{discoveryCallForm.servicesError}</span>
                                </li>
                                 <li className="cnr-full" data-aos="fade-up" data-aos-delay="600" data-aos-offset="0">
                                    <textarea placeholder="Message*" className="form-control" rows="4" value={discoveryCallForm.message} onChange={e => setDiscoveryCallForm({
                                            ...discoveryCallForm,
                                            message: e.target.value,
                                            messageError: ""
                                        })}
                                            disabled={discoveryCallForm.processing}
                                        >
                                    </textarea>
                                    <span className='error'>{discoveryCallForm.messageError}</span>
                                </li>
                                <li className="cnr-full"> 
                                    <ReCAPTCHA ref={captchaRef} sitekey="6Ldy6IEhAAAAAOnXdArKtwygfu6f3doYCblZQYHi"
                                        size="invisible" />
                                </li>
                            <li className="cnr-full" data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
                                <button className="btn-1">Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    // </div>
}
    </>
    );
}
