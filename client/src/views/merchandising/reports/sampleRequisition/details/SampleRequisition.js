/*
  Title: SampleRequisition
  Description: SampleRequisition
  Author: Iqbal Hossain
  Date: 22-August-2022
  Modified: 22-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchSampleRequisition } from '../store/actions';

const SampleRequisition = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { sampleRequisitionReducer } ) => sampleRequisitionReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchSampleRequisition() );
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
      <ActionMenu title="Sample Requisition" moreButton={false} breadcrumb={breadcrumb}>
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
            <Badge color="primary">{`Sample Requisitiont`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="requisitionId">
                  Requisition ID
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.requisitionId}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="requisitionDate">
                  Requisition Date
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.requisitionDate}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="sampleType">
                  Sample Type
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.sampleType}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="buyer">
                  Buyer
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.buyer}</div>
              </div>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="season">
                  Season
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.season}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="sampleDeadLine">
                  Sample DeadLine
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.sampleDeadLine}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="marchandiser">
                  Marchandiser
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.marchandiser}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="sampleInCharge">
                  Sample In Charge
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.sampleInCharge}</div>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* sampleDescription */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Sample Description`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr>
                  <th>Style</th>
                  <th>Style Description</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Quantity</th>
                </tr>
              </thead>

              <tbody>
                {items?.sampleDescription?.map( d => {
                  return (
                    <tr key={d.id}>
                      <td>{d?.style}</td>
                      <td>{d?.styleDescription}</td>
                      <td>{d?.color}</td>
                      <td>{d?.size}</td>
                      <td className="text-right">{d?.quantity}</td>
                    </tr>
                  );
                } )}
                <tr className="font-weight-bold text-right">
                  <td colSpan={4}>Total</td>
                  <td colSpan={4}>{grandTotal( items?.sampleDescription?.map( item => item.quantity ) )}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>

      {/*Remarks*/}
      <Card className="mb-1 pt-2 pr-3 pl-3 pb-2">
        <Row className="mb-0">
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="custom-form-main">
              <Label className="custom-form-label" for="styleNo">
                Instructions / Remarks
              </Label>
              <Label className="custom-form-colons"> : </Label>
            </div>
            <div className="border border-secondary p-1" style={{ height: '130px' }}>
              <div>{items.remarks ? items?.remarks : 'Empty'}</div>
            </div>
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

export default SampleRequisition;
