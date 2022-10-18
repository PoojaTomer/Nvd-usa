import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb(props) {
    return (
        <section className="bread-c-sec" style={{backgroundImage: `url(${props.Image})`,}}>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bread-in">
                        <h1>{props.Title}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>|</li>
                            <li className="active"><a href="#">{props.Title}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
