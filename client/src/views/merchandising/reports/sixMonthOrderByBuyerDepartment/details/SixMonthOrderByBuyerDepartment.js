/*
  Title: SixMonthOrderByBuyerDepartment
  Description: SixMonthOrderByBuyerDepartment
  Author: Iqbal Hossain
  Date: 10-August-2022
  Modified: 10-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchSixMonthOrderByBuyerDepartment } from '../store/actions';

const SixMonthOrderByBuyerDepartment = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { sixMonthOrderByBuyerDepartmentReducer } ) => sixMonthOrderByBuyerDepartmentReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchSixMonthOrderByBuyerDepartment() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  function hanldePrint() {
    notify( 'warning', 'There have no data' );
  }

  const handleCancel = () => {
    history.goBack();
  };

  const grandTotal = array => {
    return array?.reduce( ( acc, curr ) => {
      return ( acc += curr );
    }, 0 );
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
      <ActionMenu title="Six Month Order By Buyer Department" moreButton={false} breadcrumb={breadcrumb}>
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
            <Badge color="primary">{`Six Month Order By Buyer Department ( jul, 2022 -Dec, 2022 )`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr className="font-weight-bold">
                  <th rowSpan={2}>{`Department`}</th>
                  <th rowSpan={2}>{`Total Qty (pcs)`}</th>
                  <th rowSpan={2}>{`Total Value (USD)`}</th>
                  <th colSpan={2}>{`Jul, 2022`}</th>
                  <th colSpan={2}>{`Aug, 2022`}</th>
                  <th colSpan={2}>{`Sep, 2022`}</th>
                  <th colSpan={2}>{`Oct, 2022`}</th>
                  <th colSpan={2}>{`Nov, 2022`}</th>
                  <th colSpan={2}>{`Dec, 2022`}</th>
                </tr>
                <tr>
                  <th>Pcs</th>
                  <th>Amount</th>
                  <th>Pcs</th>
                  <th>Amount</th>
                  <th>Pcs</th>
                  <th>Amount</th>
                  <th>Pcs</th>
                  <th>Amount</th>
                  <th>Pcs</th>
                  <th>Amount</th>
                  <th>Pcs</th>
                  <th>Amount</th>
                </tr>
              </thead>

              {items?.map( item => {
                return (
                  <Fragment key={item.id}>
                    <tbody>
                      <tr>
                        <th colSpan={16} className="h4 text-dark ">{`Buyer: ${item.buyer}`}</th>
                      </tr>

                      {item.details?.map( d => {
                        return (
                          <tr key={d.id}>
                            <td>{d?.department}</td>
                            <td>{d?.totalQty}</td>
                            <td>{`$${d?.totalValue}`}</td>
                            <td>{d?.pcs_jul ? d?.pcs_jul : '-'}</td>
                            <td>{d?.amount_jul ? d?.amount_jul : '-'}</td>
                            <td>{d?.pcs_aug ? d?.pcs_aug : '-'}</td>
                            <td>{d?.amount_aug ? d?.amount_aug : '-'}</td>
                            <td>{d?.pcs_sep ? d?.pcs_sep : '-'}</td>
                            <td>{d?.amount_sep ? d?.amount_sep : '-'}</td>
                            <td>{d?.pcs_oct ? d?.pcs_oct : '-'}</td>
                            <td>{d?.amount_oct ? d?.amount_oct : '-'}</td>
                            <td>{d?.pcs_nov ? d?.pcs_nov : '-'}</td>
                            <td>{d?.amount_nov ? d?.amount_nov : '-'}</td>
                            <td>{d?.pcs_dec ? d?.pcs_dec : '-'}</td>
                            <td>{d?.amount_dec ? d?.amount_dec : '-'}</td>
                          </tr>
                        );
                      } )}

                      <tr className="font-weight-bold text-dark">
                        <td className="text-left">Total</td>
                        <td>{grandTotal( item.details.map( d => d.totalQty ) )}</td>
                        <td>{`$${grandTotal( item.details.map( d => d.totalValue ) )}`}</td>
                        <td>{grandTotal( item.details.map( d => d.pcs_jul ) )}</td>
                        <td>{grandTotal( item.details.map( d => d.amount_jul ) )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.details.map( d => d.pcs_aug ) )}</td>
                        <td>{grandTotal( item.details.map( d => d.amount_aug ) )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.details.map( d => d.pcs_sep ) )}</td>
                        <td>{grandTotal( item.details.map( d => d.amount_sep ) )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.details.map( d => d.pcs_oct ) )}</td>
                        <td>{grandTotal( item.details.map( d => d.amount_oct ) )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.details.map( d => d.pcs_nov ) )}</td>
                        <td>{grandTotal( item.details.map( d => d.amount_nov ) )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.details.map( d => d.pcs_dec ) )}</td>
                        <td>{grandTotal( item.details.map( d => d.amount_dec ) )?.toFixed( 2 )}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              } )}
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

export default SixMonthOrderByBuyerDepartment;
