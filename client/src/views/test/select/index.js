import Breadcrumbs from '@components/breadcrumbs';
import '@styles/react/libs/react-select/_react-select.scss';
import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import SelectMulti from './SelectMulti';
import Selectoptions from './SelectOptions';
import ReactSelect from './SelectReact';
import SelectReactstrap from './SelectReactstrap';
import SelectSizing from './SelectSizing';


const Select = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Select' breadCrumbParent='Form Elements' breadCrumbActive='Select' />
      <Row>
        <Col sm='12'>
          <ReactSelect />
        </Col>
        <Col sm='12'>
          <Selectoptions />
        </Col>
        <Col md='6' sm='12'>
          <SelectReactstrap />
        </Col>
        <Col md='6' sm='12'>
          <SelectSizing />
        </Col>
        <Col sm='12'>
          <SelectMulti />
        </Col>
      </Row>
    </Fragment>
  );
};
export default Select;
