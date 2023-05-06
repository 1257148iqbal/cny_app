import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from '../utils';


const data = {
    styleCategories: [
        {
            id: 1,
            name: 'T-Shirt',
            description: 'This is Shirt Style Category',
            status: true


        },
        {
            id: 2,
            name: 'Short',
            description: 'This is Short Style Category',
            status: false

        },
        {
            id: 3,
            name: 'Pants',
            description: 'This is Ladies Pants Category',
            status: true

        },
        {
            id: 4,
            name: 'Capri',
            description: 'This is Capri Style Category',
            status: false

        }


    ]
};

//GET ALL DATA
mock.onGet( `${merchandisingApi.styleCategory.get_style_categories}` ).reply( 200, data.styleCategories );

//POST: Add new Style Category
mock.onPost( `${merchandisingApi.styleCategory.add_style_category}` ).reply( config => {
    //Get event from post data
    const styleCategory = JSON.parse( config.data );
    styleCategory.id = randomIdGenerator();
    data.styleCategories.unshift( styleCategory );
    return [
        200, {
            data: styleCategory,
            succeeded: true
        }
    ];
} );

//POST:Update Style Category
const urlGetForUpdate = new RegExp( `${merchandisingApi.styleCategory.update_style_category}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateStyleCategory = JSON.parse( config.data );
    // Convert Id to number
    updateStyleCategory.id = Number( updateStyleCategory.id );

    const styleCategory = data.styleCategories.find( e => e.id === Number( updateStyleCategory.id ) );
    Object.assign( styleCategory, updateStyleCategory );

    return [
        200, {
            data: styleCategory,
            succeeded: true
        }
    ];
} );


//GET Updated DATA
mock.onGet( `${merchandisingApi.styleCategory.get_style_categories_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.styleCategories.filter(
            styleCategory =>
                styleCategory.name.toLowerCase().includes( queryLowered )
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
    }
);
//GET Updated DATA
mock.onGet( `${merchandisingApi.styleCategory.get_style_categories_by_query}?page=1&perPage=10` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.styleCategories.filter(
            styleCategory =>
                styleCategory.name.toLowerCase().includes( queryLowered )
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
    }
);

// GET Style Category by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.styleCategory.get_style_category_by_id}/*` );

mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const styleCategory = data.styleCategories.find( i => i.id === id );
    return [200, styleCategory, { succeeded: true }];

} );

// DELETE: Deletes Style Category Range
mock.onDelete( `${merchandisingApi.styleCategory.delete_style_category_by_range}` ).reply( config => {
    // Get user id from URL
    const styleCategoryIds = config.ids;

    // // Convert Id to number


    for ( let index = 0; index < styleCategoryIds.length; index++ ) {
        const id = styleCategoryIds[index];
        const styleCategoryIndex = data.styleCategories.findIndex( t => t.id === id );
        data.styleCategories.splice( styleCategoryIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${merchandisingApi.styleCategory.delete_style_category}` ).reply( config => {
    // Get user id from URL
    let styleCategoryId = config.id;

    // Convert Id to number
    styleCategoryId = Number( styleCategoryId );

    const styleCategoryIndex = data.styleCategories.findIndex( t => t.id === styleCategoryId );
    data.styleCategories.splice( styleCategoryIndex, 1 );

    return [200];
} );