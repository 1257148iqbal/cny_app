import '@custom-styles/basic/custom-table-top-header.scss';
import { Col, CustomInput, Label, Row } from "reactstrap";


const TableCustomerHeader = ( { children, handlePerPage, rowsPerPage } ) => {
    return (
        <Row className='mx-0'>
            <Col className='d-flex align-items-center  ml-lg-1'>
                <Label for='rows-per-page'>Show</Label>
                <CustomInput
                    bsSize="sm"
                    className='form-control mx-50'
                    type='select'
                    id='rows-per-page'
                    value={rowsPerPage}
                    onChange={handlePerPage}
                    style={{
                        width: '5rem',

                        backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
                    }}
                >
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </CustomInput>
                <Label for='rows-per-page'>Entries</Label>

            </Col>
            <Col className="d-flex align-items-end justify-content-end justify-content-xs-start m-xs-0 ">
                {children}
            </Col>
        </Row>
    );
};

export default TableCustomerHeader;
