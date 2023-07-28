import { Col, Label, Row, Input } from 'reactstrap'

const TableCustomerHeader = ({ children, handlePerPage, rowsPerPage }) => {
  return (
    <Row className="mx-0">
      <Col className="d-flex align-items-center  ml-lg-1">
        <Label for="rows-per-page">Show</Label>
        <Input
          className="form-control mx-50"
          type="select"
          id="rows-per-page"
          value={rowsPerPage}
          onChange={handlePerPage}
          style={{
            width: '5rem',
            padding: '0 0.8rem',
            backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Input>
        <Label for="rows-per-page">Entries</Label>
      </Col>
      <Col className="d-flex align-items-end justify-content-end justify-content-xs-start m-xs-0 ">{children}</Col>
    </Row>
  )
}

export default TableCustomerHeader
