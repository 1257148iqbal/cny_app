import Breadcrumbs from '@components/breadcrumbs';
import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import Validations from './Validation';

const ReactstrapValidation = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle='Reactstrap Validation'
        breadCrumbParent='Form'
        breadCrumbActive='Reactstrap Validation'
      />
      <Row>
        <Col sm='12'>
          <Validations />
        </Col>
      </Row>
    </Fragment>
  );
};
export default ReactstrapValidation;
