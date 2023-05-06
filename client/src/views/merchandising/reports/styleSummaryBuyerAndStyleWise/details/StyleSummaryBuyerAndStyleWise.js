/*
  Title: StyleSummaryBuyerAndStyleWise
  Description: StyleSummaryBuyerAndStyleWise
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import {
  fetchAllBuyers,
  fetchDepartmentByBuyer,
  fetchSeasonByBuyerDepartmentAndYear,
  fetchStyleByBuyerDepartmentYearAndSeason,
  fetchStyleSummaryBuyerAndStyleWise,
  fetchYearByDepartment
} from '../store/actions';
import {
  BUYER_CHANGE_STYLE_SUMMARY,
  DEPARTMENT_CHANGE_STYLE_SUMMARY,
  LOADING,
  SEASON_CHANGE_STYLE_SUMMARY,
  STYLE_CHANGE_STYLE_SUMMARY,
  YEAR_CHANGE_STYLE_SUMMARY
} from '../store/actionType';

const StyleSummaryBuyerAndStyleWise = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  //#endregion

  const {
    loading,
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
    summaryStyles,
    isSeasonsLoading,
    isDepartmentLoading,
    isYearLoading,
    isStyleLoading
  } = useSelector( ( { styleSummaryBuyerAndStyleWiseReducer } ) => styleSummaryBuyerAndStyleWiseReducer );
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
      dispatch( { type: BUYER_CHANGE_STYLE_SUMMARY, payload: buyer } );
      dispatch( fetchDepartmentByBuyer( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE_STYLE_SUMMARY, payload: null } );
    }
  };

  //For Department Change
  const onDepartmentChange = department => {
    if ( department ) {
      dispatch( { type: DEPARTMENT_CHANGE_STYLE_SUMMARY, payload: department } );
      dispatch( fetchYearByDepartment( department.value ) );
    } else {
      dispatch( { type: DEPARTMENT_CHANGE_STYLE_SUMMARY, payload: null } );
    }
  };

  //For Year Change
  const onYearChange = year => {
    if ( year ) {
      dispatch( { type: YEAR_CHANGE_STYLE_SUMMARY, payload: year } );
      dispatch( fetchSeasonByBuyerDepartmentAndYear( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, year.value ) );
    } else {
      dispatch( { type: YEAR_CHANGE_STYLE_SUMMARY, payload: null } );
    }
  };

  //For Season Change
  const onSeasonChange = season => {
    if ( season ) {
      dispatch( { type: SEASON_CHANGE_STYLE_SUMMARY, payload: season } );
      dispatch(
        fetchStyleByBuyerDepartmentYearAndSeason( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, selectedYear.year, season.value )
      );
    } else {
      dispatch( { type: SEASON_CHANGE_STYLE_SUMMARY, payload: null } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      dispatch( { type: STYLE_CHANGE_STYLE_SUMMARY, payload: style } );
    } else {
      dispatch( { type: STYLE_CHANGE_STYLE_SUMMARY, payload: null } );
    }
  };
  //#endregion

  // For Report View
  const onReportView = () => {
    dispatch( fetchStyleSummaryBuyerAndStyleWise( selectedStyle.id ) );
    dispatch( { type: LOADING, payload: true } );
  };

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
      <ActionMenu title="Summary of Style" moreButton={false} breadcrumb={breadcrumb}>
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
                  isSearchable
                  isClearable
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="year">
                  Years
                </Label>
                <Select
                  id="year"
                  isSearchable
                  isClearable
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="season">
                  Seasons
                </Label>
                <Select
                  id="season"
                  isSearchable
                  isClearable
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="style">
                  Styles
                </Label>
                <Select
                  id="style"
                  isSearchable
                  isClearable
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

      {selectedStyle && loading ? (
        <div className="custom-report-form">
          {summaryStyles.styleNo ? (
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
                        <div className="custom-form-group">{summaryStyles?.buyerName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="department">
                          Department
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{summaryStyles?.buyerDepartment}</div>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="season">
                          Season
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{summaryStyles?.season}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="productCategory">
                          Product Category
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{summaryStyles?.productCategory}</div>
                      </div>
                    </Row>
                  </Col>
                </Row>

                {/* Costing Summary & Breakdown */}

                <Row className="pt-2 pb-2">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 p-0">
                    <Badge color="primary">{`Summary of Style (Buyer & Style Wise)`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th style={{ minWidth: '130px' }}>Style No</th>
                          <th style={{ minWidth: '130px' }}>Style Status</th>
                          <th style={{ minWidth: '130px' }}>Style Year</th>
                          <th style={{ minWidth: '130px' }}>Num POs</th>
                          <th style={{ minWidth: '130px' }}>Order Qty (Pcs)</th>
                          <th style={{ minWidth: '130px' }}>Avg FOB</th>
                          <th style={{ minWidth: '130px' }}>Amount(USD)</th>
                        </tr>
                      </thead>
                      <tbody className={`text-center`}>
                        {summaryStyles?.poList?.map( po => (
                          <tr key={po.styleId}>
                            <td>{po.styleNo}</td>
                            <td>{po.status}</td>
                            <td>{po.year}</td>
                            <td>{po.poiDs}</td>
                            <td>{Number( po.orderQuantity ).toFixed( 2 )}</td>
                            <td>
                              {isNaN( Number( po.totalAmount ) / Number( po.orderQuantity ) ) ? '0.00' : ( Number( po.totalAmount ) / Number( po.orderQuantity ) ).toFixed( 2 )}
                            </td>
                            <td>{Number( po.totalAmount ).toFixed( 2 )}</td>
                          </tr>
                        ) )}
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
                        <span>{` ${summaryStyles?.reportGeneratedOn ? summaryStyles?.reportGeneratedOn : ''}`}</span>
                      </div>
                      <div>
                        <Label className="h5">User: </Label>
                        <span>{` ${summaryStyles?.user ? summaryStyles?.user : ''}`}</span>
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

export default StyleSummaryBuyerAndStyleWise;
