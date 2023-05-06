/*
  Title: MasterOrderSummaryByBuyer
  Description: MasterOrderSummaryByBuyer
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/

import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import CustomDateMonthPicker from '@utility/custom/customController/CustomDateMonthPicker';
import { lastDateFromMonth, serverDate } from '@utility/dateHelpers';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchMasterOrderSummaryByBuyer } from '../store/actions';
import { FROM_DATE_CHANGE_ORDER_SUMMARY_BY_BUYER, LOADING } from '../store/actionType';

const MasterOrderSummaryByBuyer = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const { orderSummaryByBuyers, loading } = useSelector( ( { masterOrderSummaryByBuyerReducer } ) => masterOrderSummaryByBuyerReducer );
  //#endregion

  //#region State
  const [fromDate, setFromDate] = useState( null );
  // const [toDate, setToDate] = useState(null);
  //#endregion

  //#region Effects
  useEffect( () => {
    // dispatch(fetchMasterOrderSummaryByBuyer());
  }, [dispatch] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For From date Change
  const onFromDateChange = date => {
    setFromDate( date );
    dispatch( { type: FROM_DATE_CHANGE_ORDER_SUMMARY_BY_BUYER } );
    // setToDate(toDates);
  };

  // For Report View
  const onReportView = () => {
    const targetDate = new Date( serverDate( fromDate ) );
    targetDate.setMonth( targetDate.getMonth() + 3 );
    const toDates = new Date( targetDate.toLocaleDateString() );
    dispatch( fetchMasterOrderSummaryByBuyer( serverDate( fromDate ), lastDateFromMonth( toDates ) ) );
    dispatch( { type: LOADING, payload: true } );
  };

  //sum total amount
  const totalAmount = object => {
    const sum = orderSummaryByBuyers?.orderSummaryList?.map( item => item.monthlyOrderList?.filter( mol => mol.month === object.month ) ).flat();
    return sum?.reduce( ( acc, curr ) => {
      return ( acc += curr.totalAmount );
    }, 0 );
  };

  //sum total quantity
  const totalQuantity = object => {
    const sum = orderSummaryByBuyers?.orderSummaryList?.map( item => item.monthlyOrderList?.filter( mol => mol.month === object.month ) ).flat();
    return sum?.reduce( ( acc, curr ) => {
      return ( acc += curr.adjustedQuantity );
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
      <ActionMenu title="Master Order Summary By Buyer" moreButton={false} breadcrumb={breadcrumb}>
        <NavItem className="mr-1">
          {/* <NavLink tag={Button} size="sm" color="primary" type="submit" onClick={hanldePrint}>
            Print
          </NavLink> */}
        </NavItem>
        <NavItem className="mr-1">
          {/* <NavLink tag={Button} size="sm" color="secondary" onClick={() => history.goBack()}>
            Cancel
          </NavLink> */}
        </NavItem>
      </ActionMenu>

      {/*Input Section*/}
      <Card className="mb-1 pt-2 pr-3 pl-3 pb-1">
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <Row className="border rounded rounded-3 mr-1">
              {/* badge start */}
              <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1">
                <Badge color="primary">{`Input Section`}</Badge>
              </FormGroup>
              {/* badge end */}

              {/* From Date dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="fromDate">
                  From Month
                </Label>
                <CustomDateMonthPicker selected={fromDate} id="fromDate" name="fromDate" onChange={onFromDateChange} showMonthYearPicker={true} />
              </FormGroup>
              {/* From Date  dropdown end */}

              {/* End Date  dropdown start */}
              {/* <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="toDate">
                  To Date
                </Label>
                <CustomDateMonthPicker selected={toDate} id="toDate" name="toDate" minDate={fromDate} showMonthYearPicker={true} readOnly />
              </FormGroup> */}
              {/* End Date  dropdown end */}

              {/* View dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-2" onClick={onReportView} disabled={!fromDate}>
                  View
                </Button>
              </FormGroup>
              {/* View dropdown end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {fromDate && loading ? (
        <div>
          {orderSummaryByBuyers?.orderSummaryList?.length ? (
            <div>
              {/* Master Order Summary By Buyer */}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Master Order Summary By Buyer`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table size="sm" responsive bordered hover className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th rowSpan={2}>{`Customer`}</th>
                          {orderSummaryByBuyers?.headings?.map( osl => (
                            <th key={uuid()} colSpan={3}>{`${osl.monthYear}`}</th>
                          ) )}
                        </tr>
                        <tr>
                          <th>Confirmed Qty</th>
                          <th>FOB</th>
                          <th>Value</th>
                          <th>Confirmed Qty</th>
                          <th>FOB</th>
                          <th>Value</th>
                          <th>Confirmed Qty</th>
                          <th>FOB</th>
                          <th>Value</th>
                          <th>Confirmed Qty</th>
                          <th>FOB</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody className={`text-right`}>
                        {orderSummaryByBuyers?.orderSummaryList?.map( item => (
                          <Fragment key={item.buyerId}>
                            <tr>
                              <td className="text-left">{item.buyerName}</td>
                              {item.monthlyOrderList.map( mol => (
                                <Fragment key={uuid()}>
                                  <td>{mol.adjustedQuantity ? `${mol.adjustedQuantity}` : '-'}</td>
                                  <td>{mol.ratePerUnit ? `$${mol.ratePerUnit}` : '-'}</td>
                                  <td>{mol.totalAmount ? `$${mol.totalAmount}` : '-'}</td>
                                </Fragment>
                              ) )}
                            </tr>
                          </Fragment>
                        ) )}
                        <tr className="font-weight-bold">
                          <td>{`Total`}</td>
                          {orderSummaryByBuyers?.headings?.map( mol => (
                            <Fragment key={uuid()}>
                              <td>{totalQuantity( mol ) ? totalQuantity( mol ) : ''}</td>
                              <th></th>
                              <td>{totalAmount( mol ) ? `$${totalAmount( mol )}` : ''}</td>
                            </Fragment>
                          ) )}
                        </tr>

                        <tr className="font-weight-bold">
                          <td>{`Total in BDT`}</td>
                          {orderSummaryByBuyers?.headings?.map( mol => (
                            <Fragment key={uuid()}>
                              <td></td>
                              <td></td>
                              <td>{totalAmount( mol ) ? `BDT ${totalAmount( mol ) * 95}` : ''}</td>
                            </Fragment>
                          ) )}
                        </tr>

                        <tr className="font-weight-bold">
                          <td></td>
                          {orderSummaryByBuyers?.headings?.map( mol => (
                            <Fragment key={uuid()}>
                              <td className="text-center" colSpan={3}>
                                {`Total Order Qty ${mol.monthYear}- ${totalQuantity( mol )}`}
                              </td>
                            </Fragment>
                          ) )}
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
                        <span>{` ${orderSummaryByBuyers?.reportGeneratedOn}`}</span>
                      </div>
                      <div>
                        <Label className="h5">User: </Label>
                        <span>{` ${orderSummaryByBuyers?.user}`}</span>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </div>
          ) : (
            <SpinnerComponent />
          )}
        </div>
      ) : (
        <div className="h4 text-center mt-3">There have no data to display</div>
      )}
    </div>
  );
};

export default MasterOrderSummaryByBuyer;
