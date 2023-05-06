/*
  Title: ExportPoWithColorAndSize
  Description: ExportPoWithColorAndSize
  Author: Iqbal Hossain
  Date: 06-August-2022
  Modified: 06-August-2022
*/

import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import CustomDatePicker from '@utility/custom/customController/CustomDatePicker';
import { notify } from '@utility/custom/notifications';
import { formattedDate, serverDate } from '@utility/dateHelpers';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { EXPORT_PO_WITH_COLOR_AND_SIZE_API } from '../../../../../services/api-end-points/merchandising/v1/exportPoWithColorAndSize';
import {
  fetchAllBuyers,
  fetchDepartmentByBuyer,
  fetchExprotPoWithColorAndSize,
  fetchSeasonByBuyerAndDepartment,
  fetchStyleByBuyerDepartmentAndSeason
} from '../store/actions';
import {
  BUYER_CHANGE_PO_WITH_COLOR_SIZE,
  DEPARTMENT_CHANGE_PO_WITH_COLOR_SIZE,
  LOADING,
  SEASON_CHANGE_PO_WITH_COLOR_SIZE,
  STYLE_CHANGE_PO_WITH_COLOR_SIZE
} from '../store/actionType';
import '../style/ExportPoWithColorAndSize.module.scss';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;

const ExportPoWithColorAndSize = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const {
    exportPoWithColorAndSizes,
    buyers,
    selectedBuyer,
    departments,
    selectedDepartment,
    seasons,
    selectedSeason,
    styles,
    selectedStyle,
    loading,
    isPoLoading
  } = useSelector( ( { exprotPoWithColorAndSizeReducer } ) => exprotPoWithColorAndSizeReducer );
  //#endregion

  //#region State
  const [fromDate, setFromDate] = useState( null );
  const [toDate, setToDate] = useState( null );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyers() );
  }, [dispatch] );

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (selectedStyle && toDate && loading && !isPoLoading && !exportPoWithColorAndSizes.styleNo) {
  //       notify('warning', 'Data Not Found');
  //     }
  //   }, 3000);
  // }, [exportPoWithColorAndSizes?.styleNo, isPoLoading, loading, toDate]);

  //#endregion


  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For Buyer Chnage
  const onBuyerChange = buyer => {
    const buyerIds = buyer?.map( b => b.buyerId ).toString();
    if ( buyer?.length ) {
      dispatch( { type: BUYER_CHANGE_PO_WITH_COLOR_SIZE, payload: buyer } );
      setFromDate( null );
      setToDate( null );
      dispatch( fetchDepartmentByBuyer( buyerIds ) );
    } else {
      dispatch( { type: BUYER_CHANGE_PO_WITH_COLOR_SIZE, payload: null } );
    }
  };

  //For Department Change
  const onDepartmentChange = department => {
    if ( department?.length ) {
      const buyerIds = selectedBuyer?.map( b => b.buyerId ).toString();
      const departmentsIds = department?.map( b => b.value ).toString();
      dispatch( { type: DEPARTMENT_CHANGE_PO_WITH_COLOR_SIZE, payload: department } );
      setFromDate( null );
      setToDate( null );
      dispatch( fetchSeasonByBuyerAndDepartment( buyerIds, departmentsIds ) );
    } else {
      dispatch( { type: DEPARTMENT_CHANGE_PO_WITH_COLOR_SIZE, payload: null } );
    }
  };

  //For Season Change
  const onSeasonChange = season => {
    if ( season?.length ) {
      const buyerIds = selectedBuyer?.map( b => b.buyerId ).toString();
      const departmentsIds = selectedDepartment?.map( b => b.buyerDepartmentId ).toString();
      const seasons = season?.map( b => b.season ).toString();
      dispatch( { type: SEASON_CHANGE_PO_WITH_COLOR_SIZE, payload: season } );
      setFromDate( null );
      setToDate( null );
      dispatch( fetchStyleByBuyerDepartmentAndSeason( buyerIds, departmentsIds, seasons ) );
    } else {
      dispatch( { type: SEASON_CHANGE_PO_WITH_COLOR_SIZE, payload: null } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      if ( style.length <= 7 ) {
        dispatch( { type: STYLE_CHANGE_PO_WITH_COLOR_SIZE, payload: style } );
      } else {
        notify( 'warning', "You can't select more than 7 styles" );
      }
      setFromDate( null );
      setToDate( null );
    } else {
      dispatch( { type: STYLE_CHANGE_PO_WITH_COLOR_SIZE, payload: null } );
      setFromDate( null );
      setToDate( null );
    }
  };

  //For From date Change
  const onFromDateChange = date => {
    const dates = date[0];
    setFromDate( dates );
    dispatch( { type: LOADING, payload: false } );
  };

  //For From date Change
  const onToDateChange = date => {
    const dates = date[0];
    setToDate( dates );

    dispatch( { type: LOADING, payload: false } );
  };

  //for sum cost breakdown value
  const sumValue = array => {
    const sum = array
      ?.reduce( ( acc, curr ) => {
        return ( acc += curr );
      }, 0 )
      ?.toFixed( 2 );
    return sum;
  };


  //for sum cost breakdown value
  const sumRowSpan = array => {
    const sum = array
      ?.reduce( ( acc, curr ) => {
        return ( acc += curr );
      }, 0 );
    return Number( sum );
  };

  // For Report View
  const onReportView = () => {
    if ( !selectedStyle?.length ) {
      notify( 'warning', 'Please Select style' );
    } else {
      if ( !exportPoWithColorAndSizes ) {
        notify( 'warning', 'Please Select Correct Date range' );
      } else {
        const styleIds = selectedStyle?.map( b => b.id ).toString();
        dispatch( fetchExprotPoWithColorAndSize( styleIds, serverDate( fromDate ), serverDate( toDate ) ) );
      }
    }
    dispatch( { type: LOADING, payload: true } );
  };
  //#endregion

  // for row span
  const poRowSpan = ( bpwl ) => {
    const rows = bpwl.seasonWithList.length + sumRowSpan( bpwl.seasonWithList.map( season => season.shipmentWiseList.length ).flat( Infinity ) ) + sumRowSpan( bpwl.seasonWithList.map( season => season.shipmentWiseList.map( shipment => shipment.destinationWiseList.length ) ).flat( Infinity ) ) + sumRowSpan( bpwl.seasonWithList.map( season => season.shipmentWiseList.map( shipment => shipment.destinationWiseList.map( x => x.colorList.length + 1 ) ) ).flat( Infinity ) );
    return rows + 1;
  };

  const seasonRowSpan = ( season ) => {
    const rows = season.shipmentWiseList.length + sumRowSpan( season.shipmentWiseList.map( shipment => shipment.destinationWiseList.length ).flat( Infinity ) ) + sumRowSpan( season.shipmentWiseList.map( shipment => shipment.destinationWiseList.map( x => x.colorList.length + 1 ) ).flat( Infinity ) );
    return rows + 1;
  };

  const shipmentRowSpan = ( shipment ) => {
    const rows = shipment.destinationWiseList.length + sumRowSpan( shipment.destinationWiseList.map( x => x.colorList.length + 1 ).flat( Infinity ) );
    return rows + 1;
  };

  // Buyer PO Sum
  const poWiseSum = ( destination, sizes ) => {
    const obj = destination.colorList?.map( cl => cl.sizeWiseList?.filter( swl => swl.sizeName === sizes.sizeName ) ).flat( 1 );
    const values = obj?.map( item => item.adjustedQuantity );
    return sumValue( values );
  };

  // Buyer PO wise Grand Total
  const pwWiseGrandTotal = ( destination ) => {
    const obj = destination.colorList?.map( cl => cl.sizeWiseList?.map( swl => swl.adjustedQuantity ) ).flat( 1 );
    return sumValue( obj );
  };


  // For Report Print
  const onReportPrint = () => {
    if ( !selectedStyle?.length ) {
      notify( 'warning', 'Please Select style' );
    } else {
      if ( !exportPoWithColorAndSizes ) {
        notify( 'warning', 'Please Select Correct Date range' );
      } else {
        const styleIds = selectedStyle?.map( b => b.id ).toString();
        const url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${EXPORT_PO_WITH_COLOR_AND_SIZE_API.fetch_buyer_po_with_color_size_by_style_rdlc( styleIds, serverDate( fromDate ), serverDate( toDate ) )}`;
        return window.open( url, '_blank' );
      }
    }
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
      <ActionMenu title="Buyer PO Break Down With Color and Size" moreButton={false} breadcrumb={breadcrumb}>
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
                  isMulti
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={buyers}
                  value={selectedBuyer}
                  onChange={onBuyerChange}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
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
                  isMulti
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={departments}
                  value={selectedDepartment}
                  onChange={onDepartmentChange}
                  isDisabled={!selectedBuyer}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                />
              </FormGroup>
              {/* Department dropdown end */}

              {/* season dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="season">
                  Seasons
                </Label>
                <Select
                  id="season"
                  isClearable
                  isSearchable
                  isLoading={!selectedSeason}
                  isMulti
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={seasons}
                  value={selectedSeason}
                  onChange={onSeasonChange}
                  isDisabled={!selectedDepartment}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
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
                  isLoading={!selectedStyle}
                  isMulti
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={styles}
                  value={selectedStyle}
                  onChange={onStyleChange}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  isDisabled={!selectedSeason}
                />
              </FormGroup>
              {/* style dropdown end */}
              <Col className="d-flex" xs={12} sm={12} md={6} lg={3} xl={3}>
                {/* From Date dropdown start */}
                <FormGroup tag={Col} xs={5}>
                  <Label className="text-dark font-weight-bold" for="fromDate">
                    From Date (Shipment)
                  </Label>
                  <CustomDatePicker value={fromDate} id="fromDate" name="fromDate" onChange={onFromDateChange} />
                </FormGroup>
                {/* From Date  dropdown end */}

                {/* End Date  dropdown start */}
                <FormGroup tag={Col} xs={5}>
                  <Label className="text-dark font-weight-bold" for="toDate">
                    To Date (Shipment)
                  </Label>
                  <CustomDatePicker value={toDate} id="toDate" name="toDate" onChange={onToDateChange} minDate={fromDate} />
                </FormGroup>
                {/* End Date  dropdown end */}


                {/* View dropdown start */}
                <FormGroup tag={Col} xs={2}>
                  <Button size="sm" color="primary" className="mt-2" onClick={onReportView} disabled={!toDate === null && !selectedStyle && !fromDate}>
                    View
                  </Button>
                </FormGroup>
                {/* View dropdown end */}
              </Col>


              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-2" onClick={onReportPrint} disabled={!toDate === null && !selectedStyle && !fromDate}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {selectedStyle && toDate && loading && isPoLoading ? (
        <div>
          {exportPoWithColorAndSizes?.buyerWiseList ? (
            <div>
              {/* Export PO Break Down With Color and Size */}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Buyer PO Break Down With Color and Size`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table bordered hover size="sm" className="custom-table">
                      {
                        exportPoWithColorAndSizes?.buyerWiseList?.map( bwl => (
                          <tbody key={uuid()}>
                            <tr>
                              <td colSpan={15} style={{ fontSize: 16, fontWeight: 'bold' }}>{`Buyer: ${bwl?.buyerName}`}</td>
                            </tr>
                            {
                              bwl?.styleWiseList?.map( swl => (
                                <Fragment key={uuid()}>
                                  <tr>
                                    <td colSpan={15} style={{ fontSize: 14, fontWeight: 700 }}>{`Style: ${swl.styleNo}`}</td>
                                  </tr>
                                  <tr>
                                    <th>Buyer PO</th>
                                    <th>Season</th>
                                    <th>Shipment Date</th>
                                    <th>Destination</th>
                                    <th>Color/Size</th>
                                    {
                                      swl.buyerPoWiseList[0]?.seasonWithList[0]?.shipmentWiseList[0]?.destinationWiseList[0]?.sizeList?.map( sizes => {
                                        return (
                                          <th className='text-center' key={uuid()}>{sizes.sizeName}</th>
                                        );
                                      } )
                                    }
                                    <th>Total</th>
                                  </tr>

                                  {
                                    swl.buyerPoWiseList?.map( ( bpwl ) => {
                                      return (
                                        <Fragment key={uuid()}>
                                          <tr>
                                            <td rowSpan={poRowSpan( bpwl )}>{bpwl.orderNumber}</td>
                                          </tr>
                                          {
                                            bpwl.seasonWithList?.map( season => (
                                              <Fragment key={uuid()}>
                                                <tr>
                                                  <td rowSpan={seasonRowSpan( season )}>{season.season}</td>
                                                </tr>
                                                {
                                                  season.shipmentWiseList?.map( shipment => (
                                                    <Fragment key={uuid()}>
                                                      <tr>
                                                        <td rowSpan={shipmentRowSpan( shipment )}>{formattedDate( shipment.shipmentDate )}</td>
                                                      </tr>
                                                      {
                                                        shipment.destinationWiseList?.map( destination => (
                                                          <Fragment key={uuid()}>
                                                            <tr>
                                                              <td rowSpan={destination.colorList.length + 2}>{destination.deliveryDestination}</td>
                                                            </tr>

                                                            {destination.colorList?.map( color => (
                                                              <tr key={uuid()}>
                                                                <td className="text-left">{color.colorName}</td>
                                                                {color?.sizeWiseList?.map( swl => (
                                                                  <td key={uuid()} className='text-center'>{swl.adjustedQuantity ? swl.adjustedQuantity : 0}</td>
                                                                ) )}
                                                                <td className='text-center'>{sumValue( color.sizeWiseList?.map( swl => swl.adjustedQuantity ) )}</td>
                                                              </tr>
                                                            ) )}
                                                            <tr className='font-weight-bold text-center'>
                                                              <th className='text-right'>Total</th>

                                                              {destination?.sizeList?.map( sizes => {
                                                                return (
                                                                  <th key={uuid()}>{poWiseSum( destination, sizes )}</th>
                                                                );
                                                              } )}
                                                              <th>{pwWiseGrandTotal( destination )}</th>
                                                            </tr>
                                                          </Fragment>
                                                        ) )
                                                      }
                                                    </Fragment>
                                                  ) )
                                                }
                                              </Fragment>
                                            ) )
                                          }
                                        </Fragment>
                                      );
                                    } )
                                  }
                                </Fragment>
                              ) )
                            }
                          </tbody>
                        ) )
                      }
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

export default ExportPoWithColorAndSize;
