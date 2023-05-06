// ** Icons Import
import { Heart } from 'react-feather';

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        <a href='/' target='_blank' rel='noopener noreferrer'>
          QuadRION ERP {' '}
        </a>
        © {new Date().getFullYear()}
        {/* <span className='d-none d-sm-inline-block'>, All rights Reserved</span> */}
      </span>
      <span className='float-md-right d-none d-md-block'>
        Made in Bangladesh
        <Heart size={14} />
      </span>
    </p>
  );
};

export default Footer;
