/*
  Title: BudgetSheet
  Description: BudgetSheet
  Author: Iqbal Hossain
  Date: 18-August-2022
  Modified: 18-August-2022
*/
import '@custom-styles/reporting/reporting-core.scss';
import { notify } from '@utility/custom/notifications';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Badge, Button, Card, Col, FormGroup, Label, NavItem, NavLink, Row } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import ActionMenu from '../../../../../layouts/components/menu/action-menu';
import { fetchUserWiseRoles } from '../store/actions';

const UserWiseRole = () => {
  //#region hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const { items } = useSelector( ( { userWiseRolesReducer } ) => userWiseRolesReducer );

  //#endregion

  //#region Effects
  useEffect( () => {
    dispatch( fetchUserWiseRoles() );
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
      <ActionMenu title="User Wise Roles" moreButton={false} breadcrumb={breadcrumb}>
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
            <Badge color="primary">{`User Info`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="userName">
                  Name
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.userName}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="email">
                  Email
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.email}</div>
              </div>
            </Row>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              <div className="custom-form-main">
                <Label className="custom-form-label" for="userDesignation">
                  Designation
                </Label>
                <Label className="custom-form-colons"> : </Label>
                <div className="custom-form-group">{items?.userDesignation}</div>
              </div>
              <div className="custom-form-main">
                <Label className="custom-form-label " for="userRole">
                  Role
                </Label>
                <Label className="custom-form-colons "> : </Label>
                <div className="custom-form-group ">{items?.userRole}</div>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>

      {/* PO Infos */}
      <Card>
        <Row className="pt-2 pr-3 pl-3 pb-1">
          <FormGroup tag={Col} xs={12} sm={12} md={12} lg={12} xl={12} className="mt-n1 pt-1">
            <Badge color="primary">{`Permissions Details Module Wise`}</Badge>
          </FormGroup>

          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            {items?.permissions?.map( p => {
              return (
                <div className="card mb-2" key={uuid()}>
                  <div className="row">
                    <div className="bg-light text-dark align-self-center" style={{ minWidth: 200 }}>
                      <div className="h3 text-left ml-2">{p?.moduleNames}</div>
                    </div>
                    <div className="d-flex flex-wrap ml-1">
                      {p.categoryList?.map( cl => (
                        <div className="card" style={{ minWidth: 100, margin: 5 }} key={uuid()}>
                          <div className="h4 text-center shadow-sm">{cl?.catetoryName}</div>
                          <ul className="list-group">
                            {cl?.roles?.map( r => (
                              <li className="pl-1 text-dark" style={{ listStyle: 'none' }} key={uuid()}>
                                {r}
                              </li>
                            ) )}
                          </ul>
                        </div>
                      ) )}
                    </div>
                  </div>
                </div>
              );
            } )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UserWiseRole;
