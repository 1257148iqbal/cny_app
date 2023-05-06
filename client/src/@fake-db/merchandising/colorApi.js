import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    colors: [
        {
            id: 1,
            name: 'Blue',
            hexCode: '#0000FF',
            description: 'This is for Blue Color',
            status: true
        },
        {
            id: 2,
            name: 'Red',
            hexCode: '#FF0000',
            description: 'This is for Red Color',
            status: false
        },
        {
            id: 3,
            name: 'Yellow',
            hexCode: '#FFFF00',
            description: 'This is for Yellow Color',
            status: true
        },
        {
            id: 4,
            name: 'White',
            hexCode: '#FFFFFF',
            description: 'This is for White Color',
            status: true
        },
        {
            id: 5,
            name: 'Black',
            hexCode: '#000000',
            description: 'This is for Black Color',
            status: false
        },
        {
            id: 6,
            name: 'Green',
            hexCode: '#008000',
            description: 'This is for Green Color',
            status: true
        },
        {
            id: 7,
            name: 'Silver',
            hexCode: '#C0C0C0',
            description: 'This is for Silver Color',
            status: true
        },
        {
            id: 8,
            name: 'Pink',
            hexCode: '#FFC0CB',
            description: 'This is for Pink Color',
            status: false
        },
        {
            id: 9,
            name: 'Orange',
            hexCode: '#FFA500',
            description: 'This is for Orange Color',
            status: true
        }


    ]
};

// GET Color

mock.onGet( `${merchandisingApi.color.get_colors}` ).reply( 200, data.colors );

//POST: Add new Color
mock.onPost( `${merchandisingApi.color.add_color}` ).reply( config => {
    //Get event from post data
    const color = JSON.parse( config.data );
    color.id = randomIdGenerator();

    data.colors.unshift( color );

    return [200, { data: color, succeeded: true }];
} );


// POST: Update Color
const urlGetForUpdate = new RegExp( `${merchandisingApi.color.update_color}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateColor = JSON.parse( config.data );
    // Convert Id to number
    updateColor.id = Number( updateColor.id );

    const color = data.colors.find( e => e.id === Number( updateColor.id ) );
    Object.assign( color, updateColor );

    return [
        200, {
            data: color,
            succeeded: true
        }
    ];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.color.get_colors_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.colors.filter(
        color =>
            color.name.toLowerCase().includes( queryLowered )
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


// GET Color by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.color.get_color_by_id}/*` );

mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const color = data.colors.find( i => i.id === id );
    return [200, color, { succeeded: true }];

} );


// DELETE: Deletes Color Range
mock.onDelete( `${merchandisingApi.color.delete_color_by_range}` ).reply( config => {
    // Get user id from URL
    const colorIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < colorIds.length; index++ ) {
        const id = colorIds[index];
        const colorIndex = data.colors.findIndex( t => t.id === id );
        data.colors.splice( colorIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Color
mock.onDelete( `${merchandisingApi.color.delete_color}` ).reply( config => {
    // Get user id from URL
    let colorId = config.id;

    // Convert Id to number
    colorId = Number( colorId );

    const colorIndex = data.colors.findIndex( t => t.id === colorId );
    data.colors.splice( colorIndex, 1 );

    return [200];
}
);