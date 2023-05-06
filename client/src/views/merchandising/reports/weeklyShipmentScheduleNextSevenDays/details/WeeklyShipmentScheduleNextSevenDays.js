/*
  Title: WeeklyShipmentScheduleNextSevenDays
  Description: WeeklyShipmentScheduleNextSevenDays
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchWeeklyShipmentScheduleNextSevenDays } from '../store/actions';

const WeeklyShipmentScheduleNextSevenDays = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { weeklyShipmentScheduleNextSevenDaysReducer } ) => weeklyShipmentScheduleNextSevenDaysReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchWeeklyShipmentScheduleNextSevenDays() );
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
      <ActionMenu title="Weekly Shipment Schedule Next 7 Days" moreButton={false} breadcrumb={breadcrumb}>
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

      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Weekly Shipment Schedule Next 7 Days`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr>
                  <th colSpan={2}>Shipment Schedule</th>
                  <th colSpan={7}>Pending /hold shipments from previous weeks</th>
                  <th colSpan={3}>Update on</th>
                </tr>
                <tr>
                  <th>Customer</th>
                  <th>Style Ref</th>
                  <th>PP No</th>
                  <th>Order Qty (In Pc)</th>
                  <th>FOB in $</th>
                  <th>Shipment Date</th>
                  <th>Value</th>
                  <th>Shipment Mode</th>
                  <th>Payee for Shipment</th>
                  <th>Offered Date</th>
                  <th>Production Unit</th>
                  <th>Remarks</th>
                </tr>
              </thead>

              <tbody>
                {items?.details?.map( item => {
                  return (
                    <tr key={item.id}>
                      <td>{item?.customer}</td>
                      <td>{item?.styleRef}</td>
                      <td>{item?.ppNo}</td>
                      <td>{item?.orderQty}</td>
                      <td>{`$${item?.fob}`}</td>
                      <td>{item?.shipmentDate}</td>
                      <td>{item?.value}</td>
                      <td>{item?.shipmentMode}</td>
                      <td>{item?.payeeForShipment}</td>
                      <td>{item?.offeredDate}</td>
                      <td>{item?.productionUnit}</td>
                      <td>{item?.remarks}</td>
                    </tr>
                  );
                } )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>

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

export default WeeklyShipmentScheduleNextSevenDays;
