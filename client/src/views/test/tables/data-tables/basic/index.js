// ** React Imports
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs';
// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss';
import { Fragment } from 'react';
// ** Third Party Components
import { Col, Row } from 'reactstrap';
// ** Tables
import TableExpandable from './TableExpandable';
import TableMultilingual from './TableMultilingual';
import TableWithButtons from './TableWithButtons';
import TableZeroConfig from './TableZeroConfig';

const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Datatables' breadCrumbParent='Home' breadCrumbActive='Datatables Basic' />
      <Row>
        <Col sm='12'>
          <TableZeroConfig />
        </Col>
        <Col sm='12'>
          <TableWithButtons />
        </Col>
        <Col sm='12'>
          <TableExpandable />
        </Col>
        <Col sm='12'>
          <TableMultilingual />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
