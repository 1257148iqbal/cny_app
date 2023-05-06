/*
  Title: OrderSummaryPOAndSytleWise
  Description: OrderSummaryPOAndSytleWise
  Author: Iqbal Hossain
  Date: 07-August-2022
  Modified: 07-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import NoPhoto from '@custom-assets/images/reports/NoPhoto.jpg';
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { formattedDate } from '@utility/dateHelpers';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import {
  fetchAllBuyers,
  fetchDepartmentByBuyer,
  fetchOrderSummaryPOAndSytleWise,
  fetchSeasonByBuyerDepartmentAndYear,
  fetchStyleByBuyerDepartmentYearAndSeason,
  fetchYearByDepartment
} from '../store/actions';
import {
  BUYER_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  DEPARTMENT_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  LOADING,
  SEASON_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  STYLE_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE,
  YEAR_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE
} from '../store/actionType';

const OrderSummaryPOAndSytleWise = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const {
    orderSummaryPoStyleWise,
    buyers,
    selectedBuyer,
    departments,
    selectedDepartment,
    years,
    selectedYear,
    seasons,
    selectedSeason,
    styles,
    selectedStyle,
    loading
  } = useSelector( ( { orderSummaryPOAndSytleWiseReducer } ) => orderSummaryPOAndSytleWiseReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyers() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For Buyer Chnage
  const onBuyerChange = buyer => {
    if ( buyer ) {
      dispatch( { type: BUYER_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: buyer } );
      dispatch( fetchDepartmentByBuyer( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: null } );
    }
  };

  //For Department Change
  const onDepartmentChange = department => {
    if ( department ) {
      dispatch( { type: DEPARTMENT_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: department } );
      dispatch( fetchYearByDepartment( department.value ) );
    } else {
      dispatch( { type: DEPARTMENT_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: null } );
    }
  };

  //For Year Change
  const onYearChange = year => {
    if ( year ) {
      dispatch( { type: YEAR_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: year } );
      dispatch( fetchSeasonByBuyerDepartmentAndYear( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, year.value ) );
    } else {
      dispatch( { type: YEAR_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: null } );
    }
  };

  //For Season Change
  const onSeasonChange = season => {
    if ( season ) {
      dispatch( { type: SEASON_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: season } );
      dispatch(
        fetchStyleByBuyerDepartmentYearAndSeason( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, selectedYear.year, season.value )
      );
    } else {
      dispatch( { type: SEASON_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: null } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      dispatch( { type: STYLE_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: style } );
    } else {
      dispatch( { type: STYLE_CHANGE_ORDER_SUMMARY_PO_STYLE_WISE, payload: null } );
    }
  };

  // For Report View
  const onReportView = () => {
    dispatch( fetchOrderSummaryPOAndSytleWise( selectedStyle.id ) );
    dispatch( { type: LOADING, payload: true } );

    if ( loading && !orderSummaryPoStyleWise.styleNo ) {
      notify( 'warning', 'Data Not Found' );
    }
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
      <ActionMenu title="Order Summary PO & Style Wise" moreButton={false} breadcrumb={breadcrumb}>
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
            <Row className="border rounded rounded-3 mr-1 align-items-center">
              {/* badge start */}
              <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1">
                <Badge color="primary">{`Input Section`}</Badge>
              </FormGroup>
              {/* badge end */}

              {/* Buyer dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="style">
                  Buyers
                </Label>
                <Select
                  id="buyer"
                  isSearchable
                  isLoading={!selectedBuyer}
                  isClearable
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={buyers}
                  value={selectedBuyer}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onBuyerChange}
                />
              </FormGroup>
              {/* Buyer dropdown end */}

              {/* Department dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="department">
                  Departments
                </Label>
                <Select
                  id="department"
                  isClearable
                  isSearchable
                  isLoading={!selectedDepartment}
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={departments}
                  value={selectedDepartment}
                  isDisabled={!selectedBuyer}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onDepartmentChange}
                />
              </FormGroup>
              {/* Department dropdown end */}

              {/* year dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="year">
                  Years
                </Label>
                <Select
                  id="year"
                  isClearable
                  isSearchable
                  bsSize="sm"
                  isLoading={!selectedYear}
                  theme={selectThemeColors}
                  options={years}
                  value={selectedYear}
                  onChange={onYearChange}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  isDisabled={!selectedDepartment}
                />
              </FormGroup>
              {/* year dropdown end */}

              {/* season dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="season">
                  Seasons
                </Label>
                <Select
                  id="season"
                  isClearable
                  isSearchable
                  bsSize="sm"
                  isLoading={!selectedSeason}
                  theme={selectThemeColors}
                  options={seasons}
                  value={selectedSeason}
                  onChange={onSeasonChange}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  isDisabled={!selectedYear}
                />
              </FormGroup>
              {/* season dropdown end */}

              {/* style dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="style">
                  Styles
                </Label>
                <Select
                  id="style"
                  isClearable
                  isSearchable
                  bsSize="sm"
                  isLoading={!selectedStyle}
                  theme={selectThemeColors}
                  options={styles}
                  value={selectedStyle}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onStyleChange}
                  isDisabled={!selectedSeason}
                />
              </FormGroup>
              {/* style dropdown end */}

              {/* View dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-1" onClick={onReportView} disabled={!selectedStyle}>
                  View
                </Button>
              </FormGroup>
              {/* View dropdown end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {selectedStyle && loading && orderSummaryPoStyleWise.styleNo ? (
        <div className="custom-report-form">
          {orderSummaryPoStyleWise.styleNo ? (
            <div>
              {/* Master Info */}
              <Card className="mb-1 pt-2 pr-3 pl-3">
                <Row className="mb-0">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 p-0">
                    <Badge color="primary">{`Master Info`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="buyer">
                          Buyer
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{orderSummaryPoStyleWise?.buyerName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="department">
                          Department
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{orderSummaryPoStyleWise?.buyerDepartment}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="productCategory">
                          Product Category
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{orderSummaryPoStyleWise?.productCategory}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="styleNo">
                          Style No
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{orderSummaryPoStyleWise?.styleNo}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="season">
                          Season
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{orderSummaryPoStyleWise?.season}</div>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="year">
                          Year
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{orderSummaryPoStyleWise?.year}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="shipmentDate">
                          Shipment Date
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {orderSummaryPoStyleWise?.shipmentDate === '0001-01-01T00:00:00' ? '' : formattedDate( orderSummaryPoStyleWise?.shipmentDate )}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="image">
                          Image
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          <img
                            src={orderSummaryPoStyleWise?.fileUrl ? `${process.env.REACT_APP_BASE_URL}/${orderSummaryPoStyleWise?.fileUrl}` : NoPhoto}
                            alt="Empty"
                            width="120px"
                            height="150px"
                          />
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Card>

              {/* Order Summary PO & Style Wise */}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Order Summary PO & Style Wise`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Po No</th>
                          <th>Color</th>
                          <th>Order Qty</th>
                          <th>UOM</th>
                          <th>FOB</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderSummaryPoStyleWise?.poList?.map( pl => {
                          return (
                            <Fragment key={uuid()}>
                              <tr>
                                <td rowSpan={pl.colorList?.length + 1}>{pl.orderNumber}</td>
                              </tr>
                              {pl.colorList.map( cl => (
                                <tr key={uuid()}>
                                  <td>{cl.colorName}</td>
                                  <td className="text-right">{cl.adjustedQuantity}</td>
                                  <td className="text-center">{cl.orderUOM}</td>
                                  <td>{cl.fob}</td>
                                </tr>
                              ) )}
                            </Fragment>
                          );
                        } )}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Card>

              {/* User Info */}
              <Card className="mb-1 pt-2 pr-3 pl-3 pb-2">
                <Row className="mb-0">
                  <Col xs={12}>
                    <Row className="d-flex justify-content-between">
                      <div>
                        <Label className="h5">Report Generated On :</Label>
                        <span>{` ${orderSummaryPoStyleWise?.reportGeneratedOn ? orderSummaryPoStyleWise?.reportGeneratedOn : ''}`}</span>
                      </div>
                      <div>
                        <Label className="h5">User: </Label>
                        <span>{` ${orderSummaryPoStyleWise?.user ? orderSummaryPoStyleWise?.user : ''}`}</span>
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

export default OrderSummaryPOAndSytleWise;
