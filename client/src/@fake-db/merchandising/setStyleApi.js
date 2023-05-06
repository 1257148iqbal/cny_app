
import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';

const data = {
    setStyles: [
        {
            id: 1,
            styleNo: '4369SMS32-A',
            nestedStyle: [
                {
                    id: 1,
                    styleNo: '4369SMS32-1',
                    productCategory: {
                        id: 1,
                        categoryName: 'Top'
                    },
                    styleCategory: {
                        id: 1,
                        categoryName: 'DRESS'
                    },
                    sizeRange: '2T-3T-4T-5-6-7',
                    colors: 'PINK',
                    documents: [],
                    images: []
                }
            ],
            buyer: {
                id: 1,
                buyerName: 'BABYFAIR'
            },
            session: {
                id: 1,
                sessionName: 'Autumn-21'
            },
            year: {
                id: 1,
                yearName: '2021'
            },
            documents: [],
            images: [],
            status: 'active'
        }

    ]
};

// GET ALL DATA
mock.onGet( `${merchandisingApi.setStyle.get_setStyles}` ).reply( 200, data.setStyles );

// POST: Add New
mock.onPost( `${merchandisingApi.setStyle.add_setStyle}` ).reply( config => {
    // Get event from post data
    const setStyle = JSON.parse( config.data );
    setStyle.id = randomIdGenerator();
    data.setStyles.unshift( setStyle );

    return [201, { setStyle }];
} );


// POST: Update
// ------------------------------------------------
mock.onPost( `${merchandisingApi.setStyle.update_setStyle}` ).reply( config => {
    const updatesetStyle = JSON.parse( config.data ).setStyle;

    // Convert Id to number
    updatesetStyle.id = Number( updatesetStyle.id );

    const setStyle = data.setStyles.find( e => e.id === Number( updatesetStyle.id ) );
    Object.assign( setStyle, updatesetStyle );

    return [200, { setStyle }];
} );

// GET Updated DATA
mock.onGet( `${merchandisingApi.setStyle.get_setStyles_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    const queryLowered = q.toLowerCase();
    const filteredData = data.setStyles.filter(
        setStyle => setStyle.styleNo.toLowerCase().includes( queryLowered ) &&
            setStyle.status === ( status || setStyle.status )
    );
    return [
        200,
        {
            setStyles: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );

// GET Buyer by Id for Edit or Details
mock.onGet( `${merchandisingApi.setStyle.get_setStyle_by_id}` ).reply( config => {
    const { id } = config;
    const setStyle = data.setStyles.find( i => i.id === id );
    return [200, { setStyle }];
} );

// DELETE: Deletes Range
mock.onDelete( `${merchandisingApi.setStyle.delete_setStyles_by_range}` ).reply( config => {
    // Get id from URL
    const styleIds = config.ids;

    for ( let index = 0; index < styleIds.length; index++ ) {
        const id = styleIds[index];
        const styleIndex = data.setStyles.findIndex( t => t.id === id );
        data.setStyles.splice( styleIndex, 1 );
    }
    return [200];
} );

// DELETE: Deletes
mock.onDelete( `${merchandisingApi.setStyle.delete_setStyle}` ).reply( config => {
    // Get user id from URL
    let setStyleId = config.id;

    // Convert Id to number
    setStyleId = Number( setStyleId );

    const setStyleIndex = data.setStyles.findIndex( t => t.id === setStyleId );
    data.setStyles.splice( setStyleIndex, 1 );

    return [200];
} );
