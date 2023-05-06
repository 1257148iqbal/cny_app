import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    roles: [
        {
            id: 1,
            roleName: 'Admin',
            description: 'This is for Admin Role',
            status: true
        },
        {
            id: 2,
            roleName: 'User',
            description: 'This is for User Role',
            status: false
        },
        {
            id: 3,
            roleName: 'Merchandiser',
            description: 'This is for Merchandiser Role',
            status: true
        }


    ]
};

//Get Roles

mock.onGet( `${merchandisingApi.role.get_roles}` ).reply( 200, data.roles );


//POST: Add new Role
mock.onPost( `${merchandisingApi.role.add_role}` ).reply( config => {
    //Get event from post data
    const role = JSON.parse( config.data );

    const { length } = data.roles;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.roles[length - 1].id;

    }
    role.id = randomIdGenerator();

    data.roles.unshift( role );

    return [201, { role }];
} );

// POST: Update Role
// ------------------------------------------------
mock.onPost( `${merchandisingApi.role.update_role}` ).reply( config => {
    const updateRole = JSON.parse( config.data ).role;

    // Convert Id to number
    updateRole.id = Number( updateRole.id );

    const role = data.roles.find( e => e.id === Number( updateRole.id ) );
    Object.assign( role, updateRole );

    return [200, { role }];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.role.get_roles_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.roles.filter(
        role =>
            role.roleName.toLowerCase().includes( queryLowered )
    )
    return [
        200,
        {
            roles: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );


// GET Role by Id for Edit or Details
mock.onGet( `${merchandisingApi.role.get_role_by_id}` ).reply( config => {
    const { id } = config;
    const role = data.roles.find( i => i.id === id );
    return [200, { role }];
} );

// DELETE: Deletes Role Range
mock.onDelete( `${merchandisingApi.role.delete_roles_by_range}` ).reply( config => {
    // Get user id from URL
    const roleIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < roleIds.length; index++ ) {
        const id = roleIds[index];
        const roleIndex = data.roles.findIndex( t => t.id === id );
        data.roles.splice( roleIndex, 1 );
    }
    return [200];
} );


// DELETE: Deletes Role
mock.onDelete( `${merchandisingApi.role.delete_role}` ).reply( config => {
    // Get user id from URL
    let roleId = config.id;

    // Convert Id to number
    roleId = Number( roleId );

    const roleIndex = data.roles.findIndex( t => t.id === roleId );
    data.roles.splice( roleIndex, 1 );

    return [200];
} );