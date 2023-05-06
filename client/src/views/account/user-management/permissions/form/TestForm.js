import Wizard from '@components/wizard';
import { useRef, useState } from 'react';
import TreeForm from './TreeForm';

const TestForm = () => {
  const [stepper, setStepper] = useState(null);
  const ref = useRef(null);

  const steps = [
    {
      id: 'merchandiser',
      title: 'Merchandiser',
      subtitle: 'Merchandiser Subtitle',
      array: [
        {
          id: 2,
          name: 'Create'
        }
      ]
      // content: <TreeForm stepper={stepper} type='wizard-horizontal' />
    },
    {
      id: 'inventory',
      title: 'Inventory',
      subtitle: 'Inventory Subtitle',
      array: [
        {
          id: 3,
          name: 'Create'
        }
      ]
    },
    {
      id: 'production',
      title: 'Production',
      subtitle: 'Production Subtitle',
      array: [
        {
          id: 4,
          name: 'Create'
        }
      ]
    },
    {
      id: 'social-links',
      title: 'Social Links',
      subtitle: 'Add Social Links',
      array: [
        {
          id: 5,
          name: 'Create'
        }
      ]
    }
  ];

  const treeArray = steps.map(i => ({
    id: i.id,
    title: i.title,
    content: <TreeForm stepper={stepper} treeArray={i} title={i.title} type="wizard-horizontal" />
  }));

  return (
    <div className="vertical-wizard">
      <Wizard
        type="vertical"
        ref={ref}
        steps={treeArray}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  );
};

export default TestForm;
