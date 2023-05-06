import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    statuses: [
        {
            id: 1,
            name: 'Reject',
            statusFor: ' Reject ',
            isActive: true
        },
        {
            id: 2,
            name: 'Accept',
            statusFor: ' Accept',
            isActive: false
        },
        {
            id: 3,
            name: 'Pending',
            statusFor: 'Pending',
            isActive: true
        }

    ]
};

// GET Status
mock.onGet( `${merchandisingApi.status.get_statuses}` ).reply( 200, data.statuses );

// POST: Add new Status
mock.onPost( `${merchandisingApi.status.add_status}` ).reply( config => {
    // Get event from post data
    const status = JSON.parse( config.data );
    status.id = randomIdGenerator();

    data.statuses.unshift( status );

    return [
        201, {
            data: status,
            succeeded: true
        }
    ];
} );


// POST: Update status
const urlGetForUpdate = new RegExp( `${merchandisingApi.status.update_status}/*` );

mock.onPut( urlGetForUpdate ).reply( config => {
    const updateStatus = JSON.parse( config.data );

    // Convert Id to number
    updateStatus.id = Number( updateStatus.id );

    const status = data.statuses.find( e => e.id === Number( updateStatus.id ) );
    Object.assign( status, updateStatus );

    return [
        200, {
            data: status,
            succeeded: true
        }
    ];
} );

const statusesTypes = [
    "Style",
    "PurchaseOrder"
];


mock.onGet( `${merchandisingApi.status.get_status_types}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;
    const filteredData = statusesTypes.filter( i => i );
    return [
        200,
        filteredData
    ];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.status.get_statuses_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.statuses.filter(
        status =>
            status.name.toLowerCase().includes( queryLowered )
    )
    return [
        200,
        {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length,
            succeeded: true
        }
    ];
} );
mock.onGet( `${merchandisingApi.status.get_statuses_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.statuses.filter(
        status =>
            status.name.toLowerCase().includes( queryLowered )
    )
    return [
        200,
        {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length,
            succeeded: true
        }
    ];
} );

// GET Status by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.status.get_status_by_id}/*` );

mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );

    const status = data.statuses.find( i => i.id === id );
    return [200, status, { succeeded: true }];

} );

// DELETE: Deletes Status Range
mock.onDelete( `${merchandisingApi.status.delete_status_by_range}` ).reply( config => {
    // Get user id from URL
    const statusIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < statusIds.length; index++ ) {
        const id = statusIds[index];
        const statusIndex = data.statuses.findIndex( t => t.id === id );
        data.statuses.splice( statusIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Status
mock.onDelete( `${merchandisingApi.status.delete_status}` ).reply( config => {
    // Get user id from URL
    let statusId = config.id;

    // Convert Id to number
    statusId = Number( statusId );

    const statusIndex = data.statuses.findIndex( t => t.id === statusId );
    data.statuses.splice( statusIndex, 1 );

    return [200];
}
);