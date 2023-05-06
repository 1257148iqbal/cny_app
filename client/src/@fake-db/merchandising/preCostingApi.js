
import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';

const data = {
    preCostings: [
        {
            id: 1,
            styleNo: '4369SMS32-1',
            costingNo: 'CS-56974',
            sizeGroup: 'S-XL',
            colors: ['Black', 'White'],
            costingDate: '01-June-2021',
            uom: 'PCS',
            quantity: 1,
            total: '$525',
            buyer: {
                id: 1,
                buyerName: 'BABYFAIR'
            },
            buyerPoNo: '1205545',
            status: 'active'
        },
        {
            id: 2,
            styleNo: '4369SMS32-1',
            costingNo: 'CS-96985',
            sizeGroup: 'X-XL',
            colors: ['Black'],
            costingDate: '15-July-2021',
            uom: 'PCS',
            quantity: 1,
            total: '$872',
            buyer: {
                id: 1,
                buyerName: 'BABYFAIR'
            },
            buyerPoNo: '1205545',
            status: 'pending'
        }

    ]
};

// GET ALL DATA
mock.onGet( `${merchandisingApi.preCosting.get_pre_costings}` ).reply( 200, data.preCostings );

// POST: Add New
mock.onPost( `${merchandisingApi.preCosting.add_pre_costing}` ).reply( config => {
    // Get event from post data
    const preCosting = JSON.parse( config.data );
    preCosting.id = randomIdGenerator();
    data.preCostings.unshift( preCosting );
    return [201, { preCosting }];
} );


// POST: Update
// ------------------------------------------------
mock.onPost( `${merchandisingApi.preCosting.update_pre_costing}` ).reply( config => {
    const updatePreCosting = JSON.parse( config.data ).preCostings;

    // Convert Id to number
    updatePreCosting.id = Number( updatePreCosting.id );

    const preCosting = data.preCostings.find( e => e.id === Number( updatePreCosting.id ) );
    Object.assign( preCosting, updatePreCosting );

    return [200, { preCosting }];
} );

// GET Query Table Data 
mock.onGet( `${merchandisingApi.preCosting.get_pre_costings_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    const queryLowered = q.toLowerCase();
    const filteredData = data.preCostings.filter(
        preCosting => preCosting.styleNo.toLowerCase().includes( queryLowered ) &&
            preCosting.status === ( status || preCosting.status )
    );

    return [
        200,
        {
            preCostings: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );

// GET Buyer by Id for Edit or Details
mock.onGet( `${merchandisingApi.preCosting.get_pre_costing_by_id}` ).reply( config => {
    const { id } = config;
    const preCosting = data.preCostings.find( i => i.id === id );
    return [200, { preCosting }];
} );

// DELETE: Deletes Range
mock.onDelete( `${merchandisingApi.preCosting.delete_pre_costing_by_range}` ).reply( config => {
    // Get id from URL
    const preCostingId = config.ids;

    for ( let index = 0; index < preCostingId.length; index++ ) {
        const id = preCostingId[index];
        const preCostingIndex = data.preCostings.findIndex( t => t.id === id );
        data.preCostings.splice( preCostingIndex, 1 );
    }
    return [200];
} );

// DELETE: Deletes
mock.onDelete( `${merchandisingApi.preCosting.delete_pre_costing}` ).reply( config => {
    // Get user id from URL
    let preCostingId = config.id;
    // Convert Id to number
    preCostingId = Number( preCostingId );
    const preCostingIndex = data.preCostings.findIndex( t => t.id === preCostingId );
    data.preCostings.splice( preCostingIndex, 1 );

    return [200];
} );
