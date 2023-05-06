import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";

const data = {
    sizeGroups: [
        {
            id: 1,
            name: 'XL',
            sizes: ['X', 'XL'],
            description: 'This is XL size',
            status: true
        },
        {
            id: 2,
            name: 'M',
            sizes:
                ['M', 'XL'],
            description: 'This is M size',
            status: false
        },
        {
            id: 3,
            name: '4XL',
            sizes: ['4XL', 'XL'],
            description: 'This is 4XL size',
            status: true
        },
        {
            id: 4,
            name: 'XS',
            sizes: ['XS', 'XL'],
            description: 'This is XS size',
            status: true
        },
        {
            id: 5,
            name: 'S',
            sizes: ['X', 'S'],
            description: 'This is S size',
            status: false
        },
        {
            id: 6,
            name: 'L',
            sizes: ['X', 'L'],
            description: 'This is L size',
            status: true
        },
        {
            id: 7,
            name: '5XL',
            sizes: ['X', '5XL'],
            description: 'This is 5XL size',
            status: true
        },
        {
            id: 8,
            name: 'XXL',
            sizes: ['X', 'XXL'],
            description: 'This is XXL size',
            status: false
        },
        {
            id: 9,
            name: '2XL',
            sizes: ['X', '2XL'],
            description: 'This is 2XL size',
            status: true
        }


    ]
};
// GET Size Group

mock.onGet( `${merchandisingApi.sizeGroup.get_size_groups}` ).reply( 200, data.sizeGroups );

//POST: Add new Size Group
mock.onPost( `${merchandisingApi.sizeGroup.add_size_group}` ).reply( config => {
    //Get event from post data
    const sizeGroup = JSON.parse( config.data );
    sizeGroup.id = randomIdGenerator();

    data.sizeGroups.unshift( sizeGroup );

    return [200, { data: sizeGroup, succeeded: true }];
} );

// POST: Update size
// ------------------------------------------------
mock.onPut( `${merchandisingApi.sizeGroup.update_size_group}` ).reply( config => {
    const updateSizeGroup = JSON.parse( config.data );
    // Convert Id to number
    updateSizeGroup.id = Number( updateSizeGroup.id );

    const sizeGroup = data.sizeGroups.find( e => e.id === Number( updateSizeGroup.id ) );
    Object.assign( sizeGroup, updateSizeGroup );

    return [200, { data: sizeGroup, succeeded: true }];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.sizeGroup.get_size_groups_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.sizeGroups.filter(
        sizeGroup =>
            sizeGroup.name.toLowerCase().includes( queryLowered )
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
// mock.onGet( `${merchandisingApi.sizeGroup.get_size_groups_by_query}` ).reply( config => {
//     const { q = '', perPage = 10, page = 1, status = null } = config;
//     /* eslint-disable  */
//     const queryLowered = q.toLowerCase()
//     const filteredData = data.sizeGroups.filter(
//         sizeGroup =>
//             sizeGroup.name.toLowerCase().includes( queryLowered )
//     )
//     return [
//         200,
//         {
//             data: paginateArray( filteredData, perPage, page ),
//             total: filteredData.length,
//             succeeded: true
//         }
//     ];
// } );

//GET Size by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.sizeGroup.get_size_group_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const sizeGroup = data.sizeGroups.find( i => i.id === id );
    return [200, sizeGroup, { succeeded: true }];

} );

// DELETE: Deletes Size Range
mock.onDelete( `${merchandisingApi.sizeGroup.delete_size_group_by_range}` ).reply( config => {
    // Get user id from URL
    const sizeGroupIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < sizeGroupIds.length; index++ ) {
        const id = sizeGroupIds[index];
        const sizeGroupIndex = data.sizeGroups.findIndex( t => t.id === id );
        data.sizeGroups.splice( sizeGroupIndex, 1 );
    }

    return [200];
} );


// DELETE: Deletes Size Group
mock.onDelete( `${merchandisingApi.sizeGroup.delete_size_group}` ).reply( config => {
    // Get user id from URL
    let sizeGroupId = config.id;

    // Convert Id to number
    sizeGroupId = Number( sizeGroupId );

    const sizeGroupIndex = data.sizeGroups.findIndex( t => t.id === sizeGroupId );
    data.sizeGroups.splice( sizeGroupIndex, 1 );

    return [200];
} );