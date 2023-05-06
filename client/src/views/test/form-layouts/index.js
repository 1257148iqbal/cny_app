import Breadcrumbs from '@components/breadcrumbs';
import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import HorizontalForm from './HorizontalForm';
import HorizontalFormIcons from './HorizontalFormIcons';
import MultipleColumnForm from './MultipleColumnForm';
import VerticalForm from './VerticalForm';
import VerticalFormIcons from './VerticalFormIcons';

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Form Layouts' breadCrumbParent='Form' breadCrumbActive='Form Layouts' />
      <Row>
        <Col md='6' sm='12'>
          <HorizontalForm />
        </Col>
        <Col md='6' sm='12'>
          <HorizontalFormIcons />
        </Col>
        <Col md='6' sm='12'>
          <VerticalForm />
        </Col>
        <Col md='6' sm='12'>
          <VerticalFormIcons />
        </Col>
        <Col sm='12'>
          <MultipleColumnForm />
        </Col>
      </Row>
    </Fragment>
  );
};
export default FormLayouts;
