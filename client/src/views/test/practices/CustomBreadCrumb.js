import React from 'react';
import '../practices/CustomBreadCrumb.css';

const CustomBreadCrumb = () => {
    return (
        <div>
            {/* <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"> */}

            <h1>Flat CSS3 breadcrumb</h1>

            <ul id="breadcrumb2">
                <li><a href="#"><span className="icon icon-home"> </span></a></li>
                <li><a href="#"><span className="icon icon-beaker"> </span> Projects</a></li>
                <li><a href="#"><span className="icon icon-double-angle-right"></span> Breadcrumb</a></li>
                <li><a href="#"><span className="icon icon-rocket"> </span> Getting started</a></li>
                <li><a href="#"><span className="icon icon-arrow-down"> </span> Download</a></li>
            </ul>

        </div>
    );
};

export default CustomBreadCrumb;
