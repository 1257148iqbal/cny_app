import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    sizes: [
        {
            id: 1,
            name: 'XL',
            shortCode: 'XL',
            description: 'This is XL size',
            status: true
        },
        {
            id: 2,
            name: 'M',
            shortCode: 'M',
            description: 'This is M size',
            status: false
        },
        {
            id: 3,
            name: '4XL',
            shortCode: '4XL',
            description: 'This is 4XL size',
            status: true
        },
        {
            id: 4,
            name: 'XS',
            shortCode: 'XS',
            description: 'This is XS size',
            status: true
        },
        {
            id: 5,
            name: 'S',
            shortCode: 'S',
            description: 'This is S size',
            status: false
        },
        {
            id: 6,
            name: 'L',
            shortCode: 'L',
            description: 'This is L size',
            status: true
        },
        {
            id: 7,
            name: '5XL',
            shortCode: '5XL',
            description: 'This is 5XL size',
            status: true
        },
        {
            id: 8,
            name: 'XXL',
            shortCode: 'XXL',
            description: 'This is XXL size',
            status: false
        },
        {
            id: 9,
            name: '2XL',
            shortCode: '2XL',
            description: 'This is 2XL size',
            status: true
        }


    ]
};

// GET Size

mock.onGet( `${merchandisingApi.size.get_sizes}` ).reply( 200, data.sizes );


//POST: Add new Size
mock.onPost( `${merchandisingApi.size.add_size}` ).reply( config => {
    //Get event from post data
    const size = JSON.parse( config.data );
    size.id = randomIdGenerator();

    data.sizes.unshift( size );

    return [200, size.id];
} );


// Put: Update size
const urlGetForUpdate = new RegExp( `${merchandisingApi.size.update_size}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateSize = JSON.parse( config.data );
    // Convert Id to number
    updateSize.id = Number( updateSize.id );

    const size = data.sizes.find( e => e.id === Number( updateSize.id ) );
    Object.assign( size, updateSize );

    return [
        200, {
            data: size,
            succeeded: true
        }
    ];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.size.get_sizes_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.sizes.filter(
        size =>
            size.name.toLowerCase().includes( queryLowered )

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
// GET Updated DATA
mock.onGet( `${merchandisingApi.size.get_size_for_dropdown}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.sizes.filter(
        size =>
            size.name.toLowerCase().includes( queryLowered )
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


// GET Size by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.size.get_size_by_id}/*` );

mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const size = data.sizes.find( i => i.id === id );
    return [200, size, { succeeded: true }];
} );


// DELETE: Deletes Size Range
mock.onDelete( `${merchandisingApi.size.delete_size_by_range}` ).reply( config => {
    // Get user id from URL
    const sizeIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < sizeIds.length; index++ ) {
        const id = sizeIds[index];
        const sizeIndex = data.sizes.findIndex( t => t.id === id );
        data.sizes.splice( sizeIndex, 1 );
    }


    return [200];
} );


// DELETE: Deletes Size
mock.onDelete( `${merchandisingApi.size.delete_size}` ).reply( config => {
    // Get user id from URL
    let sizeId = config.id;

    // Convert Id to number
    sizeId = Number( sizeId );

    const sizeIndex = data.sizes.findIndex( t => t.id === sizeId );
    data.sizes.splice( sizeIndex, 1 );

    return [200];
} );