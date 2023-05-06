// ** Icons Import
import { Heart } from 'react-feather';
const Footer = () => {
  const today = new Date().toLocaleDateString();

  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}
        <a className='ml-1' href='/' target='_blank' rel='noopener noreferrer'>
          ERP - QuadRION
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-right d-none d-md-block'>
        {/* {currentDate} */}
        {today}
        <Heart size={14} />
      </span>
    </p>
  );
};

export default Footer;
