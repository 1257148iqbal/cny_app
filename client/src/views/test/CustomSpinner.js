

import UILoader from '@components/ui-loader';
import ComponentSpinner from '@core/components/spinner/Loading-spinner';
import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';

const CustomColorBlocking = () => {
  const [block, setBlock] = useState( false );

  const handleBlock = () => {
    setBlock( true );

    setTimeout( () => {
      setBlock( false );
    }, 306000 );
  };

  return (
    <div>
      <UILoader blocking={block} overlayColor='rgba(115, 103, 240, .1)'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Custom Color</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>
              Lorem ipsum dolor sit amet, an vel affert soleat possim. Usu meis neglegentur ut, oporteat salutandi
              dignissim at mea. Pericula erroribus quaerendum ex duo, his autem accusamus ad, alienum detracto rationibus
              vis et. No est volumus ocurreret vituperata.
            </CardText>
            <Button color='primary' outline onClick={handleBlock}>
              Block
            </Button>
          </CardBody>
        </Card>
      </UILoader>

      <UILoader blocking={block} loader={<ComponentSpinner />} overlayColor='rgba(115, 103, 240, .5)'>
        <div style={{ minHeight: '250px', border: 'solid 2px grey', backgroundColor: '#FFF', position: 'relative' }}>

          <Button color='primary' outline onClick={handleBlock}>
            Block
          </Button>
        </div>
      </UILoader>
    </div>
  );
};

export default CustomColorBlocking;
