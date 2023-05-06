// ** React Imports
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs';
// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss';
import { Fragment } from 'react';
// ** Third Party Components
import { Col, Row } from 'reactstrap';
import TableAdvSearch from './TableAdvSearch';
// ** Tables
import TableServerSide from './TableServerSide';


const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Datatables' breadCrumbParent='Home' breadCrumbActive='Datatables Advance' />
      <Row>
        <Col sm='12'>
          <TableServerSide />
        </Col>
        <Col sm='12'>
          <TableAdvSearch />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
