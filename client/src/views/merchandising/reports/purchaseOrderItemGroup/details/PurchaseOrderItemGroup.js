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
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { decimalToWord } from '../../../../../utility/commonHelper';
import { fetchAllBuyersPOItemGroup, fetchAllPosItemGroup, fetchPurchaseOrderItemGroup, fetchStyleByBuyerPOItemGroup } from '../store/actions';
import { BUYER_CHANGE_PURCHASE_ORDER_ITEM_GROUP, LOADING, PURCHASE_ORDER_CHANGE_PO_SO_ITEM_GROUP, STYLE_CHANGE_PURCHASE_ORDER_ITEM_GROUP } from '../store/actionType';

const PurchaseOrderItemGroup = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const { pos, poDDL, selectedPo, loading, buyers, selectedBuyer, styles, selectedStyle, isStyleLoading, isPoLoading } = useSelector( ( { purchaseOrderItemGroupReducer } ) => purchaseOrderItemGroupReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllBuyersPOItemGroup() );
    if ( selectedStyle?.length ) {
      const styleIds = selectedStyle?.map( item => item.value ).toString();
      dispatch( fetchAllPosItemGroup( styleIds ) );
    } else {
      dispatch( fetchAllPosItemGroup() );
    }
  }, [dispatch] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data to print');
  // }

  //For Buyer Chnage
  const onBuyerChange = buyer => {
    if ( buyer ) {
      dispatch( { type: BUYER_CHANGE_PURCHASE_ORDER_ITEM_GROUP, payload: buyer } );
      dispatch( fetchStyleByBuyerPOItemGroup( buyer.buyerId ) );
    } else {
      dispatch( { type: BUYER_CHANGE_PURCHASE_ORDER_ITEM_GROUP, payload: null } );
    }


  };

  //For Style Change
  const onStyleChange = style => {
    if ( style.length <= 7 ) {
      dispatch( { type: STYLE_CHANGE_PURCHASE_ORDER_ITEM_GROUP, payload: style?.length ? style : null } );
    } else {
      notify( 'warning', "You can't select more than 7 styles" );
    }
  };

  //For Status Chnage
  const onPOChange = po => {
    dispatch( { type: PURCHASE_ORDER_CHANGE_PO_SO_ITEM_GROUP, payload: po } );
  };

  const onSearchSupplierPO = useCallback(
    searchKey => {
      if ( selectedStyle?.length && searchKey?.length ) {
        const styleIds = selectedStyle?.map( item => item.value ).toString();
        dispatch( debounce( fetchAllPosItemGroup( styleIds, searchKey ), 500 ) );
      } else {
        dispatch( debounce( fetchAllPosItemGroup( null, searchKey ), 500 ) );
      }
    },
    [dispatch]
  );

  // For Report View
  const onReportView = () => {
    dispatch( fetchPurchaseOrderItemGroup( selectedPo.id ) );
    dispatch( { type: LOADING, payload: true } );
  };

  //Clear Dropdown
  const onClear = () => {
    dispatch( { type: BUYER_CHANGE_PURCHASE_ORDER_ITEM_GROUP, payload: null } );
    dispatch( { type: STYLE_CHANGE_PURCHASE_ORDER_ITEM_GROUP, payload: null } );
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
      <ActionMenu title="Purchase Order Item Group" moreButton={false} breadcrumb={breadcrumb}>
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
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
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
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
                  id="buyer"
                  isSearchable
                  isLoading={isPoLoading && !selectedPo}
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

              {/* View Button start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-2" onClick={onReportView} disabled={!selectedPo}>
                  View
                </Button>
              </FormGroup>
              {/* View Button end */}

              {/* Clear Button start */}
              <FormGroup tag={Col} xs={6} sm={3} md={2} lg={1} xl={1}>
                <Button size="sm" color="danger" className="mt-2" onClick={onClear}>
                  Clear
                </Button>
              </FormGroup>
              {/* Clear Button end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {selectedPo && loading ? (
        <div className="custom-report-form">
          {pos?.orderNumber ? (
            <div>
              {/*Master Info*/}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1 ml-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1 ml-0">
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
                      <div className="custom-form-main h5">{pos?.vendorContactName}</div>
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
                          <div className="custom-form-group d-flex flex-wrap">{[...new Set( pos?.styleList?.map( i => <ul key={uuid()} className='pl-1 ml-1'><li>{i.styleNumber}</li></ul> ) )]}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="exportPo">
                            Buyer PO
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="d-flex flex-wrap">{[...new Set( pos?.buyerPoList?.map( i => <ul key={uuid()} className='pl-1 ml-1'><li>{i.buyerPONumber}</li></ul> ) )]}</div>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Row>

                <Row className="pt-2 pr-3 pl-3 pb-1 ml-1">
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

                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>SL NO</th>
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
                        {pos?.itemList?.map( ( d, index ) => {
                          return (
                            <tr key={uuid()}>
                              <td>{index + 1}</td>
                              <td>{d?.itemGroupName}</td>
                              <td>{d?.itemSubGroupName}</td>
                              <td>{d?.itemName}</td>
                              <td>{d?.orderUom}</td>
                              <td className="text-right">{d?.orderQuantity}</td>
                              <td className="text-right">{d?.orderRate}</td>
                              <td className="text-right">{d?.amount}</td>
                              <td>{d?.remarks}</td>
                            </tr>
                          );
                        } )}
                        <tr className="font-weight-bold text-right">
                          <td className='text-left' colSpan={4}>US Dollar : {decimalToWord( Number( customSum( pos?.itemList?.map( item => Number( item.amount ) ) ).toFixed( 4 ) ) )} Only</td>

                          <td>Total</td>
                          <td>{customSum( pos?.itemList?.map( item => Number( item.orderQuantity ) ) ).toFixed( 4 )}</td>
                          <td></td>
                          <td>{customSum( pos?.itemList?.map( item => Number( item.amount ) ) ).toFixed( 4 )}</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
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

export default PurchaseOrderItemGroup;
