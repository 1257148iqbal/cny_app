/*
  Title: PurchaseOrder
  Description: PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import { customSum } from '@utility/commonHelper';
import { notify } from '@utility/custom/notifications';
import { formattedDate } from '@utility/dateHelpers';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API } from '../../../../../services/api-end-points/merchandising/v1/purchaseOrderStyleAndItemWise';
import { decimalToWord } from '../../../../../utility/commonHelper';
import { fetchAllBuyersPurchaseOrderStyleAndItemWise, fetchAllPosStyleAndItemWiseByStyleId, fetchPurchaseOrderStyleAndItemWise, fetchPurchaseOrderStyleAndPoWise, fetchStyleByBuyerPurchaseOrderStyleAndItemWise } from '../store/actions';
import { BUYER_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE, LOADING, PURCHASE_ORDER_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, STYLE_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, STYLE_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE } from '../store/actionType';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;

const stylePoDDL = [
  { label: 'Style Wise', value: 'Style Wise' },
  { label: 'PO Wise', value: 'PO Wise' }
];

const PurchaseOrderStyleAndItemWise = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const { pos, poDDL, selectedPo, loading, selectedPoAndStyle, buyers, selectedBuyer, styles, selectedStyle, isStyleLoading, isPoLoading } = useSelector(
    ( { purchaseOrderStyleAndItemWiseReducer } ) => purchaseOrderStyleAndItemWiseReducer
  );
  //#endregion

  //#region state

  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyersPurchaseOrderStyleAndItemWise() );
    if ( selectedStyle?.length ) {
      const styleIds = selectedStyle?.map( item => item.value ).toString();
      dispatch( fetchAllPosStyleAndItemWiseByStyleId( styleIds ) );
    } else {
      dispatch( fetchAllPosStyleAndItemWiseByStyleId() );
    }
  }, [dispatch, selectedStyle] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data to print');
  // }


  //For Buyer Chnage
  const onBuyerChange = buyer => {
    if ( buyer ) {
      dispatch( { type: BUYER_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE, payload: buyer } );
      dispatch( fetchStyleByBuyerPurchaseOrderStyleAndItemWise( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE, payload: null } );
    }


  };

  //For Style Change
  const onStyleChange = style => {
    if ( style.length <= 7 ) {
      dispatch( { type: STYLE_CHANGE_PURCHASE_ORDER_STYLE_AND_ITEM_WISE, payload: style?.length ? style : null } );
    } else {
      notify( 'warning', "You can't select more than 7 styles" );
    }
  };

  const onSearchSupplierPO = useCallback(
    searchKey => {
      if ( selectedStyle?.length && searchKey?.length ) {
        const styleIds = selectedStyle?.map( item => item.value ).toString();
        dispatch( debounce( fetchAllPosStyleAndItemWiseByStyleId( styleIds, searchKey ), 500 ) );
      } else {
        dispatch( debounce( fetchAllPosStyleAndItemWiseByStyleId( null, searchKey ), 500 ) );
      }
    },
    [dispatch]
  );

  //For Status Chnage
  const onPOChange = po => {
    if ( po ) {
      dispatch( { type: PURCHASE_ORDER_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, payload: po } );
    } else {
      dispatch( { type: PURCHASE_ORDER_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, payload: null } );
    }
  };

  // For onStylePoChange
  const onStylePoChange = value => {
    if ( value ) {
      dispatch( { type: STYLE_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, payload: value } );
    } else {
      dispatch( { type: STYLE_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, payload: null } );
    }
  };

  // For Report View
  const onReportView = () => {
    if ( selectedPoAndStyle?.label === 'Style Wise' ) {
      dispatch( fetchPurchaseOrderStyleAndItemWise( selectedPo.id ) );
    } else {
      dispatch( fetchPurchaseOrderStyleAndPoWise( selectedPo.id ) );
    }
    dispatch( { type: LOADING, payload: true } );
  };

  //Clear Dropdown
  const onClear = () => {
    dispatch( { type: PURCHASE_ORDER_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, payload: null } );
    dispatch( { type: STYLE_CHANGE_PO_SO_STYLE_AND_ITEM_WISE, payload: null } );
  };

  // For Report Print
  const onReportPrint = () => {
    let url = "";
    if ( selectedPoAndStyle?.label === 'Style Wise' ) {
      url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API.fetch_po_style_by_so_id_rdlc( selectedPo.id )}`;
    } else {
      url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${PURCHASE_ORDER_STYLE_AND_ITEM_WIESE_API.fetch_po_style_and_po_wise_by_so_id_rdlc( selectedPo.id )}`;
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
      <ActionMenu title="Purchase Order Style & PO Wise" moreButton={false} breadcrumb={breadcrumb}>
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
                  isSearchable
                  isLoading={isStyleLoading}
                  isClearable
                  isMulti
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

              {/* Purchase Order No dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="style">
                  Supplier PO No
                </Label>
                <Select
                  id="orderNo"
                  isSearchable
                  isLoading={!selectedPo}
                  isClearable
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={poDDL}
                  value={selectedPo}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onPOChange}
                  onInputChange={onSearchSupplierPO}
                />
              </FormGroup>
              {/* Purchase Order No dropdown end */}

              {/* Style/Po Wise dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Label className="text-dark font-weight-bold" for="styleAndPo">
                  Style/Po Wise
                </Label>
                <Select
                  id="styleAndPo"
                  isSearchable
                  isLoading={!selectedPo}
                  isDisabled={!selectedPo}
                  isClearable
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={stylePoDDL}
                  value={selectedPoAndStyle}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onStylePoChange}
                />
              </FormGroup>
              {/* Style/Po Wise dropdown end */}

              {/* View Button start */}
              <FormGroup tag={Col} xs={3} sm={2} md={2} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-2" onClick={onReportView} disabled={!selectedPoAndStyle}>
                  View
                </Button>
              </FormGroup>
              {/* View Button end */}

              {/* Clear Button start */}
              <FormGroup tag={Col} xs={3} sm={2} md={2} lg={1} xl={1}>
                <Button size="sm" color="danger" className="mt-2" onClick={onClear}>
                  Clear
                </Button>
              </FormGroup>
              {/* Clear Button end */}

              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={2} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-2" onClick={onReportPrint} disabled={!selectedPo}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {selectedPoAndStyle && loading ? (
        <div className="custom-report-form">
          {pos?.orderNumber ? (
            <div>
              {/*Master Info*/}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1 ml-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1 pl-0">
                    <Badge color="primary">{`Purchase Order`}</Badge>
                  </FormGroup>
                  <Row className="border border-secondary p-1" tag={Col} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div className="custom-form-main">
                        <Label className="custom-form-label" for="requisitionId">
                          Supplier Info :
                        </Label>
                      </div>
                      <div className="custom-form-main h4">{pos?.name}</div>
                      <div className="custom-form-main h4">{pos?.vendorContactName}</div>
                      {/* <div className="custom-form-main h5">{pos?.shortName}</div> */}
                      <div className="custom-form-main h5">{pos?.fullAddress}</div>
                      <div className="custom-form-main h5">{`Mobile: ${pos?.mobileNumber}`}</div>
                      <div className="custom-form-main h5">{`Phone: ${pos?.phoneNumber}`}</div>
                      <div className="custom-form-main h5">{`Email: ${pos?.email}`}</div>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Row>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="orderNo">
                            Order. No
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{pos?.orderNumber}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="poDate">
                            PO Date
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{formattedDate( pos?.orderDate )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="shipmentDate">
                            Shipment Date
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{formattedDate( pos?.receiveDate )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="buyer">
                            Buyer
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{pos?.buyerName}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="style">
                            Style
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{[...new Set( pos?.styleList?.map( i => `${i.styleNumber}, ` ) )]}</div>
                        </div>
                        {selectedPoAndStyle.value === 'Style Wise' ? (
                          <div className="custom-form-main">
                            <Label className="custom-form-label " for="exportPo">
                              Export PO
                            </Label>
                            <Label className="custom-form-colons "> : </Label>
                            <div className="custom-form-group ">
                              {[...new Set( pos?.styleList?.map( sl => sl.itemList?.map( i => `${i.buyerPONumber}, ` ) ).flat( 2 ) )]}
                            </div>
                          </div>
                        ) : (
                          <div className="custom-form-main">
                            <Label className="custom-form-label " for="exportPo">
                              Export PO
                            </Label>
                            <Label className="custom-form-colons "> : </Label>
                            <div className="custom-form-group ">
                              {[...new Set( pos?.styleList?.map( sl => sl.poList?.map( i => `${i.buyerPONumber}, ` ) ).flat( 2 ) )]}
                            </div>
                          </div>
                        )}
                      </Row>
                    </Col>
                  </Row>
                </Row>

                <Row className="pt-2 pr-3 pl-3 pb-1 ml-1" >
                  <Row className="border border-secondary p-1" tag={Col} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>

                      <div>
                        <div className="h4">{`Consignee (If Other than the buyer):`}</div>
                        <div className="h5">{pos.consignee ? pos?.consignee : ''}</div>
                      </div>

                      <div className="custom-form-main h4">{`Means of Transport: ${pos?.shipmentMode}`}</div>
                      <div className="custom-form-main h5">{`We, as Buyer , confirm having bought from the supplier named on the above following goods on terms and conditions set forth hereunder`}</div>

                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Row>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="id">
                            Delivery Point :
                          </Label>
                        </div>
                        <div className="custom-form-main h4">{pos?.wareHouseName}</div>
                        <div className="custom-form-main h5">{pos?.wareHouseAddress}</div>
                        <div className="custom-form-main h5">{`${pos?.wareHouseState}, ${pos?.wareHouseCountry}`}</div>
                      </Row>
                    </Col>
                  </Row>
                </Row>

                {/* Item and Style Description */}

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Item and Style Description`}</Badge>
                  </FormGroup>
                  {selectedPoAndStyle.value === 'Style Wise' ? (
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Table responsive bordered hover size="sm" className="custom-table">
                        <thead className={`text-center table-bordered`}>
                          <tr>
                            <th>SL NO</th>
                            <th>Style No</th>
                            <th>Item Group</th>
                            <th>Item Sub Group</th>
                            <th>Item Description</th>
                            <th>UOM</th>
                            <th>Order Qty</th>
                            <th>Unit Price (US Dollar)</th>
                            <th>Amount</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>

                        <tbody>
                          {pos?.styleList?.map( ( d, index ) => {
                            return (
                              <Fragment key={uuid()}>
                                <tr>
                                  <td rowSpan={d.itemList?.length + 1}>{index + 1}</td>
                                  <td rowSpan={d.itemList?.length + 1}>{d?.styleNumber}</td>
                                </tr>

                                {d?.itemList?.map( il => (
                                  <tr key={uuid()}>
                                    <td>{il?.itemGroupName}</td>
                                    <td>{il?.itemSubGroupName}</td>
                                    <td>{il?.itemName}</td>
                                    <td>{il?.orderUom}</td>
                                    <td className="text-right">{il?.orderQuantity}</td>
                                    <td className="text-right">{il?.orderRate}</td>
                                    <td className="text-right">{il?.amount}</td>
                                    <td>{il?.remarks}</td>
                                  </tr>
                                ) )}
                                <tr className="font-weight-bold text-right">
                                  <td colSpan={6}>Total</td>
                                  <td>{customSum( d?.itemList?.map( item => Number( item.orderQuantity ) ) ).toFixed( 4 )}</td>
                                  <td></td>
                                  <td>{customSum( d?.itemList?.map( item => Number( item.amount ) ) ).toFixed( 4 )}</td>
                                  <td></td>
                                </tr>
                              </Fragment>
                            );
                          } )}
                          <tr className="font-weight-bold text-right">
                            <td className='text-left' colSpan={5}>US Dollar : {decimalToWord( Number( customSum( pos?.styleList?.map( item => item.itemList?.map( il => Number( il.amount ) ) ).flat( 2 ) ).toFixed( 4 ) ) )} Only</td>
                            <td >Grand Total</td>
                            <td>{customSum( pos?.styleList?.map( item => item.itemList?.map( il => Number( il.orderQuantity ) ) ).flat( 2 ) ).toFixed( 4 )}</td>
                            <td></td>
                            <td>{customSum( pos?.styleList?.map( item => item.itemList?.map( il => Number( il.amount ) ) ).flat( 2 ) ).toFixed( 4 )}</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  ) : (
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Table responsive bordered hover size="sm" className="custom-table">
                        <thead className={`text-center table-bordered`}>
                          <tr>
                            <th>PO No</th>
                            <th>Item Group</th>
                            <th>Item Sub Group</th>
                            <th>Item Description</th>
                            <th>UOM</th>
                            <th>Order Qty</th>
                            <th>Unit Price (US Dollar)</th>
                            <th>Amount</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>

                        <tbody>
                          {pos?.styleList?.map( d => {
                            return (
                              <Fragment key={uuid()}>
                                <tr>
                                  <td colSpan={7} className="font-weight-bold">{`Style No : ${d?.styleNumber}`}</td>
                                </tr>
                                {d?.poList?.map( pl => (
                                  <Fragment key={uuid()}>
                                    <tr>
                                      <td rowSpan={pl?.itemList?.length + 1}>{pl?.buyerPONumber}</td>
                                    </tr>
                                    {pl?.itemList?.map( il => (
                                      <tr key={uuid()}>
                                        <td>{il?.itemGroupName}</td>
                                        <td>{il?.itemSubGroupName}</td>
                                        <td>{il?.itemName}</td>
                                        <td>{il?.orderUom}</td>
                                        <td className="text-right">{il?.orderQuantity}</td>
                                        <td className="text-right">{il?.orderRate}</td>
                                        <td className="text-right">{il?.amount}</td>
                                        <td>{il?.remarks}</td>
                                      </tr>
                                    ) )}
                                  </Fragment>
                                ) )}
                              </Fragment>
                            );
                          } )}

                          <tr className="font-weight-bold text-right">
                            <td colSpan={5}>Grand Total</td>
                            <td>
                              {customSum(
                                pos?.styleList?.map( sl => sl.poList?.map( item => item.itemList?.map( il => Number( il.orderQuantity ) ) ) ).flat( 3 )
                              ).toFixed( 4 )}
                            </td>
                            <td></td>
                            <td>
                              {customSum(
                                pos?.styleList?.map( sl => sl.poList?.map( item => item.itemList?.map( il => Number( il.amount ) ) ) ).flat( 3 )
                              ).toFixed( 4 )}
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  )}
                </Row>


                {/*Remarks*/}

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="custom-form-main border  p-1">
                      <Label className="custom-form-label" for="styleNo">
                        Trade Terms : {pos?.shippingTerm}
                      </Label>
                    </div>
                    <div className="border p-1" style={{ height: '130px' }}>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyer">
                          Confirm by the Supplier
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyer">
                          Signature
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyer">
                          Name
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                      </div>
                      <div className="custom-form-main">
                        <Label className="custom-form-label " for="buyer">
                          Date
                        </Label>
                        <Label className="custom-form-colons "> : </Label>
                      </div>
                    </div>
                  </Col>

                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="custom-form-main border p-1">
                      <Label className="custom-form-label" for="styleNo">
                        Payment Source: {pos?.source}
                      </Label>
                    </div>
                    <div className="border p-1" style={{ height: '130px' }}>
                      <div className="d-flex justify-content-around mt-5">
                        <div className='mt-2' style={{ borderTop: '2px solid' }}>{'Authorized Person'}</div>
                        <div className='mt-2' style={{ borderTop: '2px solid' }}>{'Company Seal'}</div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <Col xs={12} className="mb-0">
                    <div className="border p-1" style={{ height: '100px' }}>
                      <div className="pb-1">{'Terms & Conditions :'}</div>
                    </div>
                  </Col>
                  <Col xs={12} className="mb-0">
                    <div className="border p-1" style={{ height: '50px' }}>
                      <div className="pb-1">{'Remarks :'}</div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="border p-1" style={{ height: '70px' }}>
                      <div className="pb-1">{'Prepared By : '}</div>
                      <div className="pb-1">{'Approved By :'}</div>
                    </div>
                  </Col>
                </Row>

              </Card>

              <Card className="pt-2 pr-3 pl-3 pb-1 ml-1">
                <Row className="mb-0">
                  <Col xs={12}>
                    <Row className="d-flex justify-content-between">
                      <div>
                        <Label className="h5">Report Generated On :</Label>
                        <span>{` ${pos?.reportGeneratedOn ? pos?.reportGeneratedOn : ''}`}</span>
                      </div>
                      <div>
                        <Label className="h5">User: </Label>
                        <span>{` ${pos?.user ? pos?.user : ""}`}</span>
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

export default PurchaseOrderStyleAndItemWise;
