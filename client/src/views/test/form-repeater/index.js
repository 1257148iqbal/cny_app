import Breadcrumbs from '@components/breadcrumbs';
import { Fragment } from 'react';
import 'react-slidedown/lib/slidedown.css';
import { Col, Row } from 'reactstrap';
import RepeatingForm from './RepeatingForm';
import RepeatingFormAnimated from './RepeatingFormAnimated';

const FormRepeater = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Form Repeater' breadCrumbParent='Form' breadCrumbActive='Form Repeater' />
      <Row>
        <Col sm={12}>
          <RepeatingForm />
        </Col>
        <Col sm={12}>
          <RepeatingFormAnimated />
        </Col>
      </Row>
    </Fragment>
  );
};

export default FormRepeater;
