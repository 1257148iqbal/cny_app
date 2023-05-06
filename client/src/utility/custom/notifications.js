import Avatar from '@components/avatar';
import { Fragment } from 'react';
import { AlertTriangle, Bell, Check, Info, X } from 'react-feather';
import { toast } from 'react-toastify';

export const notify = ( action, message, position ) => {
    if ( action === 'success' ) {
        toast.success( <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='success' icon={<Check size={12} />} />
                    <h6 className='toast-title'>Success!</h6>
                </div>
                <small className='text-muted'>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className='toastify-body font-weight-bold'>
                <span role='img' aria-label='toast-text'>
                    {message}
                </span>
            </div>
        </Fragment>, { position, hideProgressBar: false } );
    } else if ( action === 'error' ) {
        toast.error( <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='danger' icon={<X size={12} />} />
                    <h6 className='toast-title'>Error!</h6>
                </div>
                <small className='text-muted'>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className='toastify-body font-weight-bold'>
                <span role='img' aria-label='toast-text' >
                    {message}
                </span>
            </div>
        </Fragment>, { position, hideProgressBar: false } );
    } else if ( action === 'errors' ) {
        toast.error( <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='danger' icon={<X size={12} />} />
                    <h6 className='toast-title'>Error!</h6>
                </div>
                <small className='text-muted'>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className='toastify-body'>
                <ol className='p-0' >
                    {message.map( ( m, index ) => (
                        <li key={index + 1} className="font-weight-bold">
                            {m}
                        </li>
                    ) )}
                </ol>


            </div>
        </Fragment>, { position, hideProgressBar: false } );
    } else if ( action === 'warning' ) {
        toast.warning( <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='warning' icon={<AlertTriangle size={12} />} />
                    <h6 className='toast-title'>Warning!</h6>
                </div>
                <small className='text-muted'>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className='toastify-body font-weight-bold'>
                <span role='img' aria-label='toast-text'>
                    {message}
                </span>
            </div>
        </Fragment>, { position, hideProgressBar: false } );
    } else if ( action === 'info' ) {
        toast.info( <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='info' icon={<Info size={12} />} />
                    <h6 className='toast-title'>Info!</h6>
                </div>
                <small className='text-muted'>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className='toastify-body font-weight-bold'>
                <span role='img' aria-label='toast-text'>
                    {message}
                </span>
            </div>
        </Fragment>, { position, hideProgressBar: false } );
    } else {
        toast( <Fragment>
            <div className='toastify-header'>
                <div className='title-wrapper'>
                    <Avatar size='sm' color='primary' icon={<Bell size={12} />} />
                    <h6 className='toast-title'>Default!</h6>
                </div>
                <small className='text-muted'>{new Date().toLocaleTimeString()}</small>
            </div>
            <div className='toastify-body font-weight-bold'>
                <span role='img' aria-label='toast-text'>
                    {message}
                </span>
            </div>
        </Fragment>, { position, hideProgressBar: false } );
    }
};
