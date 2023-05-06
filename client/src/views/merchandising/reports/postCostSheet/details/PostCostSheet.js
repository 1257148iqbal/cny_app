/*
  Title: PostCostSheet
  Description: PostCostSheet
  Author: Iqbal Hossain
  Date: 21-August-2022
  Modified: 21-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchPostCostSheet } from '../store/actions';

const PostCostSheet = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { postCostSheetReducer } ) => postCostSheetReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchPostCostSheet() );
  }, [dispatch] );
  //#endregion

  //#region Evets
  function hanldePrint() {
    notify( 'warning', 'There have no data' );
  }

  const handleCancel = () => {
    history.goBack();
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
      <ActionMenu title="Post Cost Sheet" moreButton={false} breadcrumb={breadcrumb}>
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

      {/*Master Info*/}
      <Card className="custom-report-form">
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Post Cost Sheet`}</Badge>
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
                <Label className="custom-form-label" for="agent">
                  Agent
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.agent}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="masterLcValue">
                  Master LC Value
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.masterLcValue}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="masterLcNo">
                  Master LC No
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.masterLcNo}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="salesContractNo">
                  Sales Contract No
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.salesContractNo}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="salesContractValue">
                  Sales Contract Value
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.salesContractValue}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="lcOpenedDate">
                  L/C Opened Date
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.lcOpenedDate}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="styleId">
                  StyleID
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.styleId}</div>
              </div>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="department">
                  Department
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.department}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="season">
                  Season
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.season}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="bblcNo">
                  BBLC No
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.bblcNo}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="orderQty">
                  Order Qty
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.orderQty}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="shipmentQty">
                  Shipment Qty
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.shipmentQty}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="excessShort">
                  Excess/Short
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.excessShort}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="shipmentDate">
                  Shipment Date
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.shipmentDate}</div>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* Yarn Composition */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Yarn Composition`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr>
                  <th>Yarn Composition</th>
                  <th>Weight</th>
                  <th>Wastage</th>
                  <th>Total Con</th>
                  <th>U/Price</th>
                  <th>Value/Dz</th>
                  <th>Total</th>
                  <th>PI No</th>
                  <th>Date</th>
                  <th>P.I. Qty</th>
                  <th>P.I.Rate</th>
                  <th>P.I. Value</th>
                  <th>Urplus/Dif</th>
                  <th>Payment Mode</th>
                  <th>Supplier</th>
                </tr>
              </thead>

              <tbody>
                {items?.yarnCompositionDetails?.map( d => {
                  return (
                    <tr key={d.id}>
                      <td>{d?.yarnComposition}</td>
                      <td>{d?.weight}</td>
                      <td>{d?.wastage}</td>
                      <td>{d?.totalCon}</td>
                      <td>{`$${d?.unitPrice}`}</td>
                      <td>{`$${d?.valueDzn}`}</td>
                      <td>{`$${d?.total}`}</td>
                      <td>{d?.piNo}</td>
                      <td>{d?.date}</td>
                      <td>{d?.piQty}</td>
                      <td>{d?.piRate}</td>
                      <td>{d?.piValue}</td>
                      <td>{d?.urplusDif}</td>
                      <td>{d?.paymendMode}</td>
                      <td>{d?.supplier}</td>
                    </tr>
                  );
                } )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>

      {/*Accessories*/}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Accessories`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr>
                  <th>Accessories</th>
                  <th colSpan={2}>Requirement/Pc</th>
                  <th colSpan={2}>Requirement/Dz</th>
                  <th colSpan={2}>Unite Price/Dozen</th>
                  <th>Value/ Pc</th>
                  <th>Total</th>
                  <th>PI No</th>
                  <th>Date</th>
                  <th>P.I. Qty</th>
                  <th>P.I.Rate</th>
                  <th>P.I. Value</th>
                  <th>Urplus/Dif</th>
                  <th>Payment Mode</th>
                  <th>Supplier</th>
                </tr>
              </thead>

              <tbody>
                {items?.accessoriesDetails?.map( d => {
                  return (
                    <tr key={d.id}>
                      <td>{d?.accessories}</td>
                      <td>{d?.req1}</td>
                      <td>{d?.reqPcs}</td>
                      <td>{d?.req2}</td>
                      <td>{d?.reqDzn}</td>
                      <td>{`$${d?.unitPrice}`}</td>
                      <td>{d?.dozen}</td>
                      <td>{`$${d?.valuePc}`}</td>
                      <td>{`$${d?.total}`}</td>
                      <td>{d?.piNo}</td>
                      <td>{d?.date}</td>
                      <td>{d?.piQty}</td>
                      <td>{d?.piRate}</td>
                      <td>{d?.piValue}</td>
                      <td>{d?.urplusDif}</td>
                      <td>{d?.paymendMode}</td>
                      <td>{d?.supplier}</td>
                    </tr>
                  );
                } )}
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

export default PostCostSheet;
