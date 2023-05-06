/*
  Title: SixMonthCMValueByStyle
  Description: SixMonthCMValueByStyle
  Author: Iqbal Hossain
  Date: 20-August-2022
  Modified: 20-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row, Table } from 'reactstrap';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchSixMonthCMValueByStyle } from '../store/actions';

const SixMonthCMValueByStyle = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { sixMonthCMValueByStyleReducer } ) => sixMonthCMValueByStyleReducer );
  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchSixMonthCMValueByStyle() );
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
      <ActionMenu title="Six Month Order Value By Style" moreButton={false} breadcrumb={breadcrumb}>
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

      {/* Costing Summary & Breakdown */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Six Month CM Value By Style ( jul, 2022 -Dec, 2022 )`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table responsive bordered hover size="sm" className="custom-table">
              <thead className={`text-center table-bordered`}>
                <tr className="font-weight-bold">
                  <th rowSpan={2}>{`Marchant`}</th>
                  <th rowSpan={2}>{`Style No`}</th>
                  <th rowSpan={2}>{`Total Qty (cm)`}</th>
                  <th rowSpan={2}>{`Total Value (USD)`}</th>
                  <th colSpan={2}>{`Jul, 2022`}</th>
                  <th colSpan={2}>{`Aug, 2022`}</th>
                  <th colSpan={2}>{`Sep, 2022`}</th>
                  <th colSpan={2}>{`Oct, 2022`}</th>
                  <th colSpan={2}>{`Nov, 2022`}</th>
                  <th colSpan={2}>{`Dec, 2022`}</th>
                </tr>
                <tr>
                  <th>CM</th>
                  <th>Margin</th>
                  <th>CM</th>
                  <th>Margin</th>
                  <th>CM</th>
                  <th>Margin</th>
                  <th>CM</th>
                  <th>Margin</th>
                  <th>CM</th>
                  <th>Margin</th>
                  <th>CM</th>
                  <th>Margin</th>
                </tr>
              </thead>

              {items?.map( item => {
                return (
                  <Fragment key={item.id}>
                    <tbody>
                      <tr>
                        <th colSpan={16} className="h5 text-dark ">{`Style Cagegory: ${item.styleCategory}`}</th>
                      </tr>
                    </tbody>

                    {item.marchantInfos?.map( mi => {
                      return (
                        <tbody key={mi.id}>
                          <tr>
                            <td rowSpan={mi.details.length + 1}>{mi.marchantName}</td>
                          </tr>
                          {mi.details?.map( d => {
                            return (
                              <tr key={d.id}>
                                <td>{d?.styleNo}</td>
                                <td>{d?.totalQty}</td>
                                <td>{d?.totalValue}</td>
                                <td>{d?.cm_jul}</td>
                                <td>{d?.margin_jul}</td>
                                <td>{d?.cm_aug}</td>
                                <td>{d?.margin_aug}</td>
                                <td>{d?.cm_sep}</td>
                                <td>{d?.margin_sep}</td>
                                <td>{d?.cm_oct}</td>
                                <td>{d?.margin_oct}</td>
                                <td>{d?.cm_nov}</td>
                                <td>{d?.margin_nov}</td>
                                <td>{d?.cm_dec}</td>
                                <td>{d?.margin_dec}</td>
                              </tr>
                            );
                          } )}
                        </tbody>
                      );
                    } )}
                    <tbody>
                      <tr className="font-weight-bold text-dark">
                        <td className="text-left" colSpan={4}>
                          Total
                        </td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.cm_jul ) ).flat() )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.margin_jul ) ).flat() )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.cm_aug ) ).flat() )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.margin_aug ) ).flat() )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.cm_sep ) ).flat() )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.margin_sep ) ).flat() )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.cm_oct ) ).flat() )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.margin_oct ) ).flat() )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.cm_nov ) ).flat() )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.margin_nov ) ).flat() )?.toFixed( 2 )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.cm_dec ) ).flat() )}</td>
                        <td>{grandTotal( item.marchantInfos.map( item => item.details.map( d => d.margin_dec ) ).flat() )?.toFixed( 2 )}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              } )}
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

export default SixMonthCMValueByStyle;
