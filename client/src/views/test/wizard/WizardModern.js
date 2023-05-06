import { useRef, useState } from 'react';
import { FileText, Link, MapPin, User } from 'react-feather';
import CustomSteeper from '../../../utility/custom/CustomSteeper';
import AccountDetails from './steps/AccountDetails';
import Address from './steps/Address';
import PersonalInfo from './steps/PersonalInfo';
import SocialLinks from './steps/SocialLinks';

const WizardModern = () => {
  const [stepper, setStepper] = useState( null );

  const ref = useRef( null );

  const steps = [
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      icon: <FileText size={18} />,
      content: <AccountDetails stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      icon: <User size={18} />,
      content: <PersonalInfo stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      icon: <MapPin size={18} />,
      content: <Address stepper={stepper} type='wizard-modern' />
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      icon: <Link size={18} />,
      content: <SocialLinks stepper={stepper} type='wizard-modern' />
    }
  ];

  return (
    <div className='modern-horizontal-wizard'>
      <CustomSteeper
        type='modern-horizontal'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper( el )}
      />
    </div>
  );
};

export default WizardModern;
