/*
  Title: Style Details
  Description: Style Details
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import NoPhoto from '@custom-assets/images/reports/NoPhoto.jpg';
import '@custom-styles/reporting/reporting-core.scss';
import { selectThemeColors } from '@utility/Utils';
import { default as classnames } from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { STYLES_DETAILS_API } from '../../../../../services/api-end-points/merchandising/v1/stylesDetails';
import { baseUrl } from '../../../../../utility/enums';
import {
  fetchAllBuyers,
  fetchDepartmentByBuyer,
  fetchSeasonByBuyerDepartmentAndYear,
  fetchStyleByBuyerDepartmentYearAndSeason,
  fetchStyleDetailsByStyle,
  fetchYearByDepartment
} from '../store/actions';
import { BUYER_CHANGE, DEPARTMENT_CHANGE, LOADING, SEASON_CHANGE, STYLE_CHANGE, YEAR_CHANGE } from '../store/actionType';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;


const StyleDetails = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const {
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
    styleDetails,
    loading,
    isSeasonsLoading,
    isDepartmentLoading,
    isYearLoading,
    isStyleLoading
  } = useSelector( ( { styleDetailsReducer } ) => styleDetailsReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyers() );
  }, [dispatch] );
  //#endregion

  //#region Events
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For Buyer Chnage
  const onBuyerChange = buyer => {
    if ( buyer ) {
      dispatch( { type: BUYER_CHANGE, payload: buyer ? buyer : null } );
      dispatch( fetchDepartmentByBuyer( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE, payload: null } );
    }
  };

  //For Department Change
  const onDepartmentChange = department => {
    if ( department ) {
      dispatch( { type: DEPARTMENT_CHANGE, payload: department } );
      dispatch( fetchYearByDepartment( department.value ) );
    } else {
      dispatch( { type: DEPARTMENT_CHANGE, payload: null } );
    }
  };

  //For Year Change
  const onYearChange = year => {
    if ( year ) {
      dispatch( { type: YEAR_CHANGE, payload: year } );
      dispatch( fetchSeasonByBuyerDepartmentAndYear( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, year.value ) );
    } else {
      dispatch( { type: YEAR_CHANGE, payload: null } );
    }
  };

  //For Season Change
  const onSeasonChange = season => {
    if ( season ) {
      dispatch( { type: SEASON_CHANGE, payload: season } );
      dispatch(
        fetchStyleByBuyerDepartmentYearAndSeason( selectedBuyer.buyerId, selectedDepartment.buyerDepartmentId, selectedYear.year, season.value )
      );
    } else {
      dispatch( { type: SEASON_CHANGE, payload: season } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      dispatch( { type: STYLE_CHANGE, payload: style } );
    } else {
      dispatch( { type: STYLE_CHANGE, payload: null } );
    }
  };

  // For Report View
  const onReportView = () => {
    dispatch( fetchStyleDetailsByStyle( selectedStyle.id ) );
    dispatch( { type: LOADING, payload: true } );
  };

  // For Report Print
  const onReportPrint = () => {
    const url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${STYLES_DETAILS_API.fetch_styleDetails_by_styleId_rdlc( selectedStyle.id )}`;
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
      <ActionMenu title="Style Details" moreButton={false} breadcrumb={breadcrumb}>
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
                  className={classnames( 'erp-dropdown-select' )}
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
                  isLoading={isDepartmentLoading && !selectedDepartment}
                  bsSize="sm"
                  isClearable
                  theme={selectThemeColors}
                  options={departments}
                  value={selectedDepartment}
                  isDisabled={!selectedBuyer}
                  classNamePrefix="dropdown"
                  className={classnames( 'erp-dropdown-select' )}
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
                  bsSize="sm"
                  isLoading={isYearLoading && !selectedYear}
                  isClearable
                  theme={selectThemeColors}
                  options={years}
                  value={selectedYear}
                  onChange={onYearChange}
                  classNamePrefix="dropdown"
                  className={classnames( 'erp-dropdown-select' )}
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
                  bsSize="sm"
                  isLoading={isSeasonsLoading && !selectedSeason}
                  isClearable
                  theme={selectThemeColors}
                  options={seasons}
                  value={selectedSeason}
                  onChange={onSeasonChange}
                  classNamePrefix="dropdown"
                  className={classnames( 'erp-dropdown-select' )}
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
                  isSearchable
                  bsSize="sm"
                  isLoading={isStyleLoading && !selectedStyle}
                  isClearable
                  theme={selectThemeColors}
                  options={styles}
                  value={selectedStyle}
                  classNamePrefix="dropdown"
                  className={classnames( 'erp-dropdown-select' )}
                  onChange={onStyleChange}
                  isDisabled={!selectedSeason}
                />
              </FormGroup>
              {/* style dropdown end */}

              {/* View Report start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-1" onClick={onReportView} disabled={!selectedStyle}>
                  View
                </Button>
              </FormGroup>
              {/* View Report end */}

              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-1" onClick={onReportPrint} disabled={!selectedStyle}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {loading && selectedStyle ? (
        <div className="custom-report-form">
          {styleDetails?.styleNo ? (
            <div>
              {/* Master Info */}
              <Card className="mb-1 pt-2 pr-3 pl-3">
                <Row className="mb-0">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 p-0">
                    <Badge color="primary">{`Master Info`}</Badge>
                  </FormGroup>
                  <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyerStyleNo">
                          Buyer Style No
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.styleNo}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="styleDescription">
                          Style Description
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.description}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="styleDepartment">
                          Style Department
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.styleDepartment}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="styleDivision">
                          Style Division
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.styleDivision}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="styleCategory">
                          Style Category
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.styleCategory}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="productCategory">
                          Product Category
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.productCategory}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="fabricCategory">
                          Fabric Category
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.defaultFabDescription}</div>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                    <Row>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="buyer">
                          Buyer
                        </Label>
                        <Label className="custom-form-colons"> : </Label>
                        <div className="custom-form-group">{styleDetails?.buyerName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="department">
                          Buyer Department
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.buyerDepartment}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="season">
                          Season
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.season}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="year">
                          Year
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.year}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="status">
                          Status
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.status}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="localAgent">
                          Local Agent
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.agentName}</div>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="merchandiser">
                          Merchandiser
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{styleDetails?.merchandiserName ? styleDetails?.merchandiserName : ''}</div>
                      </div>
                      {/* <div className="custom-form-main">
                        <Label className="custom-form-label " for="sewingRequirement">
                          Sewing M/C Requirement
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                        <div className="custom-form-group ">{''}</div>
                      </div> */}
                    </Row>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={2} xl={2}>
                    <h4 className="text-center">Garment Picture</h4>
                    <Row className="justify-content-center">
                      <img
                        src={styleDetails?.fileUrl ? `${baseUrl}/${styleDetails?.fileUrl}` : NoPhoto}
                        alt=""
                        width="150px"
                        height="160px"
                        className="img-fluid rounded"
                      />
                    </Row>
                  </Col>
                </Row>
                {/* Color and Sizes */}
                <Row className="pt-3 pb-2">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 p-0">
                    <Badge color="primary">{`Color and Sizes`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Serial No</th>
                          <th>Color Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {styleDetails?.colorList?.map( ( color, index ) => ( color.colorName ? (
                          <tr key={color.colorId}>
                            <td>{index + 1}</td>
                            <td>{color.colorName}</td>
                          </tr>
                        ) : (
                          <tr key={uuid()}>
                            <td colSpan={2} className="text-center">
                              There have no colors
                            </td>
                          </tr>
                        ) )
                        )}
                      </tbody>
                    </Table>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={8} xl={8}>
                    <Table responsive size="sm" bordered={true} className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Size Range</th>
                          <th colSpan={15}>Size Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {styleDetails?.sizeGroupsList?.map( si => ( si.sizeGroupName ? (
                          <tr key={si.sizeGroupId}>
                            <td>{si.sizeGroupName}</td>
                            <td>{si.sizesList?.map( sl => sl.sizeName ).join( ', ' )}</td>
                          </tr>
                        ) : (
                          <tr key={uuid()}>
                            <td colSpan={2} className="text-center">
                              There have no sizes
                            </td>
                          </tr>
                        ) )
                        )}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                {/* Embellishments */}
                <Row className="mb-0">
                  <Col xs={12}>
                    <div className="h5 mb-1">Embellishments :</div>
                  </Col>
                </Row>

                <Row className="mb-2">
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="h5">Special Instructions :</div>
                    <div className="border border-secondary p-1" style={{ height: '130px' }}>
                      <div>{styleDetails?.additionalInstruction}</div>
                    </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="h5">Remarks :</div>
                    <div className="border border-secondary p-1" style={{ height: '130px' }}>
                      <div>{styleDetails?.remarks}</div>
                    </div>
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

export default StyleDetails;
