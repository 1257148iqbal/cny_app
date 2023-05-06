import errorImg from '@src/assets/images/pages/error.svg';
import '@styles/base/pages/page-misc.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';


const Error = () => {
  const { goBack } = useHistory();
  const handleBack = () => {
    goBack();
  };
  return (
    <div className='misc-wrapper'>
      <a className='brand-logo' href='/'>

        <h2 className='brand-text text-primary ml-1'>QuadRION ERP</h2>
      </a>
      <div className='misc-inner p-2 p-sm-3'>
        <div className='w-100 text-center'>
          <h2 className='mb-1'>Page Not Found 🕵🏻‍♀️</h2>
          <p className='mb-2'>Oops! 😖 The requested URL was not found on this server.</p>
          <Button.Ripple onClick={() => { handleBack(); }} color='secondary' className='btn-sm-block mb-2 mr-2'>
            Go Back
          </Button.Ripple>
          <Button.Ripple tag={Link} to="/home" color='primary' className='btn-sm-block mb-2'>
            Home
          </Button.Ripple>
          <img className='img-fluid' src={errorImg} alt='Not authorized page' />
        </div>
      </div>
    </div>
  );
};
export default Error;
