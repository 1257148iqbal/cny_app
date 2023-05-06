import '@custom-styles/auth/form/permission-form.scss';
import React, { Fragment, useState } from 'react';
import { MinusSquare, PlusSquare } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { bindPermissions } from '../auth/permission/store/actions';
const Permission = () => {
    const dispatch = useDispatch();
    const rp = [{ code: "Style.Delete" }];
    const [rolePermissions, setRolePermissions] = useState( rp );
    const { permissions } = useSelector( ( { permissions } ) => permissions );

    const [active, setActive] = useState( 'Merchandising' );
    const toggle = tab => {
        if ( active !== tab ) {
            setActive( tab );
        }
    };
    const handleOpenSubModulePermission = ( subModule, isExpanded ) => {
        const updatedPermission = permissions.map( p => ( {
            ...p,
            subModules: p.subModules.map( sm => {
                if ( sm.name === subModule ) {
                    sm['isExpanded'] = !isExpanded;
                }
                return sm;
            } )
        } ) );
        dispatch( bindPermissions( updatedPermission ) );
    };
    const handleSubAllPermission = ( subModule, e ) => {
        const { checked } = e.target;
        console.log( subModule );
        if ( checked ) {
            const otherSubModulePermissions = rolePermissions.filter( permission => !permission.code.includes( subModule?.name ) );
            const updatedRolePermission = [...otherSubModulePermissions, ...subModule?.permissions];
            console.log( otherSubModulePermissions );
            setRolePermissions( updatedRolePermission );
        } else {
            const otherSubModulePermission = rolePermissions.filter( permission => !permission.code.includes( subModule?.name ) );

            setRolePermissions( otherSubModulePermission );
        }
        const updatedPermission = permissions.map( permission => ( {
            ...permission,
            subModules: permission.subModules.map( subModule => {
                if ( subModule.name === subModule.name ) {
                    subModule['isAll'] = checked;
                }
                return subModule;
            } )
        } ) );

        dispatch( bindPermissions( updatedPermission ) );
    };

    const handleOperationOnChange = ( e, selectedSubModule, selectedPermission ) => {
        const { name, checked } = e.target;
        console.log( selectedPermission );
        const otherSubModulePermission = rolePermissions.filter( permission => permission.code !== selectedPermission.code );
        console.log( otherSubModulePermission );
        if ( checked ) {
            const updatedRolePermissions = [...otherSubModulePermission, selectedPermission];
            setRolePermissions( updatedRolePermissions );

        } else {
            const updatedRolePermissions = [...otherSubModulePermission];
            setRolePermissions( updatedRolePermissions );

        }

        const updatedPermission = permissions.map( p => ( {
            ...p,
            subModules: p.subModules.map( subModule => {
                if ( subModule.name === selectedSubModule.name ) {
                    subModule['isAll'] = checked;
                }
                return subModule;
            } )
        } ) );

        dispatch( bindPermissions( updatedPermission ) );

    };

    const isAllSubModulePermissionsSelected = ( subModule ) => {
        const otherSubModulePermission = rolePermissions.filter( permission => permission.code?.includes( subModule?.name.replace( /\s/g, '' ) ) );
        const isSelected = subModule?.permissions.every( permission => otherSubModulePermission.some( rolePermission => rolePermission.code === permission.code ) );
        return isSelected;
    };

    return (
        <div>
            <div className='permission'>
                {/* <div className='divider divider-left mt-0'>
                    <div className='divider-text text-secondary font-weight-bolder '> Role Permission</div>
                </div> */}
                <div className="border  p-1 ">
                    <div className='nav-vertical'>
                        <Nav tabs className='nav-left module'>
                            {permissions.map( ( permission, index ) => (
                                <NavItem key={index + 1}>
                                    <NavLink
                                        active={active === permission.module}
                                        onClick={() => {
                                            toggle( permission.module );
                                        }}
                                    >
                                        {permission.module.toUpperCase()}
                                    </NavLink>
                                </NavItem>
                            ) )}


                        </Nav>
                        <TabContent activeTab={active}>
                            <TabPane tabId={active}>
                                <div>
                                    {
                                        permissions.filter( permission => permission.module === active ).map( ( module, index ) => (
                                            <Fragment key={index + 1}>
                                                {module.subModules.map( ( subModule, index ) => (
                                                    <ul key={index + 1} className="font-weight-bolder">

                                                        <li>
                                                            <div className='d-flex  '>
                                                                <span className='mr-2'>
                                                                    <PlusSquare
                                                                        color='green'
                                                                        hidden={subModule.isExpanded}
                                                                        onClick={() => { handleOpenSubModulePermission( subModule.name, subModule.isExpanded ); }}
                                                                        size={16}
                                                                    />
                                                                    <MinusSquare
                                                                        color='purple'
                                                                        hidden={!subModule.isExpanded}
                                                                        onClick={() => { handleOpenSubModulePermission( subModule.name, subModule.isExpanded ); }}
                                                                        size={16}
                                                                    />
                                                                </span>
                                                                <span>
                                                                    <Input type="checkbox"
                                                                        checked={isAllSubModulePermissionsSelected( subModule )}
                                                                        onChange={( e ) => { handleSubAllPermission( subModule, e ); }} />

                                                                </span>
                                                                <span>
                                                                    {subModule.name.toUpperCase()}

                                                                </span>
                                                            </div>

                                                            {subModule.isExpanded &&
                                                                subModule.permissions.map( ( permission, index ) => (
                                                                    <ul key={index}>
                                                                        <li className='pl-1'>
                                                                            <Input
                                                                                name={`${permission.code}`}
                                                                                type="checkbox"
                                                                                checked={rolePermissions.some( rolePermission => rolePermission.code === permission?.code )}
                                                                                onChange={( e ) => { handleOperationOnChange( e, subModule.name, permission ); }} />
                                                                            {permission.code.split( "." )[1].toUpperCase()}
                                                                        </li>
                                                                    </ul>
                                                                ) )
                                                            }

                                                        </li>
                                                    </ul>
                                                ) )}
                                            </Fragment>
                                        ) )
                                    }

                                </div>
                            </TabPane>

                        </TabContent>
                    </div>
                </div>
            </div>
            <div>
                <pre>{JSON.stringify( rolePermissions, null, 2 )}</pre>
            </div>
        </div>
    );
};

export default Permission;