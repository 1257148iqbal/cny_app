/*
  Title: SixMonthOrderValueByStyle
  Description: SixMonthOrderValueByStyle
  Author: Iqbal Hossain
  Date: 08-August-2022
  Modified: 08-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import CustomDateMonthPicker from '@utility/custom/customController/CustomDateMonthPicker';
import { lastDateFromMonth, serverDate } from '@utility/dateHelpers';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchAllStatus, fetchSixMonthOrderValueByStyle } from '../store/actions';
import { FROM_DATE_CHANGE_SIX_MONTH_ORDER_VALUE_BY_STYLE, LOADING, STATUS_CHANGE_ORDER_VALUE_BY_STYLE } from '../store/actionType';

const SixMonthOrderValueByStyle = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const { statusDDL, selectedStatus, orderValueByStyle, loading } = useSelector(
    ( { sixMonthOrderValueByStyleReducer } ) => sixMonthOrderValueByStyleReducer
  );
  //#endregion

  //#region State
  const [fromDate, setFromDate] = useState( null );
  // const [toDate, setToDate] = useState(null);
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllStatus() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For Status Chnage
  const onStatusChange = status => {
    if ( status ) {
      dispatch( { type: STATUS_CHANGE_ORDER_VALUE_BY_STYLE, payload: status } );
      setFromDate( null );
    } else {
      dispatch( { type: STATUS_CHANGE_ORDER_VALUE_BY_STYLE, payload: null } );
      setFromDate( null );
    }
  };

  //For From date Change
  const onFromDateChange = date => {
    setFromDate( date );
    dispatch( { type: FROM_DATE_CHANGE_SIX_MONTH_ORDER_VALUE_BY_STYLE } );
  };

  // For Report View
  const onReportView = () => {
    const targetDate = new Date( serverDate( fromDate ) );
    targetDate.setMonth( targetDate.getMonth() + 5 );
    const toDates = new Date( targetDate.toLocaleDateString() );
    dispatch( fetchSixMonthOrderValueByStyle( selectedStatus?.status, serverDate( fromDate ), lastDateFromMonth( toDates ) ) );
    dispatch( { type: LOADING, payload: true } );
  };

  // totol Buyer Wise
  const styleWiseTotal = array => {
    return array?.reduce( ( acc, curr ) => {
      return ( acc += curr );
    }, 0 );
  };

  // total Buyer Quantity
  const totalBuyerQuantity = ( array, months ) => {
    const sum = array?.styleList?.map( item => item.monthlyOrderList?.filter( mol => mol.month === months.month ) ).flat();
    return sum?.reduce( ( acc, curr ) => {
      return ( acc += curr.adjustedQuantity );
    }, 0 );
  };

  // total Buyer Amount
  const totalBuyerAmount = ( array, months ) => {
    const sum = array?.styleList?.map( item => item.monthlyOrderList?.filter( mol => mol.month === months.month ) ).flat();
    return sum?.reduce( ( acc, curr ) => {
      return ( acc += curr.totalAmount );
    }, 0 );
  };

  // total Quantity
  const totalQuantity = months => {
    const sum = orderValueByStyle?.orderValueByStylesList
      .map( osl => osl.styleCategoryList.map( scl => scl.styleList?.map( item => item.monthlyOrderList?.filter( mol => mol.month === months.month ) ) ) )
      .flat( 3 );
    return sum?.reduce( ( acc, curr ) => {
      return ( acc += curr.adjustedQuantity );
    }, 0 );
  };

  // total Quantity
  const totalAmount = months => {
    const sum = orderValueByStyle?.orderValueByStylesList
      .map( osl => osl.styleCategoryList.map( scl => scl.styleList?.map( item => item.monthlyOrderList?.filter( mol => mol.month === months.month ) ) ) )
      .flat( 3 );
    return sum?.reduce( ( acc, curr ) => {
      return ( acc += curr.totalAmount );
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
      <ActionMenu title="Six Month Order Value By Style" moreButton={false} breadcrumb={breadcrumb}>
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

              {/* status dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="buyer">
                  Buyer Status
                </Label>
                <Select
                  id="buyer"
                  isSearchable
                  isClearable
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={statusDDL}
                  value={selectedStatus}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onStatusChange}
                  noOptionsMessage={() => 'No Data Found'}
                />
              </FormGroup>
              {/* status dropdown end */}

              {/* From Date dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="fromDate">
                  From Month
                </Label>
                <CustomDateMonthPicker
                  selected={fromDate}
                  id="fromDate"
                  name="fromDate"
                  onChange={onFromDateChange}
                  showMonthYearPicker={true}
                  readOnly={!selectedStatus}
                />
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

      {loading && fromDate ? (
        <div>
          {orderValueByStyle?.headingsList ? (
            <div>
              {/* Six Month Order Value By Style */}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Six Month Order Value By Style`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table mb-1">
                      {orderValueByStyle?.orderValueByStylesList?.map( ovsl => (
                        <Fragment key={uuid()}>
                          <thead className={`text-center table-bordered`}>
                            <tr>
                              <td className="h4 text-left" colSpan={16}>{`Buyer: ${ovsl.buyerName}`}</td>
                            </tr>
                            <tr className="font-weight-bold">
                              <th rowSpan={2}>{`Marchant`}</th>
                              <th rowSpan={2}>{`Style No`}</th>
                              <th rowSpan={2}>{`Total Qty (pcs)`}</th>
                              <th rowSpan={2}>{`Total Value (USD)`}</th>
                              {orderValueByStyle?.headingsList?.map( osl => (
                                <th key={uuid()} colSpan={2}>{`${osl.monthYear}`}</th>
                              ) )}
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

                          {ovsl?.styleCategoryList?.map( item => {
                            return (
                              <tbody key={uuid()} className={`text-right`}>
                                <tr>
                                  <th colSpan={16} className="h4 text-dark text-left ">{`Style Cagegory: ${item.styleCategory}`}</th>
                                </tr>

                                {item.styleList?.map( mi => {
                                  return (
                                    <tr key={mi.id}>
                                      <td></td>
                                      <td className="text-left">{mi.styleNo}</td>
                                      <td>{styleWiseTotal( mi.monthlyOrderList?.map( mol => mol.adjustedQuantity ) )}</td>
                                      <td>{`$${styleWiseTotal( mi.monthlyOrderList?.map( mol => mol.totalAmount ) )}`}</td>
                                      {mi.monthlyOrderList?.map( mol => (
                                        <Fragment key={uuid()}>
                                          <td>{mol.adjustedQuantity}</td>
                                          <td>{mol.totalAmount}</td>
                                        </Fragment>
                                      ) )}
                                    </tr>
                                  );
                                } )}
                                <tr className="font-weight-bold">
                                  <td colSpan={4}>{`Total`}</td>
                                  {orderValueByStyle?.headingsList?.map( mol => (
                                    <Fragment key={uuid()}>
                                      <td>{totalBuyerQuantity( item, mol ) ? totalBuyerQuantity( item, mol ) : ''}</td>
                                      <td>{totalBuyerAmount( item, mol ) ? `$${totalBuyerAmount( item, mol )}` : ''}</td>
                                    </Fragment>
                                  ) )}
                                </tr>
                              </tbody>
                            );
                          } )}
                        </Fragment>
                      ) )}
                      <tbody>
                        <tr className="font-weight-bold">
                          <td colSpan={4}>Grand Total</td>
                          {orderValueByStyle?.headingsList?.map( mol => (
                            <Fragment key={uuid()}>
                              <td className="text-right">{totalQuantity( mol ) ? totalQuantity( mol ) : ''}</td>
                              <td className="text-right">{totalAmount( mol ) ? `$${totalAmount( mol )}` : ''}</td>
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
                        <span>{` ${orderValueByStyle?.reportGeneratedOn}`}</span>
                      </div>
                      <div>
                        <Label className="h5">User: </Label>
                        <span>{` ${orderValueByStyle?.user}`}</span>
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

export default SixMonthOrderValueByStyle;
