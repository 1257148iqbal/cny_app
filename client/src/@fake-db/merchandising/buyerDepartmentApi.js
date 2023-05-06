import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    buyerDepartments: [
        {
            id: 1,
            name: 'WILD FOX',
            description: 'This is WILD FOX ',
            status: true
        },
        {
            id: 2,
            name: 'FRUIT OF THE LOOM',
            description: 'This is FRUIT OF THE LOOM',
            status: false
        },
        {
            id: 3,
            name: 'SMART & SEXY',
            description: 'This is SMART & SEXY',
            status: true
        }


    ]
};

// GET Buyer Department
mock.onGet( `${merchandisingApi.buyerDepartment.get_buyer_departments}` ).reply( 200, data.buyerDepartments );


// POST: Add new Buyer Department
mock.onPost( `${merchandisingApi.buyerDepartment.add_buyer_department}` ).reply( config => {
    // Get event from post data
    const buyerDepartment = JSON.parse( config.data );

    buyerDepartment.id = randomIdGenerator();

    data.buyerDepartments.unshift( buyerDepartment );

    return [
        200, {
            data: buyerDepartment,
            succeeded: true
        }
    ];
} );


// POST: Update Buyer Department
const urlGetForUpdate = new RegExp( `${merchandisingApi.buyerDepartment.update_buyer_department}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateBuyerDepartment = JSON.parse( config.data );

    // Convert Id to number
    updateBuyerDepartment.id = Number( updateBuyerDepartment.id );

    const buyerDepartment = data.buyerDepartments.find( e => e.id === Number( updateBuyerDepartment.id ) );
    Object.assign( buyerDepartment, updateBuyerDepartment );

    return [
        200, {
            data: buyerDepartment,
            succeeded: true
        }
    ];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.buyerDepartment.get_buyer_departments_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.buyerDepartments.filter(
        buyerDepartment =>
            buyerDepartment.name.toLowerCase().includes( queryLowered )

    )
    /* eslint-enable  */
    return [
        200,
        {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length,
            succeeded: true
        }
    ];
} );
// GET Updated DATA
mock.onGet( `${merchandisingApi.buyerDepartment.get_buyer_departments_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.buyerDepartments.filter(
        buyerDepartment =>
            buyerDepartment.name.toLowerCase().includes( queryLowered )

    )
    /* eslint-enable  */

    return [
        200,
        {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length,
            succeeded: true
        }
    ];
} );


// GET Buyer Department by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.buyerDepartment.get_buyer_department_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );

    const buyerDepartment = data.buyerDepartments.find( i => i.id === id );
    return [200, buyerDepartment, { succeeded: true }];
} );


// DELETE: Deletes Buyer Department Range
mock.onDelete( `${merchandisingApi.buyerDepartment.delete_buyer_department_by_range}` ).reply( config => {
    // Get user id from URL
    const buyerDepartmentIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < buyerDepartmentIds.length; index++ ) {
        const id = buyerDepartmentIds[index];
        const buyerDepartmentIndex = data.buyerDepartments.findIndex( t => t.id === id );
        data.buyerDepartments.splice( buyerDepartmentIndex, 1 );
    }


    return [200];
} );


// DELETE: Deletes Buyer Department
mock.onDelete( `${merchandisingApi.buyerDepartment.delete_buyer_department}` ).reply( config => {
    // Get user id from URL
    let buyerDepartmentId = config.id;

    // Convert Id to number
    buyerDepartmentId = Number( buyerDepartmentId );

    const buyerDepartmentIndex = data.buyerDepartments.findIndex( t => t.id === buyerDepartmentId );
    data.buyerDepartments.splice( buyerDepartmentIndex, 1 );

    return [200];
} );