import '@custom-styles/basic/settings-page.scss';
import React, { useState } from 'react';
import { Box, ShoppingBag, Slack, Tool, Users } from 'react-feather';
import { Button, Card, CardBody, Col, NavItem, NavLink, Row } from 'reactstrap';
import ActionMenu from '../../../layouts/components/menu/action-menu';
import GeneralSettings from './GeneralSettings ';
import InventorySettings from './InventorySettings';
import MerchandisingSettings from './MerchandisingSettings';
import ProductionSettings from './ProductionSettings';
import UserSettings from './UserSettings';
const breadcrumb = [
    {
        name: 'Home',
        link: '/',
        isActive: false
    },
    {
        id: 'settings',
        name: 'Settings',
        link: '/settings',
        isActive: false
    }
];
const SettingsForm = () => {
    const [active, setActive] = useState( 'merchandising' );

    return (
        <div>
            <ActionMenu breadcrumb={breadcrumb} title='Settings' >
                <NavItem className="mr-1" >
                    <NavLink
                        tag={Button}
                        size="sm"
                        color="primary"
                    // onClick={() => { handleSubmit(); }}
                    >Save</NavLink>
                </NavItem>
                <NavItem className="mr-1" >
                    <NavLink
                        tag={Button}
                        size="sm"
                        color="secondary"
                    // onClick={() => { handleCancel(); }}
                    >
                        Cancel
                    </NavLink>
                </NavItem>
            </ActionMenu>
            <Card className="main-div mt-3 position-fixed">
                <CardBody className="ml-1">
                    <Row>
                        <Col
                            xs={12}
                            sm={12}
                            md={2}
                            lg={2}
                            xl={2}
                            className="settings-sidebar p-0"
                        >
                            <nav className="sidebar-navigation">
                                <li>
                                    <a
                                        className={`nav-link  d-flex align-items-center ${active ===
                                            'merchandising' && 'active'}`}
                                        onClick={() => {
                                            setActive( 'merchandising' );
                                        }}
                                        href="#merchandising"
                                    >
                                        <div className="d-flex align-items-center">
                                            <ShoppingBag size={18} />
                                            <span className="ml-1">Merchandising</span>
                                        </div>

                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`nav-link  d-flex align-items-center ${active ===
                                            'inventory' && 'active'}`}
                                        onClick={() => {
                                            setActive( 'inventory' );
                                        }}
                                        href="#inventory"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Box size={18} />
                                            <span className="ml-1">Inventory</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className={`nav-link  d-flex align-items-center ${active ===
                                            'production' && 'active'}`}
                                        onClick={() => {
                                            setActive( 'production' );
                                        }}
                                        href="#production"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Slack size={18} />
                                            <span className="ml-1">Production</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`nav-link  d-flex align-items-center ${active ===
                                            'user' && 'active'}`}
                                        onClick={() => {
                                            setActive( 'user' );
                                        }}
                                        href="#user"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Users size={18} />
                                            <span className="ml-1">User</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`nav-link  d-flex align-items-center ${active ===
                                            'general-settings' && 'active'}`}
                                        onClick={() => {
                                            setActive( 'general-settings' );
                                        }}
                                        href="#general-settings"
                                    >
                                        <div className="d-flex align-items-center">
                                            <Tool size={18} />
                                            <span className="ml-1">General</span>
                                        </div>
                                    </a>
                                </li>
                            </nav>
                        </Col>
                        <Col xs={12} sm={12} md={10} lg={10} xl={10} className="p-0">
                            <div className="settings-main">
                                <div id="merchandising">
                                    <MerchandisingSettings />
                                </div>
                                <div id="inventory">
                                    <InventorySettings />
                                </div>

                                <div id="production">
                                    <ProductionSettings />
                                </div>
                                <div id="user">
                                    <UserSettings />
                                </div>
                                <div id="general-settings">
                                    <GeneralSettings />
                                </div>
                                <div style={{ minHeight: '400px' }}>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
};

export default SettingsForm;
