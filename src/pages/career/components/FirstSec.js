import React from 'react';
import ApplyForCareerButton from '../../../components/ApplyForCareerButton';

export default function FirstSec(props) {
    return (
        <>
        <section className="career-sec2">
            <div className="container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
                <div className="col-md-10 offset-md-1">
                    <h2>If you have a zing for the Digital world, <span className='highlight'>We have a job</span> for you!</h2>
                    <p>At New Vision Digital, you're more than simply another cog in the wheel; you're part of a family that cherishes your unique perspective and contributions to the organisation. Amazing individuals are needed to join our high-performing team. We are looking for self-motivated professionals who are team-oriented and appreciate a healthy work-life balance.</p>
                    <center><ApplyForCareerButton Title="Apply Here" /></center>
                </div>
                
            </div>
        </section>
        </>
    );
}
