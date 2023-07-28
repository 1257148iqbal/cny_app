import Avatar from '@components/avatar';
import { Fragment } from 'react';
import { AlertTriangle, Bell, Check, Info, X } from 'react-feather';
import { toast } from 'react-toastify';

export const notify = (action, message, duration) => {
  if (action === 'success') {
    toast.success(
      <Fragment>
        <div className="toastify-header">
          <div className="title-wrapper">
            <Avatar size="sm" color="success" icon={<Check size={12} />} />
            <h6 className="toast-title">Success!</h6>
          </div>
          <small className="text-muted">{new Date().toLocaleTimeString()}</small>
        </div>
        <div className="toastify-body">
          <span role="img" aria-label="toast-text">
            {message}
          </span>
        </div>
      </Fragment>,
      { hideProgressBar: false, ...(duration && { autoClose: duration }) }
    );
  } else if (action === 'error') {
    toast.error(
      <Fragment>
        <div className="toastify-header">
          <div className="title-wrapper">
            <Avatar size="sm" color="danger" icon={<X size={12} />} />
            <h6 className="toast-title">Error!</h6>
          </div>
          <small className="text-muted">{new Date().toLocaleTimeString()}</small>
        </div>
        <div className="toastify-body">
          <span role="img" aria-label="toast-text">
            {message}
          </span>
        </div>
      </Fragment>,
      { hideProgressBar: false, ...(duration && { autoClose: duration }) }
    );
  } else if (action === 'warning') {
    toast.warning(
      <Fragment>
        <div className="toastify-header">
          <div className="title-wrapper">
            <Avatar size="sm" color="warning" icon={<AlertTriangle size={12} />} />
            <h6 className="toast-title">Warning!</h6>
          </div>
          <small className="text-muted">{new Date().toLocaleTimeString()}</small>
        </div>
        <div className="toastify-body">
          <span role="img" aria-label="toast-text">
            {message}
          </span>
        </div>
      </Fragment>,
      { hideProgressBar: false, ...(duration && { autoClose: duration }) }
    );
  } else if (action === 'info') {
    toast.info(
      <Fragment>
        <div className="toastify-header">
          <div className="title-wrapper">
            <Avatar size="sm" color="info" icon={<Info size={12} />} />
            <h6 className="toast-title">Info!</h6>
          </div>
          <small className="text-muted">{new Date().toLocaleTimeString()}</small>
        </div>
        <div className="toastify-body">
          <span role="img" aria-label="toast-text">
            {message}
          </span>
        </div>
      </Fragment>,
      { hideProgressBar: false, ...(duration && { autoClose: duration }) }
    );
  } else {
    toast(
      <Fragment>
        <div className="toastify-header">
          <div className="title-wrapper">
            <Avatar size="sm" color="primary" icon={<Bell size={12} />} />
            <h6 className="toast-title">Default!</h6>
          </div>
          <small className="text-muted">{new Date().toLocaleTimeString()}</small>
        </div>
        <div className="toastify-body">
          <span role="img" aria-label="toast-text">
            {message}
          </span>
        </div>
      </Fragment>,
      { hideProgressBar: false, ...(duration && { autoClose: duration }) }
    );
  }
};
