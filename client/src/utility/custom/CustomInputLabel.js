import React, { Fragment } from "react";
import { Check, Droplet, Scissors, X } from "react-feather";

export const CustomInputLabel = () => (
    <Fragment>
        <span className='switch-icon-left'>
            <Check size={14} />
        </span>
        <span className='switch-icon-right'>
            <X size={14} />
        </span>
    </Fragment>
);
export const CustomInputLabelForSense = () => (
    <Fragment>
        <span className='switch-icon-left'>
            <Droplet size={14} />
        </span>
        <span className='switch-icon-right'>
            <Scissors size={14} />
        </span>
    </Fragment>
);
