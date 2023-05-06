/*
  Title: StyleWiseCostingSummary
  Description: StyleWiseCostingSummary
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import NoPhoto from '@custom-assets/images/reports/NoPhoto.jpg';
import '@custom-styles/reporting/reporting-core.scss';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import {
  fetchAllBuyers,
  fetchDepartmentByBuyer,
  fetchSeasonByBuyerDepartmentAndYear,
  fetchStyleByBuyerDepartmentYearAndSeason,
  fetchStyleWiseCostingSummary,
  fetchYearByDepartment
} from '../store/actions';
import {
  BUYER_CHANGE_COSTING_SUMMARY,
  DEPARTMENT_CHANGE_COSTING_SUMMARY,
  LOADING,
  SEASON_CHANGE_COSTING_SUMMARY,
  STYLE_CHANGE_COSTING_SUMMARY,
  YEAR_CHANGE_COSTING_SUMMARY
} from '../store/actionType';

const StyleWiseCostingSummary = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const {
    costingSummary,
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
  } = useSelector( ( { styleWiseCostingSummaryReducer } ) => styleWiseCostingSummaryReducer );
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
      dispatch( { type: BUYER_CHANGE_COSTING_SUMMARY, payload: buyer } );
      dispatch( fetchDepartmentByBuyer( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE_COSTING_SUMMARY, payload: null } );
    }
  };

  //For Department Change
  const onDepartmentChange = department => {
    if ( department ) {
      dispatch( { type: DEPARTMENT_CHANGE_COSTING_SUMMARY, payload: department } );
      dispatch( fetchYearByDepartment( department.value ) );
    } else {
      dispatch( { type: DEPARTMENT_CHANGE_COSTING_SUMMARY, payload: null } );
    }
  };

  //For Year Change
  const onYearChange = year => {
    if ( year ) {
      dispatch( { type: YEAR_CHANGE_COSTING_SUMMARY, payload: year } );
      dispatch( fetchSeasonByBuyerDepartmentAndYear( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, year.value ) );
    } else {
      dispatch( { type: YEAR_CHANGE_COSTING_SUMMARY, payload: null } );
    }
  };

  //For Season Change
  const onSeasonChange = season => {
    if ( season ) {
      dispatch( { type: SEASON_CHANGE_COSTING_SUMMARY, payload: season } );
      dispatch(
        fetchStyleByBuyerDepartmentYearAndSeason( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, selectedYear.year, season.value )
      );
    } else {
      dispatch( { type: SEASON_CHANGE_COSTING_SUMMARY, payload: null } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      dispatch( { type: STYLE_CHANGE_COSTING_SUMMARY, payload: style } );
    } else {
      dispatch( { type: STYLE_CHANGE_COSTING_SUMMARY, payload: null } );
    }
  };

  // For Report View
  const onReportView = () => {
    dispatch( fetchStyleWiseCostingSummary( selectedStyle.id ) );
    dispatch( { type: LOADING, payload: true } );
  };

  //total costing summary
  const total = ( array, fabricAmount, accessoriesAmount ) => {
    const sum = fabricAmount + accessoriesAmount;
    return array
      ?.reduce( ( prev, curr ) => {
        return ( prev += Number( curr.totalBuyerCost ) );
      }, sum )
      ?.toFixed( 2 );
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
      <ActionMenu title="Style Wise Costing Summary" moreButton={false} breadcrumb={breadcrumb}>
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

      {selectedStyle && loading ? (
        <div className="custom-report-form">
          {costingSummary.styleNo ? (
            <div>
              {/* Master Info */}
              <Card className="mb-1 pt-2 pr-3 pl-3">
                <Row className="mt-1 ml-1">
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
                        <div className="custom-form-group">{costingSummary?.buyerName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="department">
                          Department
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{costingSummary?.buyerDepartment}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyerStyleNo">
                          Buyer Style No
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{costingSummary?.styleNo}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="styleNo">
                          Style No
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{costingSummary?.styleNo}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="season">
                          Season
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{costingSummary?.season}</div>
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
                        <div className="custom-form-group ">{costingSummary?.year}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="color">
                          Color
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{costingSummary?.colorList?.map( item => `${item.colorName}, ` )}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="image">
                          Image
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">
                          <img
                            src={costingSummary?.fileUrl ? `${process.env.REACT_APP_BASE_URL}/${costingSummary?.fileUrl}` : NoPhoto}
                            alt="Empty"
                            width="120px"
                            height="150px"
                          />
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Row>

                {/* Costing Summary & Breakdown */}

                <Row className="pt-2 pr-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Style Wise Costing Summary`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>System Style ID</th>
                          <th>System Cost ID</th>
                          <th>Currency</th>
                          <th>Fabric</th>
                          <th>Accessories</th>
                          {costingSummary?.costingDetails?.map(
                            cd => cd.costingGroup && (
                              <Fragment key={cd.id}>
                                <th>{cd.costingGroup}</th>
                              </Fragment>
                            )
                          )}
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody className={`text-center`}>
                        <tr>
                          <td>{costingSummary.systemIdNumber}</td>
                          <td>{costingSummary.sysCostingNumber}</td>
                          <td>{costingSummary.currencyCode}</td>
                          <td>{costingSummary.totalFabricAmount}</td>
                          <td>{costingSummary.totalAccessoriesAmount}</td>
                          {costingSummary?.costingDetails?.map(
                            cd => cd.costingGroup && (
                              <Fragment key={cd.id}>
                                <td>{Number( cd.totalBuyerCost ).toFixed( 2 )}</td>
                              </Fragment>
                            )
                          )}
                          <td>
                            {total(
                              costingSummary?.costingDetails,
                              Number( costingSummary?.totalFabricAmount ),
                              Number( costingSummary?.totalAccessoriesAmount )
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                {/* User Info */}
                {/* <Card className="mb-1 pt-2 pr-3 pl-3 pb-2"> */}
                <Row className="mb-1 pt-2 pr-3 pl-1 pb-2">
                  <Col xs={12}>
                    <Row className="d-flex justify-content-between">
                      <div>
                        <Label className="h5">Report Generated On :</Label>
                        <span>{` ${costingSummary?.reportGeneratedOn ? costingSummary?.reportGeneratedOn : 'Empty'}`}</span>
                      </div>
                      <div>
                        <Label className="h5">User: </Label>
                        <span>{` ${costingSummary?.user ? costingSummary?.user : 'Empty'}`}</span>
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

export default StyleWiseCostingSummary;
