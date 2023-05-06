import { Card, CardBody } from 'reactstrap';

const SecondPage = () => {

  const handleFileUpload = ( e ) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL( file );
    reader.onload = () => {
      console.log( reader.result );

    };
    reader.onerror = function ( error ) {
      console.log( 'Error: ', error );

    };
  };

  return (
    <Card>

      <CardBody>
        <input type="file" onChange={( e ) => handleFileUpload( e )} />
      </CardBody>
    </Card>
  );
};

export default SecondPage;
