import '@styles/base/pages/dashboard-ecommerce.scss';
import '@styles/base/pages/page-module.scss';
import '@styles/react/libs/charts/apex-charts.scss';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import AppLayout from '../../@core/layouts/AppLayout';
import AppCard from '../../utility/custom/AppCard';


const Modules = () => {

  return (
    <AppLayout>
      <div id='dashboard-ecommerce'>
        <Row className='match-height'>
          <Col className="p-5 mt-5 " lg='12' xl='12' md='12' xs='12'>
            <AppCard cols={{ xl: '3', sm: '6' }} />
          </Col>
        </Row>
      </div>
    </AppLayout>

  );
};

export default Modules;
