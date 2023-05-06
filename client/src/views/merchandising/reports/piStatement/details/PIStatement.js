/*
  Title: PurchaseOrder
  Description: PurchaseOrder
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import SpinnerComponent from '@core/components/spinner/Fallback-spinner';
import '@custom-styles/reporting/reporting-core.scss';
import { formattedDate } from '@utility/dateHelpers';
import { selectThemeColors } from '@utility/Utils';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, Row, Table } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { PI_STATEMENT_API } from '../../../../../services/api-end-points/merchandising/v1/piStatement';
import { customSum, decimalToWord } from '../../../../../utility/commonHelper';
import { fetchAllPosPIStatement, fetchAllSupplierPI, fetchSupplierPIDetailsById } from '../store/actions';
import { LOADING, PURCHASE_ORDER_CHANGE_PO_SO_PI_STATEMENT, SUPPLIER_PI_STATEMENT_CHANGE_PI_STATEMENT } from '../store/actionType';
const { REACT_APP_MERCHANDISING_REPORT_BASE_URL } = process.env;

const PIStatement = () => {
  //#region hooks
  // const history = useHistory();
  const dispatch = useDispatch();
  const { ipiStatement, poDDL, selectedPo, supplierPIDDL, selectedSupplierPI, loading } = useSelector( ( { piStatementReducer } ) => piStatementReducer );
  //#endregion

  //#region state

  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchAllPosPIStatement() );
    if ( !selectedPo?.id ) {
      dispatch( fetchAllSupplierPI() );
    } else {
      dispatch( fetchAllSupplierPI( selectedPo.id ) );
    }
  }, [dispatch, selectedPo] );
  //#endregion

  //#region Evets
  // function hanldePrint() {
  //   notify('warning', 'There have no data to print');
  // }

  //For Status Chnage
  const onPOChange = po => {
    dispatch( { type: PURCHASE_ORDER_CHANGE_PO_SO_PI_STATEMENT, payload: po } );
  };

  //For Status Chnage
  const onPIStatementChange = ipi => {
    dispatch( { type: SUPPLIER_PI_STATEMENT_CHANGE_PI_STATEMENT, payload: ipi } );
  };

  // For Search Supplier IPI

  const onSearchSupplierIPI = useCallback(
    searchKey => {
      if ( searchKey?.length ) {
        dispatch( debounce( fetchAllSupplierPI( null, searchKey ), 500 ) );
      } else {
        dispatch( debounce( fetchAllSupplierPI( selectedPo?.id ), 500 ) );
      }
    },
    [dispatch]
  );

  //Total PI Values
  const totalPiValues = () => {
    const itemValues = customSum( ipiStatement?.list?.map( li => li.amount ) );
    return ( itemValues + ipiStatement?.serviceCharge + ipiStatement?.additionalCharge - ipiStatement?.deductionAmount ).toFixed( 6 );
  };

  // For Report View
  const onReportView = () => {
    dispatch( fetchSupplierPIDetailsById( selectedSupplierPI.value ) );
    dispatch( { type: LOADING, payload: true } );
  };

  //Clear Dropdown
  const onClear = () => {
    dispatch( { type: PURCHASE_ORDER_CHANGE_PO_SO_PI_STATEMENT, payload: null } );
  };

  // For Report Print
  const onReportPrint = () => {
    const url = `${REACT_APP_MERCHANDISING_REPORT_BASE_URL}/${PI_STATEMENT_API.fetch_supplier_pi_details_by_sp_id_rdlc( selectedSupplierPI.value )}`;
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
      <ActionMenu title="IPI Statement" moreButton={false} breadcrumb={breadcrumb}>
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

              {/* Purchase Order No dropdown start */}
              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="style">
                  Purchase Order No
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
                />
              </FormGroup>
              {/* Purchase Order No dropdown end */}

              {/* supplierIPI dropdown start */}

              <FormGroup tag={Col} xs={12} sm={6} md={4} lg={3} xl={3}>
                <Label className="text-dark font-weight-bold" for="supplierIPI">
                  Supplier IPI
                </Label>
                <CreatableSelect
                  id="supplierIPI"
                  bsSize="sm"
                  theme={selectThemeColors}
                  options={supplierPIDDL}
                  value={selectedSupplierPI}
                  isLoading={!selectedSupplierPI}
                  classNamePrefix="dropdown"
                  className={classNames( 'erp-dropdown-select' )}
                  onChange={onPIStatementChange}
                  onInputChange={onSearchSupplierIPI}
                />
              </FormGroup>
              {/* SsupplierIPI Wise dropdown end */}

              {/* View Button start */}
              <FormGroup tag={Col} xs={12} sm={2} md={2} lg={1} xl={1}>
                <Button size="sm" color="primary" className="mt-2" onClick={onReportView} disabled={!selectedSupplierPI}>
                  View
                </Button>
              </FormGroup>
              {/* View Button end */}

              {/* Clear Button start */}
              <FormGroup tag={Col} xs={12} sm={2} md={2} lg={1} xl={1}>
                <Button size="sm" color="danger" className="mt-2" onClick={onClear}>
                  Clear
                </Button>
              </FormGroup>
              {/* Clear Button end */}


              {/* Print Report start */}
              <FormGroup tag={Col} xs={12} sm={2} md={2} lg={1} xl={1}>
                <Button size="sm" color="warning" className="mt-2" onClick={onReportPrint} disabled={!selectedSupplierPI}>
                  Report
                </Button>
              </FormGroup>
              {/* Print Report end */}
            </Row>
          </Col>
        </Row>
      </Card>

      {loading && selectedSupplierPI ? (
        <div className="custom-report-form">
          {ipiStatement?.piNumber ? (
            <div>
              {/*Master Info*/}
              <Card>
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Master Info`}</Badge>
                  </FormGroup>
                  <Row className="p-1" tag={Col} xs={12} sm={12} md={12} lg={12} xl={12}>

                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                      <Row>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="piNumber">
                            IPI No
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{ipiStatement?.piNumber}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="piDate">
                            IPI Date
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{formattedDate( ipiStatement?.piDate )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="supplierName">
                            Supplier
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.supplierName}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="purchaser">
                            Purchaser
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.purchaser}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="purpose">
                            Purpose
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{ipiStatement?.purpose}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="Buyer">
                            Buyer
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.buyerName}</div>
                        </div>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                      <Row>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="currencyCode">
                            Currency
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{ipiStatement?.currencyCode}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="itemsValue">
                            Items Value
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{customSum( ipiStatement?.list?.map( li => li.amount ) ).toFixed( 6 )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="serviceCharge">
                            Service Charge
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.serviceCharge.toFixed( 6 )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="additionalCharge">
                            Additional Charge
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.additionalCharge.toFixed( 6 )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="deductionAmount">
                            Deduction Amount
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.deductionAmount.toFixed( 6 )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="piValue">
                            PI Value
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{totalPiValues()}</div>
                        </div>
                      </Row>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                      <Row>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="tradeTerm">
                            Trade Term
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{ipiStatement?.tradeTerm}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label" for="shipmentMode">
                            Shipment Mode
                          </Label>
                          <Label className="custom-form-colons"> : </Label>
                          <div className="custom-form-group">{ipiStatement?.shipmentMode}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="shipmentDate">
                            Shipment Date
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="custom-form-group ">{formattedDate( ipiStatement?.shipmentDate )}</div>
                        </div>
                        <div className="custom-form-main">
                          <Label className="custom-form-label " for="ipoNo">
                            IPO No
                          </Label>
                          <Label className="custom-form-colons "> : </Label>
                          <div className="d-flex flex-wrap">{ipiStatement?.ipoList?.map( item => ( <ul key={uuid()} className='pl-1 ml-1'><li>{item.orderNumber}</li></ul> ) )}</div>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Row>

                {/* IPO Wise Amount */}
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`IPO Number`}</Badge>
                  </FormGroup>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table w-50">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>IPO No</th>
                          <th>Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        {ipiStatement?.ipoList?.map( il => {
                          return (
                            <tr key={uuid()}>
                              <td>{il?.orderNumber}</td>
                              <td className="text-right">{il?.supplierOrderAmount.toFixed( 6 )}</td>
                            </tr>
                          );
                        } )}
                        <tr className='font-weight-bold'>
                          <td className='text-left'>Total</td>
                          <td className='text-right' colSpan={4}>{customSum( ipiStatement?.ipoList?.map( item => Number( item.supplierOrderAmount ) ) ).toFixed( 6 )}</td>
                        </tr>
                        <tr className='font-weight-bold'>
                          <td className='text-left' colSpan={2}>{`In Word (${ipiStatement?.currencyCode}) : ${decimalToWord( Number( customSum( ipiStatement?.ipoList?.map( item => Number( item.supplierOrderAmount ) ) ).toFixed( 6 ) ) )}`} Only</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                {/* IPO Wise Amount */}

                {/* Item Description */}
                <Row className="pt-2 pr-3 pl-3 pb-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
                    <Badge color="primary">{`Item Description`}</Badge>
                  </FormGroup>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Table responsive bordered hover size="sm" className="custom-table">
                      <thead className={`text-center table-bordered`}>
                        <tr>
                          <th>Item Group</th>
                          <th>Item Sub-Group</th>
                          <th>Item Code</th>
                          <th>Item Description</th>
                          <th>UOM</th>
                          <th>Quantity</th>
                          <th>Rate</th>
                          <th>Amount</th>
                        </tr>
                      </thead>

                      <tbody>
                        {ipiStatement?.list?.map( il => {
                          return (
                            <tr key={uuid()}>
                              <td>{il?.itemCategoryName}</td>
                              <td>{il?.itemSubCategoryName}</td>
                              <td>{il?.itemCode}</td>
                              <td>{il?.itemName}</td>
                              <td>{il?.orderUom}</td>
                              <td className="text-right">{il?.orderQuantity}</td>
                              <td className="text-right">{il?.orderRate}</td>
                              <td className="text-right">{il?.amount.toFixed( 6 )}</td>
                            </tr>
                          );
                        } )}
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

export default PIStatement;
