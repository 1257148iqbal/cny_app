/*
  Title: BudgetSheet
  Description: BudgetSheet
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/

import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import { customSum } from '@utility/commonHelper';
import { formattedDate } from '@utility/dateHelpers';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { BUDGET_SHEET_API } from '../../../../../services/api-end-points/merchandising/v1/budgetSheet';
import { fetchAllBuyerBudgetSheets, fetchBudgetByBuyerId, fetchBudgetSheet } from '../store/actions';
import { CHANGE_BUDGET_BY_BUYER, CHANGE_BUYER_BUDGET_SHEET, LOADING } from '../store/actionType';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;

const BudgetSheet = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const { budgetSheet, buyers, selectedBuyer, budgets, selectedBudget, isBudgetLoading, isBudgetSheetLoading, loading } = useSelector(
    ( { budgetSheetReducer } ) => budgetSheetReducer
  );

  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyerBudgetSheets() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For Buyer Chnage
  const onBuyerChange = buyer => {
    if ( buyer ) {
      dispatch( { type: CHANGE_BUYER_BUDGET_SHEET, payload: buyer ? buyer : null } );
      dispatch( fetchBudgetByBuyerId( buyer.buyerId ) );
    } else {
      dispatch( { type: CHANGE_BUYER_BUDGET_SHEET, payload: null } );
    }
  };

  //For Budget Chnage
  const onBudgetChange = budget => {
    if ( budget ) {
      dispatch( { type: CHANGE_BUDGET_BY_BUYER, payload: budget ? budget : null } );
    } else {
      dispatch( { type: CHANGE_BUDGET_BY_BUYER, payload: null } );
    }
  };

  const grandTotal = array => {
    return array?.reduce( ( acc, curr ) => {
      return ( acc += curr );
    }, 0 );
  };

  // For Report View
  const onReportView = () => {
    dispatch( fetchBudgetSheet( selectedBudget.id ) );
    dispatch( { type: LOADING, payload: true } );
  };

  // Total Fabric Amount
  const totalFabricAmount = () => {
    const sum = customSum( budgetSheet?.budgetSummaryDetailsList?.filter( x => x.groupType === 1 ).map( item => item.totalConsumptionAmount ) );
    return sum;
  };

  // Total Fabric Amount
  const totalAccosoriesAmount = () => {
    const sum = customSum( budgetSheet?.budgetSummaryDetailsList?.filter( x => x.groupType === 2 ).map( item => item.totalConsumptionAmount ) );
    return sum;
  };


  // Total Order Value
  const totalOrderValue = () => {
    return customSum( budgetSheet?.detailsList?.map( dl => dl.totalAmount ) )?.toFixed( 4 );
  };

  //Total Orfer Qty
  const totalOrderQty = () => {
    return customSum( budgetSheet?.detailsList?.map( dl => dl.totalOrderQuantity ) );
  };
  // Sum Summary Value
  const sumSummaryValue = () => {
    const sumValue = customSum( budgetSheet?.summaryList?.map( sl => sl.costingGroupAmount ) );
    return sumValue + totalFabricAmount() + totalAccosoriesAmount();
  };

  // CM Summary Value
  const cmSummaryCost = () => {
    const cmCosting = budgetSheet?.summaryList?.find( sl => sl.costingGroupName === 'CM' );
    return cmCosting ? cmCosting?.costingGroupAmount : 0;
  };

  // Total cost of Production
  const totalCostOfProduction = () => {
    return sumSummaryValue() + cmSummaryCost();
  };

  // For Report Print
  const onReportPrint = () => {
    const url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${BUDGET_SHEET_API.fetch_budget_sheet_by_Id_rdlc( selectedBudget.id )}`;
    return window.open( url, '_blank' );
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
      <ActionMenu title="Budget Sheet" moreButton={false} breadcrumb={breadcrumb}>
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
            <Row className="border rounded rounded-3 mr-1 align-budgetSheet-center">
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

              {/* style dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="budget">
                  Budget
                </Label>
                <Select
                  id="style"
                  isSearchable
                  bsSize="sm"
                  isLoading={isBudgetLoading && !selectedBudget}
                  isClearable
                  theme={selectThemeColors}
                  options={budgets}
                  value={selectedBudget}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onBudgetChange}
                  isDisabled={!selectedBuyer}
                />
              </FormGroup>
              {/* style dropdown end */}

              {/* View dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-1" onClick={onReportView} disabled={!selectedBudget}>
                  View
                </Button>
              </FormGroup>
              {/* View dropdown end */}

              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-1" onClick={onReportPrint} disabled={!selectedBudget}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {loading ? (
        <div className="custom-report-form">
          {!isBudgetSheetLoading && budgetSheet?.budgetNumber ? (
            <div>
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Budget Sheet: Master Info`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row className="ml-1">
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="budgetNumber">
                          Budget Ref
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{budgetSheet?.budgetNumber}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="buyerName">
                          Buyer
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{budgetSheet?.buyerName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="createdAt">
                          Create Date
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{formattedDate( budgetSheet?.createdAt )}</div>
                      </div>
                    </Row>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row className="ml-1">
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleNo">
                          Total Quantity
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{totalOrderQty()}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="orderQty">
                          Total Value
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{totalOrderValue()}</div>
                      </div>
                    </Row>
                  </Col>
                </Row>

                {/* PO Infos */}

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Budget Sheet: Style & Po Details`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Style No</th>
                          <th>Po No</th>
                          <th>Order Quantity</th>
                          <th>Rate</th>
                          <th>Value</th>
                          <th>Excess%</th>
                          <th>Westage%</th>
                          <th>Adj Qty</th>
                          <th>Destination</th>
                          <th>Shipment Date</th>
                        </tr>
                      </thead>

                      <tbody>
                        {budgetSheet?.detailsList?.map( item => {
                          return (
                            <tr key={uuid()}>
                              <td>{item?.styleNo}</td>
                              <td>{item?.orderNumber}</td>
                              <td className="text-right">{item?.totalOrderQuantity}</td>
                              <td className="text-right">{item?.ratePerUnit}</td>
                              <td className="text-right">{( item?.totalAmount ).toFixed( 2 )}</td>
                              <td className="text-right">{( item?.excessQuantityPercentage ).toFixed( 2 )}</td>
                              <td className="text-right">{( item?.wastageQuantityPercentage ).toFixed( 2 )}</td>
                              <td className="text-right">{item?.adjustedQuantity}</td>
                              <td className="text-right">{item?.deliveryDestination}</td>
                              <td className="text-center">{formattedDate( item?.shipmentDate )}</td>
                            </tr>
                          );
                        } )}
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                {/* Summary */}

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Budget Sheet: Summary`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Costing Group</th>
                          <th>Value</th>
                          <th>Average / PC</th>
                          <th>%</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Fabric</td>
                          <td className="text-right">{( totalFabricAmount() ).toFixed( 4 )}</td>
                          <td className="text-right">{isFinite( totalOrderQty() / totalFabricAmount() ) ? ( totalOrderQty() / totalFabricAmount() ).toFixed( 4 ) : '0.0000'}</td>
                          <td className="text-right">{isFinite( totalFabricAmount() / totalCostOfProduction() ) ? ( totalFabricAmount() / totalCostOfProduction() * 100 ).toFixed( 2 ) : '0.00'} % </td>
                        </tr>
                        <tr>
                          <td>Accessories</td>
                          <td className="text-right">{( totalAccosoriesAmount() ).toFixed( 4 )}</td>
                          <td className="text-right">{isFinite( totalOrderQty() / totalAccosoriesAmount() ) ? ( totalOrderQty() / totalAccosoriesAmount() ).toFixed( 4 ) : '0.0000'}</td>
                          <td className="text-right">{isFinite( totalAccosoriesAmount() / totalCostOfProduction() ) ? ( totalAccosoriesAmount() / totalCostOfProduction() * 100 ).toFixed( 2 ) : '0.00'} %</td>
                        </tr>
                        {budgetSheet?.summaryList
                          ?.filter( sl => sl.costingGroupName !== 'CM' )
                          ?.map( item => {
                            return (
                              <tr key={uuid()}>
                                <td>{item?.costingGroupName}</td>
                                <td className="text-right">{( item?.costingGroupAmount ).toFixed( 4 )}</td>
                                <td className="text-right">
                                  {isFinite( totalOrderQty() / item?.costingGroupAmount ) ? ( totalOrderQty() / item?.costingGroupAmount ).toFixed( 4 ) : '0.0000'}
                                </td>
                                <td className="text-right">{isFinite( item?.costingGroupAmount / totalCostOfProduction() ) ? ( item?.costingGroupAmount / totalCostOfProduction() * 100 ).toFixed( 2 ) : '0.00'} %</td>
                              </tr>
                            );
                          } )}
                        <tr className="font-weight-bold">
                          <td>Total Cost</td>
                          <td className="text-right">{sumSummaryValue().toFixed( 4 )}</td>
                          <td className="text-right">{isFinite( totalOrderQty() / sumSummaryValue() ) ? ( totalOrderQty() / sumSummaryValue() ).toFixed( 4 ) : '0.0000'}</td>
                          <td className="text-right"></td>
                        </tr>

                        <tr>
                          <td>CM</td>
                          <td className="text-right">{cmSummaryCost().toFixed( 4 )}</td>
                          <td className="text-right">
                            {isFinite( totalOrderQty() / cmSummaryCost() ) ? ( totalOrderQty() / cmSummaryCost() ).toFixed( 4 ) : '0.0000'}
                          </td>

                          <td className="text-right">{isFinite( cmSummaryCost() / totalCostOfProduction() ) ? ( cmSummaryCost() / totalCostOfProduction() * 100 ).toFixed( 2 ) : '0.00'} %</td>
                        </tr>

                        <tr className="font-weight-bold">
                          <td>Total Cost of Production</td>
                          <td className="text-right">{totalCostOfProduction().toFixed( 4 )}</td>
                          <td className="text-right">
                            {isFinite( totalOrderQty() / totalCostOfProduction() ) ? ( totalOrderQty() / totalCostOfProduction() ).toFixed( 4 ) : '0.0000'}
                          </td>
                          <td className="text-right">100 %</td>
                        </tr>
                        <tr className="font-weight-bold">
                          <td>Total Order value</td>
                          <td className="text-right">{totalOrderValue()}</td>
                          <td className="text-right"></td>
                          <td className="text-right"></td>
                        </tr>
                        <tr className="font-weight-bold">
                          <td>Margin</td>
                          <td className="text-right">{( totalOrderValue() - totalCostOfProduction() ).toFixed( 4 )}</td>
                          <td className="text-right"></td>
                          <td className="text-right"></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                {/* Fabric, Trims & Other */}

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Fabric Details`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Item Sub Group</th>
                          <th>Fabric ref</th>
                          <th>UOM</th>
                          <th>Unit Price (Costing)</th>
                          <th>Unit Price (Consumption)</th>
                          <th>Costing Amount </th>
                          <th>Consumption Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        {budgetSheet?.budgetSummaryDetailsList?.filter( x => x.groupType === 1 ).map( item => ( item?.itemSubGroup ? (
                          <tr key={uuid()}>
                            <td>{item?.itemSubGroup}</td>
                            <td>{item?.itemDescription}</td>
                            <td>{item?.uom}</td>
                            <td className='text-right'>{( item?.costingRatePerUnit.toFixed( 4 ) )}</td>
                            <td className='text-right'>{( item?.consumptionRatePerUnit.toFixed( 4 ) )}</td>
                            <td className='text-right'>{( item?.totalCostingAmount.toFixed( 4 ) )}</td>
                            <td className='text-right'>{( item?.totalConsumptionAmount.toFixed( 4 ) )}</td>
                          </tr>
                        ) : (
                          <tr key={uuid()}>
                            <td colSpan={7} className="text-center">
                              There have no records
                            </td>
                          </tr>
                        ) ) )}
                        <tr className='font-weight-bold'>
                          <td className='text-right' colSpan={5}>Total</td>
                          <td className='text-right'>{customSum( budgetSheet?.budgetSummaryDetailsList?.filter( x => x.groupType === 1 ).map( item => item.totalCostingAmount ) ).toFixed( 4 )}</td>
                          <td className='text-right'>{( totalFabricAmount() ).toFixed( 4 )}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                {/* Trims Details */}

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Accessories Details`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Item Sub Group</th>
                          <th>UOM</th>
                          <th>Unit Price (Costing)</th>
                          <th>Unit Price (Consumption)</th>
                          <th>Costing Amount </th>
                          <th>Consumption Amount</th>
                        </tr>
                      </thead>


                      <tbody>
                        {budgetSheet?.budgetSummaryDetailsList?.filter( x => x.groupType === 2 ).map( item => ( item?.itemSubGroup ? ( <tr key={uuid()}>
                          <td>{item?.itemSubGroup}</td>
                          <td>{item?.uom}</td>
                          <td className='text-right'>{( item?.costingRatePerUnit.toFixed( 4 ) )}</td>
                          <td className='text-right'>{( item?.consumptionRatePerUnit.toFixed( 4 ) )}</td>
                          <td className='text-right'>{( item?.totalCostingAmount.toFixed( 4 ) )}</td>
                          <td className='text-right'>{( item?.totalConsumptionAmount.toFixed( 4 ) )}</td>
                        </tr> ) : (
                          <tr key={uuid()}>
                            <td colSpan={6} className="text-center">
                              There have no records
                            </td>
                          </tr>
                        ) ) )}
                        <tr className='font-weight-bold'>
                          <td className='text-right' colSpan={4}>Total</td>
                          <td className='text-right'>{customSum( budgetSheet?.budgetSummaryDetailsList?.filter( x => x.groupType === 2 ).map( item => item.totalCostingAmount ) ).toFixed( 4 )}</td>
                          <td className='text-right'>{( totalAccosoriesAmount() ).toFixed( 4 )}</td>
                        </tr>
                      </tbody>
                    </Table>
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

export default BudgetSheet;
