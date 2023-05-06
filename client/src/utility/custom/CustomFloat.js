import '@custom-styles/merchandising/others/custom-float.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ChevronsDown, ChevronsUp } from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Button } from 'reactstrap';

const CustomFloat = ( { children, title } ) => {
    // ** State
    const [openCustomizer, setOpenCustomizer] = useState( false );
    // ** Toggles Open
    const handleToggle = e => {
        e.preventDefault();
        setOpenCustomizer( !openCustomizer );
    };


    return (
        <div
            className={classnames( 'custom-float', {
                open: openCustomizer
            } )}
        >
            {
                openCustomizer ? <Button.Ripple
                    className='custom-float-toggle d-flex align-items-center justify-content-center'
                    onClick={handleToggle}
                    color='primary'
                >
                    <span className='align-middle ml-25'>{title}</span>
                    <ChevronsDown className='align-middle ml-25' size={18} />
                </Button.Ripple> : <Button.Ripple
                    className='custom-float-toggle d-flex align-items-center justify-content-center rotateX'
                    onClick={handleToggle}
                    color='primary'>
                    <span className='align-middle ml-25'>{title}</span>
                    <ChevronsUp className='align-middle ml-25' size={18} />
                </Button.Ripple>
            }
            <PerfectScrollbar className='custom-float-content'>
                <div className=' m-2'>
                    {children}
                </div>

            </PerfectScrollbar>
        </div>
    );
};

export default CustomFloat;
// ** PropTypes
CustomFloat.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string
};