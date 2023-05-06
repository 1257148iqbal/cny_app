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
import { Fragment, useEffect } from 'react';
import { ChevronRight, ChevronsDown, Loader } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, Collapse, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { MATERIAL_STATUS_STYLE_AND_PO_WISE_API } from '../../../../../services/api-end-points/merchandising/v1/materialStatusStyleAndPoWise';
import {
  fetchAllBuyersMaterialStatus,
  fetchMaterialStatusStyleAndPoItemDetails,
  fetchMaterialStatusStyleAndPoWise,
  fetchPurchaseOrdersByStyleMaterialStatus,
  fetchStyleByBuyerMaterialStatus
} from '../store/actions';
import {
  BUYER_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE,
  LOADING,
  PURCHASE_ORDER_CHANGE_MATERIAL_STATUS,
  STYLE_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE
} from '../store/actionType';
import classes from '../style/materialStatus.module.scss';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;

const MaterialStatusStyleAndPoWise = () => {

  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  //#endregion

  const {
    loading,
    buyers,
    selectedBuyer,
    styles,
    selectedStyle,
    pos,
    selectedPos,
    isPosLoading,
    isStyleLoading,
    materailStatusStyleAndPoWise,
    isLoadingMaterialStatus
  } = useSelector( ( { materialStatusStyleAndPOWiseReducer } ) => materialStatusStyleAndPOWiseReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyersMaterialStatus() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data');
  // }

  //For Buyer Chnage
  const onBuyerChange = buyer => {
    if ( buyer ) {
      dispatch( { type: BUYER_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE, payload: buyer } );
      dispatch( fetchStyleByBuyerMaterialStatus( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE, payload: null } );
    }
  };

  //For Style Change
  const onStyleChange = style => {
    if ( style ) {
      dispatch( { type: STYLE_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE, payload: style } );
      dispatch( fetchPurchaseOrdersByStyleMaterialStatus( style.value ) );
    } else {
      dispatch( { type: STYLE_CHANGE_MATERIAL_STATUS_STYLE_AND_PO_WISE, payload: null } );
    }
  };

  //For Style Change
  const onBuyerPOChange = value => {
    if ( value?.length ) {
      dispatch( { type: PURCHASE_ORDER_CHANGE_MATERIAL_STATUS, payload: value } );
    } else {
      dispatch( { type: PURCHASE_ORDER_CHANGE_MATERIAL_STATUS, payload: null } );
    }
  };

  // For Click Item Details

  const onItemDetailsFetch = ( itemCategoryId, index ) => {
    const orderIds = selectedPos?.map( oi => oi.id ).toString();
    if ( selectedPos ) {
      dispatch( fetchMaterialStatusStyleAndPoItemDetails( selectedStyle.id, itemCategoryId, index, orderIds ) );
    } else {
      dispatch( fetchMaterialStatusStyleAndPoItemDetails( selectedStyle.id, itemCategoryId, index ) );
    }

  };

  // For Report View
  const onReportView = () => {
    const orderIds = selectedPos?.map( oi => oi.id ).toString();
    if ( selectedPos ) {
      dispatch( fetchMaterialStatusStyleAndPoWise( selectedStyle.id, orderIds ) );
    } else {
      dispatch( fetchMaterialStatusStyleAndPoWise( selectedStyle.id ) );
    }
    dispatch( { type: LOADING, payload: true } );
  };

  // For Report Print
  const onReportPrint = () => {
    const orderIds = selectedPos?.map( oi => oi.id ).toString();
    let url = "";
    if ( selectedPos.length ) {
      url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_material_status_style_po_wise_rdlc( selectedStyle.id, orderIds )}`;
    } else {
      const poIds = pos?.map( oi => oi.id ).toString();
      url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${MATERIAL_STATUS_STYLE_AND_PO_WISE_API.fetch_material_status_style_po_wise_rdlc( selectedStyle.id, poIds )}`;
    }
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
      <ActionMenu title="Material Status: Style And Po Wise" moreButton={false} breadcrumb={breadcrumb}>
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
                  isClearable
                  isLoading={!selectedBuyer}
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="style">
                  Styles
                </Label>
                <Select
                  id="style"
                  isClearable
                  isSearchable
                  isLoading={isStyleLoading}
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={styles}
                  value={selectedStyle}
                  onChange={onStyleChange}
                  isDisabled={!selectedBuyer}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                />
              </FormGroup>
              {/* style dropdown end */}

              {/* BuyerPO dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={6} lg={5} xl={5}>
                <Label className="text-dark font-weight-bold" for="buyerPo">
                  Buyer PO
                </Label>
                <Select
                  id="buyerPo"
                  isClearable
                  isSearchable
                  isLoading={isPosLoading}
                  isMulti
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={pos}
                  value={selectedPos}
                  onChange={onBuyerPOChange}
                  isDisabled={!selectedStyle}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                />
              </FormGroup>
              {/* BuyerPO dropdown end */}

              {/* View dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-2" onClick={onReportView} disabled={!selectedStyle}>
                  View
                </Button>
              </FormGroup>
              {/* View dropdown end */}

              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-2" onClick={onReportPrint} disabled={!selectedStyle}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {selectedStyle && loading && isLoadingMaterialStatus ? (
        <div>
          {materailStatusStyleAndPoWise.length ? (
            <div>
              <Card className="mb-1 pt-2 pr-3 pl-3">
                {/* Costing Summary & Breakdown */}

                <Row className="pt-2 pb-2">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 p-0">
                    <Badge color="primary">{`Material Status: Style And Po Wise`}</Badge>
                  </FormGroup>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive className={`${classes.mainTable} custom-table`} size="sm" bordered={true}>
                      <thead className={`text-center table-bordered ${classes.stickyTableHead}`}>
                        <tr>
                          <th></th>
                          <th style={{ minWidth: '130px' }}>Item Group</th>
                          <th style={{ minWidth: '130px' }}>Required Qty</th>
                          <th style={{ minWidth: '130px' }}>UOM</th>
                          <th style={{ minWidth: '130px' }}>Booked Qty</th>
                          <th style={{ minWidth: '130px' }}>Balance</th>
                        </tr>
                      </thead>
                      <tbody className={`text-right`}>
                        {materailStatusStyleAndPoWise?.map( ( po, index ) => (
                          <Fragment key={uuid()}>
                            <tr>
                              <td style={{ width: '4px' }}>
                                <Button
                                  for="collapseId"
                                  tag={Label}
                                  onClick={() => onItemDetailsFetch( po.itemCategoryId, index )}
                                  className="btn-sm"
                                  color="flat-primary"
                                >
                                  {po.isLoading ? (
                                    <Loader size={15} color="#57C69D" />
                                  ) : po.isOpen ? (
                                    <ChevronsDown size={15} color="#57C69D" />
                                  ) : (
                                    <ChevronRight id="collapseId" size={15} color="#7367f0" />
                                  )}
                                </Button>
                              </td>
                              <td className="text-left">{po.groupName}</td>
                              <td>{po.bomQuantity.toFixed( 4 )}</td>
                              <td className="text-center">{po.bomUom}</td>
                              <td>{po.supplierOrderQuantity.toFixed( 4 )}</td>
                              <td>{po.spidQuantity.toFixed( 4 )}</td>
                            </tr>
                            <tr>
                              <td colSpan={10} style={{ padding: '2px 10px !important', backgroundColor: '#fff' }}>
                                <Collapse isOpen={po.isOpen}>
                                  <Table className={classes.childTable}>
                                    <thead className="thead-light table-bordered">
                                      <tr className="text-center">
                                        <th>Item Description</th>
                                        <th>Required Qty</th>
                                        <th>UOM</th>
                                        <th>Booked Qty</th>
                                        <th>Balance</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {po.itemDetails?.map( item => (
                                        <tr key={uuid()} className="text-right">
                                          <td className="text-left">{item.itemDescription}</td>
                                          <td>{item.bomQuantity.toFixed( 4 )}</td>
                                          <td className="text-center">{item.bomUom}</td>
                                          <td>{item.supplierOrderQuantity.toFixed( 4 )}</td>
                                          <td>{item.spidQuantity.toFixed( 4 )}</td>
                                        </tr>
                                      ) )}
                                    </tbody>
                                  </Table>
                                </Collapse>
                              </td>
                            </tr>
                          </Fragment>
                        ) )}
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

export default MaterialStatusStyleAndPoWise;
