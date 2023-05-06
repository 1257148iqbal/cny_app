/*
  Title: MonthlyOrderSummary
  Description: MonthlyOrderSummary
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchMonthlyOrderSummary } from '../store/actions';

const MonthlyOrderSummary = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { monthlyOrderSummaryReducer } ) => monthlyOrderSummaryReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchMonthlyOrderSummary() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  function hanldePrint() {
    notify( 'warning', 'There have no data' );
  }

  const handleCancel = () => {
    history.goBack();
  };
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
      <ActionMenu title="Monthly Order Summary" moreButton={false} breadcrumb={breadcrumb}>
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

      {/* Costing Summary & Breakdown */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Monthly Order Summary`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr className="font-weight-bold">
                  <th rowSpan={2}>{`Customer`}</th>
                  <th rowSpan={2}>{`Style No`}</th>
                  <th rowSpan={2}>{`PO No`}</th>
                  <th colSpan={3}>{`Apr, 2020`}</th>
                  <th colSpan={3}>{`May, 2020`}</th>
                  <th colSpan={3}>{`Jun, 2020`}</th>
                  <th colSpan={3}>{`Jul, 2020`}</th>
                </tr>
                <tr>
                  <th>Confirmed</th>
                  <th>FOB</th>
                  <th>Value</th>
                  <th>Confirmed</th>
                  <th>FOB</th>
                  <th>Value</th>
                  <th>Confirmed</th>
                  <th>FOB</th>
                  <th>Value</th>
                  <th>Confirmed</th>
                  <th>FOB</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody className={`text-right`}>
                {items?.details?.map( item => (
                  <tr key={item.id}>
                    <td className="text-left">{item.customer}</td>
                    <td className="text-left">{item.styleNo}</td>
                    <td className="text-left">{item.buyerPoNo}</td>
                    <td>{item.confirmedQty_apr ? item.confirmedQty_apr : '-'}</td>
                    <td>{item.fob_apr ? `$${item.fob_apr}` : '-'}</td>
                    <td>{item.value_apr ? item.value_apr : '-'}</td>
                    <td>{item.confirmedQty_may ? item.confirmedQty_may : '-'}</td>
                    <td>{item.fob_may ? `$${item.fob_may}` : '-'}</td>
                    <td>{item.value_may ? item.value_may : '-'}</td>
                    <td>{item.confirmedQty_jun ? item.confirmedQty_jun : '-'}</td>
                    <td>{item.fob_jun ? `$${item.fob_jun}` : '-'}</td>
                    <td>{item.value_jun ? item.value_jun : '-'}</td>
                    <td>{item.confirmedQty_jul ? item.confirmedQty_jul : '-'}</td>
                    <td>{item.fob_jul ? `$${item.fob_jul}` : '-'}</td>
                    <td>{item.value_jul ? item.value_jul : '-'}</td>
                  </tr>
                ) )}
                <tr>
                  <td></td>
                  <td></td>
                  <td>Total in BDT</td>
                  <td></td>
                  <td></td>
                  <td>BDT-146,394,145.26</td>
                  <td></td>
                  <td></td>
                  <td>BDT-117,344,023.27</td>
                  <td></td>
                  <td></td>
                  <td>BDT-138,908,631.90</td>
                  <td></td>
                  <td></td>
                  <td>BDT-196,838,968.89</td>
                </tr>
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

export default MonthlyOrderSummary;
