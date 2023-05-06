import { merchandisingApi } from "@api/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';

const data = {
    styles: [
        {
            id: 1,
            modelNo: '4369SMS32-1',
            division: 'Knit',
            department: 'Ladies',
            description: 'Style no 01 for Girls Division',
            buyer: {
                id: 1,
                name: 'BABYFAIR'
            },
            productCategory: 'Bottom',
            status: 'active',
            images: [
                {
                    id: 1,
                    urls: require( '@src/assets/images/avatars/10.png' ).default
                },
                {
                    id: 2,
                    urls: require( '@src/assets/images/avatars/11-small.png' ).default
                }
            ],
            documents: ''

        },
        {
            id: 2,
            modelNo: '4369SMS32-2',
            division: 'Knit',
            department: 'Ladies',
            description: 'Style no 02 for Boys Division',
            buyer: {
                id: 2,
                name: 'AAI'
            },
            productCategory: 'Bottom',
            status: 'active',
            images: [
                {
                    id: 1,
                    urls: require( '@src/assets/images/avatars/8-small.png' ).default
                },
                {
                    id: 2,
                    urls: require( '@src/assets/images/avatars/10.png' ).default
                }
            ],
            documents: ''


        },
        {
            id: 3,
            modelNo: '4369SMS32-3',
            division: 'Knit',
            department: 'Ladies',
            description: 'Style no 02 for Boys Division',
            buyer: {
                id: 2,
                name: 'AAI'
            },
            productCategory: 'Bottom',
            status: 'active',
            images: [
                {
                    id: 1,
                    urls: require( '@src/assets/images/avatars/5-small.png' ).default
                },
                {
                    id: 2,
                    urls: require( '@src/assets/images/avatars/10.png' ).default
                }
            ],
            documents: ''


        },

        {
            id: 4,
            modelNo: '4369SMS32-4',
            division: 'Woven',
            department: 'Men',
            description: 'Style no 02 for Boys Division',
            buyer: {
                id: 1,
                name: 'BABYFAIR'
            },
            productCategory: 'Top',
            status: 'active',

            images: [
                {
                    id: 1,
                    urls: require( '@src/assets/images/avatars/10.png' ).default
                },
                {
                    id: 2,
                    urls: require( '@src/assets/images/avatars/10.png' ).default
                }
            ],
            documents: ''


        },
        {
            id: 5,
            modelNo: '4369SMS32-5',
            division: 'Woven',
            department: 'Men',
            description: 'Style no 02 for Boys Division',
            buyer: {
                id: 3,
                name: 'H&M'
            },
            productCategory: 'Top',
            status: 'active',
            images: [
                {
                    id: 1,
                    urls: require( '@src/assets/images/avatars/4-small.png' ).default
                },
                {
                    id: 2,
                    urls: require( '@src/assets/images/avatars/10.png' ).default
                }
            ],
            documents: ''

        },
        {
            id: 6,
            modelNo: '4369SMS32-6',
            division: 'Woven',
            department: 'Men',
            description: 'Style no 02 for Boys Division',
            buyer: {
                id: 3,
                name: 'H&M'
            },
            productCategory: 'Top',
            status: 'active',
            images: [
                {
                    id: 1,
                    urls: require( '@src/assets/images/avatars/13-small.png' ).default
                },
                {
                    id: 2,
                    urls: require( '@src/assets/images/avatars/natural.jpg' ).default
                }
            ],
            documents: ''

        }


    ]
};

// GET ALL DATA
mock.onGet( `${merchandisingApi.style.get_styles}` ).reply( 200, data.styles );

// POST: Add new
mock.onPost( `${merchandisingApi.style.add_style}` ).reply( config => {
    // Get event from post data
    const style = JSON.parse( config.data );

    const { length } = data.styles;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.styles[length - 1].id;
    }
    style.id = randomIdGenerator();

    data.styles.unshift( style );

    return [201, { style }];
} );


// POST: Update 
// ------------------------------------------------
mock.onPost( `${merchandisingApi.style.update_style}` ).reply( config => {
    const updateStyle = JSON.parse( config.data ).style;

    // Convert Id to number
    updateStyle.id = Number( updateStyle.id );

    const style = data.styles.find( e => e.id === Number( updateStyle.id ) );
    Object.assign( style, updateStyle );

    return [200, { style }];
} );

// GET Updated DATA
mock.onGet( `${merchandisingApi.style.get_styles_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, division = null, status = null } = config;


    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.styles.filter(
        style =>
            style.modelNo.toLowerCase().includes( queryLowered ) &&
            style.division === ( division || style.division ) &&
            style.status === ( status || style.status )

    )
    /* eslint-enable  */

    return [
        200,
        {
            styles: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );

// GET  by Id for Edit or Details
mock.onGet( `${merchandisingApi.style.get_style_by_id}` ).reply( config => {
    const { id } = config;
    const style = data.styles.find( i => i.id === id );
    return [200, { style }];
} );

// DELETE: Deletes  Range
mock.onDelete( `${merchandisingApi.style.delete_styles_by_range}` ).reply( config => {
    // Get  id from URL
    const styleIds = config.ids;

    for ( let index = 0; index < styleIds.length; index++ ) {
        const id = styleIds[index];
        const styleIndex = data.styles.findIndex( t => t.id === id );
        data.styles.splice( styleIndex, 1 );
    }
    return [200];
} );

// DELETE: Deletes 
mock.onDelete( `${merchandisingApi.style.delete_style}` ).reply( config => {
    // Get user id from URL
    let styleId = config.id;

    // Convert Id to number
    styleId = Number( styleId );

    const styleIndex = data.styles.findIndex( t => t.id === styleId );
    data.styles.splice( styleIndex, 1 );

    return [200];
} );
