/*
  Title: PreCosting Sheet
  Description: PreCosting Sheet
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import NoPhoto from '@custom-assets/images/reports/NoPhoto.jpg';
import '@custom-styles/reporting/reporting-core.scss';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { PRE_COSTING_SHEET_API } from '../../../../../services/api-end-points/merchandising/v1/preCostingSheet';
import { baseUrl } from '../../../../../utility/enums';
import {
  fetchAllBuyers,
  fetchCostingByStyle,
  fetchDepartmentByBuyer,
  fetchPreCostingSheet,
  fetchSeasonByBuyerDepartmentAndYear,
  fetchStyleByBuyerDepartmentYearAndSeason,
  fetchYearByDepartment
} from '../store/actions';
import {
  BUYER_CHANGE_PRE_COSTING_SHEET,
  COSTING_BY_STYLE_CHANGE,
  DEPARTMENT_CHANGE_PRE_COSTING_SHEET,
  LOADING,
  SEASON_CHANGE_PRE_COSTING_SHEET,
  STYLE_CHANGE_PRE_COSTING_SHEET,
  YEAR_CHANGE_PRE_COSTING_SHEET
} from '../store/actionType';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;

const PreCostingSheet = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const {
    preCostingSheets,
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
    costings,
    selectedCosting,
    loading,
    isSeasonsLoading,
    isDepartmentLoading,
    isYearLoading,
    isStyleLoading,
    isCostingLoading
  } = useSelector( ( { preCostingSheetReducer } ) => preCostingSheetReducer );
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
      dispatch( { type: BUYER_CHANGE_PRE_COSTING_SHEET, payload: buyer } );
      dispatch( fetchDepartmentByBuyer( buyer.value ) );
    } else {
      dispatch( { type: BUYER_CHANGE_PRE_COSTING_SHEET, payload: null } );
    }
  };

  //For Department Change
  const onDepartmentChange = department => {
    if ( department ) {
      dispatch( { type: DEPARTMENT_CHANGE_PRE_COSTING_SHEET, payload: department } );
      dispatch( fetchYearByDepartment( department.value ) );
    } else {
      dispatch( { type: DEPARTMENT_CHANGE_PRE_COSTING_SHEET, payload: null } );
    }
  };

  //For Year Change
  const onYearChange = year => {
    if ( year ) {
      dispatch( { type: YEAR_CHANGE_PRE_COSTING_SHEET, payload: year } );
      dispatch( fetchSeasonByBuyerDepartmentAndYear( selectedBuyer.value, selectedDepartment.value, year.value ) );
    } else {
      dispatch( { type: YEAR_CHANGE_PRE_COSTING_SHEET, payload: null } );
    }
  };

  //For Season Change
  const onSeasonChange = season => {
    if ( season ) {
      dispatch( { type: SEASON_CHANGE_PRE_COSTING_SHEET, payload: season } );
      dispatch( fetchStyleByBuyerDepartmentYearAndSeason( selectedBuyer.value, selectedDepartment.value, selectedYear.value, season.value ) );
    } else {
      dispatch( { type: SEASON_CHANGE_PRE_COSTING_SHEET, payload: null } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      dispatch( { type: STYLE_CHANGE_PRE_COSTING_SHEET, payload: style } );
      dispatch( fetchCostingByStyle( style.value ) );
    } else {
      dispatch( { type: STYLE_CHANGE_PRE_COSTING_SHEET, payload: null } );
    }
  };

  //For Costing Change
  const onCostingChange = costing => {
    if ( costing ) {
      dispatch( { type: COSTING_BY_STYLE_CHANGE, payload: costing } );
    } else {
      dispatch( { type: COSTING_BY_STYLE_CHANGE, payload: null } );
    }
  };

  // For Report View
  const onReportView = () => {
    dispatch( fetchPreCostingSheet( selectedCosting.id ) );
    dispatch( { type: LOADING, payload: true } );
  };

  //for sum cost breakdown value
  const sumValue = array => {
    const sum = array
      ?.reduce( ( acc, curr ) => {
        return ( acc += curr );
      }, 0 )
      ?.toFixed( 6 );
    return sum;
  };

  //Sum Costing Summary Value with fabric amount
  const sumCostingSummaryValue = ( sumValue, fabricAmount, accessoriesAmount ) => {
    return ( Number( sumValue ) + fabricAmount + accessoriesAmount ).toFixed( 6 );
  };

  //Pre Costing value without cm
  const preCostingValueWithoutCM = () => {
    const sum =
      preCostingSheets.perUnitQuotedPrice
      - preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.totalBuyerCost;
    return isNaN( sum ) ? '0.000000' : sum.toFixed( 6 );
  };


  // For Report Print
  const onReportPrint = () => {
    const url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${PRE_COSTING_SHEET_API.fetch_pre_costing_sheet_by_costingId_rdlc( selectedCosting.id )}`;
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
      <ActionMenu title="Costing Sheet" moreButton={false} breadcrumb={breadcrumb}>
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

              {/* Buyer dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="buyer">
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
                  isLoading={isDepartmentLoading && !selectedDepartment}
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Label className="text-dark font-weight-bold" for="year">
                  Years
                </Label>
                <Select
                  id="year"
                  isClearable
                  isSearchable
                  bsSize="sm"
                  isLoading={isYearLoading && !selectedYear}
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Label className="text-dark font-weight-bold" for="season">
                  Seasons
                </Label>
                <Select
                  id="season"
                  isClearable
                  isSearchable
                  bsSize="sm"
                  isLoading={isSeasonsLoading && !selectedSeason}
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="style">
                  Styles
                </Label>
                <Select
                  id="style"
                  isClearable
                  isSearchable
                  bsSize="sm"
                  isLoading={isStyleLoading && !selectedStyle}
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

              {/* Costing dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="costing">
                  Costing
                </Label>
                <Select
                  id="costing"
                  isSearchable
                  bsSize="sm"
                  isLoading={isCostingLoading && !selectedCosting}
                  theme={selectThemeColors}
                  options={costings}
                  value={selectedCosting}
                  onChange={onCostingChange}
                  isDisabled={!selectedStyle}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                />
              </FormGroup>
              {/* Costing dropdown end */}

              {/* View dropdown start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-1" onClick={onReportView} disabled={!selectedCosting}>
                  View
                </Button>
              </FormGroup>
              {/* View dropdown end */}

              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-1" onClick={onReportPrint} disabled={!selectedCosting}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {selectedCosting && loading ? (
        <div className="custom-report-form">
          {preCostingSheets.styleNo ? (
            <div>
              {/* Master Info */}
              <Card className="mb-1 pt-2 pr-3 pl-3">
                <Row className="mt-1 ml-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 p-0">
                    <Badge color="primary">{`Master Info`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleNo">
                          Style No
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{preCostingSheets?.styleNo}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="model">
                          Model
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.styleNo}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyerName">
                          Buyer Name
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.buyerName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          Style Description
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.description}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="department">
                          Department
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.styleDepartment}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="season">
                          Season
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.season}</div>
                      </div>
                    </Row>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="expectedqty">
                          Expected Qty
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{preCostingSheets?.expectedQty}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="deliveryDate">
                          Shipment Date
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.deliveryDate}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="fobValueDoz">
                          FOB Value/Doz
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {
                            ( preCostingSheets.perUnitQuotedPrice * 12 ).toFixed( 6 )
                          }
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="fobValuepcs">
                          FOB Value/Pcs
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets.perUnitQuotedPrice.toFixed( 6 )}
                        </div>
                      </div>
                    </Row>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="color">
                          Color
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">
                          {preCostingSheets?.colorList ? preCostingSheets?.colorList?.map( cl => `${cl.colorName}, ` ) : ''}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="size">
                          Size
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets?.sizsList ? preCostingSheets?.sizsList?.map( cl => `${cl.sizeName}, ` ) : ''}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="cm">
                          CM %
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.costInPercentage}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="costingPerPcs">
                          Costing Per
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{`1 ${preCostingSheets?.costingUOM}`}</div>
                      </div>
                    </Row>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={2}>
                    {/* <h5 className="text-center">Garment Picture</h5> */}
                    <Row className="justify-content-center">
                      <img
                        src={preCostingSheets?.fileUrl ? `${baseUrl}/${preCostingSheets?.fileUrl}` : NoPhoto}
                        alt=""
                        width="120px"
                        height="160px"
                        className="img-fluid rounded"
                      />
                    </Row>
                  </Col>
                </Row>

                {/* Costing Summary & Breakdown */}

                <Row className="pt-2 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Costing Summary`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Costing Group</th>
                          <th>For Buyer</th>
                          <th>For In-House</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fabric</td>
                          <td className={`text-right`}>{preCostingSheets?.totalFabricAmount.toFixed( 6 )}</td>
                          <td className={`text-right`}>{preCostingSheets?.totalFabricAmount.toFixed( 6 )}</td>
                        </tr>
                        <tr>
                          <td>Accessories</td>
                          <td className={`text-right`}>{preCostingSheets?.totalAccessoriesAmount.toFixed( 6 )}</td>
                          <td className={`text-right`}>{preCostingSheets?.totalAccessoriesAmount.toFixed( 6 )}</td>
                        </tr>
                        {preCostingSheets?.costingList?.map( cs => ( cs.costingGroup ? (
                          <tr key={uuid()}>
                            <td>{cs.costingGroup}</td>
                            <td className={`text-right`}>{cs.totalBuyerCost.toFixed( 6 )}</td>
                            <td className={`text-right`}>{cs.totalInHouseCost.toFixed( 6 )}</td>
                          </tr>
                        ) : (
                          <tr key={uuid()} className="text-center">
                            {/* <td colSpan={3}>There have no costing summary</td> */}
                          </tr>
                        ) )
                        )}
                        <tr className="font-weight-bold">
                          <th>Total</th>
                          <td className={`text-right`}>
                            {sumCostingSummaryValue(
                              sumValue( preCostingSheets?.costingList?.map( item => item.totalBuyerCost ) ),
                              preCostingSheets?.totalFabricAmount,
                              preCostingSheets?.totalAccessoriesAmount
                            )}
                          </td>
                          <td className={`text-right`}>
                            {preCostingSheets.perUnitQuotedPrice.toFixed( 6 )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>

                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-2">
                    <Badge color="primary">{`Costing Breakdown`}</Badge>
                  </FormGroup>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th colSpan={4}></th>
                          <th colSpan={3}>For Buyer</th>
                          <th colSpan={3}>For In-House</th>
                        </tr>
                        <tr>
                          <th>Item Group</th>
                          <th>Item Sub Group</th>
                          <th>Item Description</th>
                          <th>Unit</th>
                          <th>Cons</th>
                          <th>Rate</th>
                          <th>Value</th>
                          <th>Cons</th>
                          <th>Rate</th>
                          <th>Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preCostingSheets?.fabricAssessoriesList
                          ?.filter( item => item.groupType === 1 )
                          ?.map( cb => (
                            <tr key={cb.fabricAccessoriesId}>
                              <td>{cb.itemGroupName}</td>
                              <td>{cb.itemSubGroupName}</td>
                              <td>{cb.itemDescription}</td>
                              <td>{cb.consumptionUOM}</td>
                              <td className={`text-right`}>{cb.consumptionQuantity}</td>
                              <td className={`text-right`}>{cb.consumptionRatePerUnit}</td>
                              <td className={`text-right`}>{cb.consumptionCost.toFixed( 6 )}</td>
                              <td className={`text-right`}>{cb.inHouseQuantity}</td>
                              <td className={`text-right`}>{cb.inHouseRatePerUnit}</td>
                              <td className={`text-right`}>{cb.inHouseCost.toFixed( 6 )}</td>
                            </tr>
                          ) )}
                        <tr className="font-weight-bold">
                          <th colSpan={6}>Total Fabric Cost</th>
                          <td className={`text-right`}>
                            {sumValue( preCostingSheets?.fabricAssessoriesList?.filter( fa => fa.groupType === 1 )?.map( item => item.consumptionCost ) )}
                          </td>
                          <td colSpan={2}></td>
                          <td className={`text-right`}>
                            {sumValue( preCostingSheets?.fabricAssessoriesList?.filter( fa => fa.groupType === 1 )?.map( item => item.inHouseCost ) )}
                          </td>
                        </tr>
                        <tr className="bg-primary">
                          <td colSpan={10} style={{ padding: '10px !important' }}></td>
                        </tr>
                      </tbody>

                      <tbody>
                        {preCostingSheets?.fabricAssessoriesList
                          ?.filter( item => item.groupType === 2 )
                          ?.map( cb => (
                            <tr key={cb.fabricAccessoriesId}>
                              <td>{cb.itemGroupName}</td>
                              <td>{cb.itemSubGroupName}</td>
                              <td>{cb.itemDescription}</td>
                              <td>{cb.consumptionUOM}</td>
                              <td className={`text-right`}>{cb.consumptionQuantity}</td>
                              <td className={`text-right`}>{cb.consumptionRatePerUnit}</td>
                              <td className={`text-right`}>{cb.consumptionCost.toFixed( 6 )}</td>
                              <td className={`text-right`}>{cb.inHouseQuantity}</td>
                              <td className={`text-right`}>{cb.inHouseRatePerUnit}</td>
                              <td className={`text-right`}>{cb.inHouseCost.toFixed( 6 )}</td>
                            </tr>
                          ) )}
                        <tr className="font-weight-bold">
                          <th colSpan={6}>Total Accessories Cost</th>
                          <td className={`text-right`}>
                            {sumValue( preCostingSheets?.fabricAssessoriesList?.filter( fa => fa.groupType === 2 )?.map( item => item.consumptionCost ) )}
                          </td>
                          <td colSpan={2}></td>
                          <td className={`text-right`}>
                            {sumValue( preCostingSheets?.fabricAssessoriesList?.filter( fa => fa.groupType === 2 )?.map( item => item.inHouseCost ) )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                {/* <Card className="mb-1 pt-2 pr-3 pl-3 pb-2"> */}
                <Row className="mb-1 mt-1 border p-1">
                  <Col xs={12} className="border border-secondary mb-1">
                    <Label className="h4">Note :</Label>
                    <span>{` ${preCostingSheets.note ? preCostingSheets?.note : ''}`}</span>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleNo">
                          Created By
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{preCostingSheets?.createdBy}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="model">
                          Approved By
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingSheets?.approvedBy}</div>
                      </div>
                    </Row>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row>
                      <div className="mb-1">
                        <Badge color="primary">{`Projected C.M. sign by MD. dated on :`}</Badge>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="model">
                          Post Costing Value ($)
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets.perUnitQuotedPrice.toFixed( 6 )}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          Post Costing Value without CM ($)
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{preCostingValueWithoutCM()}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          CM Value ($)
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.totalInHouseCost.toFixed( 6 )}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          C.M per Doz ($)
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets?.costingUOM === "PCS" ? ( ( preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.totalInHouseCost ) * 12 )?.toFixed( 6 ) : ( preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.totalInHouseCost )?.toFixed( 2 )}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          C.M per Unit ($)
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.totalInHouseCost.toFixed( 6 )}
                        </div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          C.M Ratio (%)
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          {preCostingSheets?.costingList?.find( item => item.costingGroup === 'CM' )?.costInPercentage}
                        </div>
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

export default PreCostingSheet;
