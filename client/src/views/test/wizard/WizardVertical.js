import { useRef, useState } from 'react';
import CustomSteeper from '../../../utility/custom/CustomSteeper';
import AccountDetails from './steps/AccountDetails';
import Address from './steps/Address';
import PersonalInfo from './steps/PersonalInfo';
import SocialLinks from './steps/SocialLinks';

const WizardVertical = () => {
  const [stepper, setStepper] = useState( null );
  const ref = useRef( null );

  const steps = [
    {
      id: 'account-details',
      title: 'Account Details',
      subtitle: 'Enter Your Account Details.',
      content: <AccountDetails stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'personal-info',
      title: 'Personal Info',
      subtitle: 'Add Personal Info',
      content: <PersonalInfo stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'step-address',
      title: 'Address',
      subtitle: 'Add Address',
      content: <Address stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      content: <SocialLinks stepper={stepper} type='wizard-vertical' />
    }
  ];

  return (
    <div className='vertical-wizard'>
      <CustomSteeper
        type='vertical'
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

export default WizardVertical;
