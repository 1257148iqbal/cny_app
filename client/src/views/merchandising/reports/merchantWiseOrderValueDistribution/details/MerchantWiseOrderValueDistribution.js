/*
  Title: MerchantWiseOrderValueDistribution
  Description: MerchantWiseOrderValueDistribution
  Author: Iqbal Hossain
  Date: 16-August-2022
  Modified: 16-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { CanvasJSChart } from 'canvasjs-react-charts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Label, NavItem, NavLink, Row } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchMerchantWiseOrderValueDistribution } from '../store/actions';

const MerchantWiseOrderValueDistribution = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { merchantWiseOrderValueDistributionReducer } ) => merchantWiseOrderValueDistributionReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchMerchantWiseOrderValueDistribution() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  function hanldePrint() {
    notify( 'warning', 'There have no data' );
  }

  const handleCancel = () => {
    history.goBack();
  };

  // const grandTotal = array => {
  //   return array?.reduce((acc, curr) => {
  //     return (acc += curr);
  //   }, 0);
  // };
  //#endregion
  const breadcrumb = [
    {
      id: 'home',
      link: '/',
      name: 'Home',
      isActive: false,
      hidden: false
    },
    {
      id: 'styleDetails',
      link: '#',
      name: ' Report',
      isActive: true,
      hidden: false
    }
  ];
  return (
    <div className="p-1 mt-3">
      <ActionMenu title="Merchant Wise Order Value Distribution" moreButton={false} breadcrumb={breadcrumb}>
        <NavItem className="mr-1">
          <NavLink tag={Button} size="sm" color="primary" type="submit" onClick={hanldePrint}>
            Print
          </NavLink>
        </NavItem>
        <NavItem className="mr-1">
          <NavLink tag={Button} size="sm" color="secondary" onClick={handleCancel}>
            Cancel
          </NavLink>
        </NavItem>
      </ActionMenu>

      {/* Colors and Sizes */}
      <CanvasJSChart options={items.options} />

      <Card className="mb-1 pt-2 pr-3 pl-3 pb-2">
        <Row className="mb-0">
          <Col xs={12}>
            <Row className="d-flex justify-content-between">
              <div>
                <Label className="h5">Report Generated On :</Label>
                <span>{` ${items?.reportGeneratedOn}`}</span>
              </div>
              <div>
                <Label className="h5">User: </Label>
                <span>{` ${items?.user}`}</span>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default MerchantWiseOrderValueDistribution;
