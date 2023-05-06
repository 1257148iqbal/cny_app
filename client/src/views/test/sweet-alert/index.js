import ExtensionsHeader from '@components/extensions-header';
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss';
import 'animate.css/animate.css';
import { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import SweetAlertAnimations from './SweetAlertAnimations';
import SweetAlertBasic from './SweetAlertBasic';
import SweetAlertCallback from './SweetAlertCallback';
import SweetAlertOptions from './SweetAlertOptions';
import SweetAlertPositions from './SweetAlertPositions';
import SweetAlertTypes from './SweetAlertTypes';


const SweetAlert = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='Sweet Alerts2'
        subTitle='A React implementation of SweetAlert2'
        link='https://github.com/sweetalert2/sweetalert2-react-content'
      />
      <Row>
        <Col sm='12'>
          <SweetAlertBasic />
        </Col>
        <Col sm='12'>
          <SweetAlertPositions />
        </Col>
        <Col sm='12'>
          <SweetAlertAnimations />
        </Col>
        <Col sm='12'>
          <SweetAlertTypes />
        </Col>
        <Col sm='12'>
          <SweetAlertOptions />
        </Col>
        <Col sm='12'>
          <SweetAlertCallback />
        </Col>
      </Row>
    </Fragment>
  );
};

export default SweetAlert;
