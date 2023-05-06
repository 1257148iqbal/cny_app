import React from 'react';

import { Col, Row } from 'reactstrap';
import { permissionsModel } from '../auth/permission/model';
const Permission = () => {

    const modulePermission = permissionsModel.map( permission => permission.subModules.map( subModule => subModule.permissions ).flat() ).flat().map( p => p.code );

    const userPermission = [
        {
            code: "Style.Create",
            description: "Create Style"
        },
        {
            code: "Style.Delete",
            description: "Create Style"
        },
        {
            code: "Costing.Delete",
            description: "Create Style"
        }
    ];

    const grouped = userPermission.map( p => ( {
        [p.code.split( '.' ).join( "" )]: p.code
    } ) );

    const userObj = Object.assign( {}, ...userPermission.map( p => ( {
        [p.code.split( '.' ).join( "" )]: p.code
    } ) ) );


    console.log( grouped );
    const handleIsPermit = ( selectedPermission ) => {
        const isSelected = modulePermission.some( permission => permission === selectedPermission );
        return isSelected;
    };


    return (
        <div>
            <Row>

                <Col>
                    <pre> {JSON.stringify( modulePermission, null, 2 )}</pre>
                </Col>
                <Col>
                    <pre> {JSON.stringify( handleIsPermit( userObj.StyleCreates ), null, 2 )}</pre>
                </Col>
                <Col>
                    <pre> {JSON.stringify( grouped, null, 2 )}</pre>
                </Col>


            </Row>
            <Row>

                <Col>
                    <pre> {JSON.stringify( userObj, null, 2 )}</pre>
                </Col>


            </Row>
        </div>

    );
};

export default Permission;