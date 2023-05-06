import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent( Swal );

const ConfirmDialogBox = () => {
    const handleConfirmText = () => {
        return MySwal.fire( {
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonText: 'Yes, delete it!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-danger ml-1'
            },
            buttonsStyling: false
        } );
    };


    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h4'>Callback</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='mb-2 mb-md-0' md='6' sm='12'>
                        <h5 className='mb-1'>Confirm Button Text</h5>
                        <Button color='primary' onClick={() => { handleConfirmText(); }} outline>
                            Confirm
                        </Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default ConfirmDialogBox;

