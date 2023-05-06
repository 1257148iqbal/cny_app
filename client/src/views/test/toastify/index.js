import ExtensionsHeader from '@components/extensions-header';
import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import ToastrOptions from './ToastifyOptions';
import ToastrPositions from './ToastPositions';
import ToastrAnimations from './ToastrAnimations';
import ToastrTypes from './ToastTypes';

const Toastr = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Toastify'
        subTitle='React Toastify makes notification easy 🚀 !'
        link='https://github.com/fkhadra/react-toastify'
      />

      <Row>
        <Col sm='12'>
          <ToastrTypes />
        </Col>
        <Col sm='12'>
          <ToastrPositions />
        </Col>
        <Col sm='12'>
          <ToastrAnimations />
        </Col>
        <Col sm='12'>
          <ToastrOptions />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Toastr;
