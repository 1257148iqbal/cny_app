/*
  Title: MaterialRequirementByPoDetails
  Description: MaterialRequirementByPoDetails
  Author: Iqbal Hossain
  Date: 17-August-2022
  Modified: 17-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchMaterialRequirementByPoDetails } from '../store/actions';

const MaterialRequirementByPoDetails = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { materialRequirementByPoDetailsReducer } ) => materialRequirementByPoDetailsReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchMaterialRequirementByPoDetails() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  function hanldePrint() {
    notify( 'warning', 'There have no data' );
  }

  const handleCancel = () => {
    history.goBack();
  };

  const grandTotal = array => {
    return array?.reduce( ( acc, curr ) => {
      return ( acc += curr );
    }, 0 );
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
      <ActionMenu title="Material Requirement By PO Details" moreButton={false} breadcrumb={breadcrumb}>
        <NavItem className="mr-1">
          <NavLink tag={Button} size="sm" color="primary" type="submit" onClick={hanldePrint}>
            Print
          </NavLink>
        </NavItem>
        <NavItem className="mr-1">
          <NavLink tag={Button} size="sm" color="secondary" onClick={handleCancel}>
            Cancel
          </NavLink>
        </NavItem>
      </ActionMenu>

      <Card className="custom-report-form">
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Material Requirement By PO Details`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="buyer">
                  Buyer
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.buyer}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="poNos">
                  PO NOs
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.poNos}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="shipmentDate">
                  Shipment Date
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.shipmentDate}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="styleDescription">
                  Style Description
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.styleDescription}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="department">
                  Department
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.department}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="merchantName">
                  Merchant Name
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.merchantName}</div>
              </div>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="styleNo">
                  Style No
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.styleNo}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="orderQty">
                  Order Qty
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.orderQty}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="orderValue">
                  Order Value
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.orderValue}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="year">
                  Year
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.year}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="season">
                  Season
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.season}</div>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* Colors and Sizes */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Colors and Sizes Info`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr>
                  <th>Style</th>
                  <th>Color</th>
                  <th>Qty</th>
                  <th>SIZE-M</th>
                  <th>SIZE-L</th>
                  <th>SIZE-XL</th>
                  <th>SIZE-XXL</th>
                  <th>Total</th>
                </tr>
              </thead>

              {items?.colorSizesInfos?.map( item => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <td rowSpan={item.poDetails.length + 1}>{item.styleName}</td>
                      <td rowSpan={item.poDetails.length + 1}>{item.color}</td>
                    </tr>
                    {item?.poDetails?.map( d => (
                      <tr key={d.id}>
                        <td>{d?.qty}</td>
                        <td>{d?.size_M}</td>
                        <td>{d?.size_L}</td>
                        <td>{d?.size_XL}</td>
                        <td>{d?.size_XXL}</td>
                        <td>{d?.Total}</td>
                      </tr>
                    ) )}
                    <tr className="font-weight-bold">
                      <td rowSpan={2} colSpan={2}>
                        Total
                      </td>
                      <td>PO Qty</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_M ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_L ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_XL ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_XXL ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.Total ) )}</td>
                    </tr>
                    <tr className="font-weight-bold">
                      <td>Adjusted Qty</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_M ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_L ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_XL ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.size_XXL ) )}</td>
                      <td>{grandTotal( item?.poDetails?.map( d => d?.Total ) )}</td>
                    </tr>
                  </tbody>
                );
              } )}
            </Table>
          </Col>
        </Row>
      </Card>

      {/* Colors and Sizes */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Material Info`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr>
                  <th>Item Name</th>
                  <th>Req. Qty</th>
                  <th>Order UOM</th>
                  <th>Value</th>
                  <th>Supplier</th>
                </tr>
              </thead>

              {items?.materialInfos?.map( item => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <td className="text-dark ">{item.itemName}</td>
                      <td className="text-right">{item.reqQty}</td>
                      <td>{item.orderUOM}</td>
                      <td className="text-right">{`${item.value}`}</td>
                      <td>{item.supplier}</td>
                    </tr>
                  </tbody>
                );
              } )}
              <tbody>
                <tr>
                  <td>Grand Total</td>
                  <td></td>
                  <td></td>
                  <td>{grandTotal( items?.materialInfos?.map( item => Number( item.value ) ).flat( Infinity ) )}</td>
                  <td></td>
                </tr>
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
                <span>{` ${items?.reportGeneratedOn}`}</span>
              </div>
              <div>
                <Label className="h5">User: </Label>
                <span>{` ${items?.user}`}</span>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default MaterialRequirementByPoDetails;
