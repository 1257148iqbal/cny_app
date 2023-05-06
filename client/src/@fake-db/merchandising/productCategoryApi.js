import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from '../utils';


const data = {
    productCategories: [
        {
            id: 1,
            name: 'Top',
            styleCategoryIds: [1],
            description: 'This is Top Product Category',
            status: true


        },
        {
            id: 2,
            name: 'Top Ladies',
            styleCategoryIds: [1, 2],
            description: 'This is Top Ladies Product Category',
            status: false

        },
        {
            id: 3,
            name: 'Top Kids',
            styleCategoryIds: [1, 2],
            description: 'This is  Top Kids Product Category',
            status: true

        }


    ]
};

//GET ALL DATA
mock.onGet( `${merchandisingApi.productCategory.get_product_categories}` ).reply( 200, data.productCategories );

//POST: Add new Product Category
mock.onPost( `${merchandisingApi.productCategory.add_product_category}` ).reply( config => {
    //Get event from post data
    const productCategory = JSON.parse( config.data );

    const { length } = data.productCategories;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.productCategories[length - 1].id;
    }
    productCategory.id = randomIdGenerator();
    data.productCategories.unshift( productCategory );
    return [200, { productCategory }];
} );

//POST:Update Product Category
const urlGetForUpdate = new RegExp( `${merchandisingApi.productCategory.update_product_category}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateProductCategory = JSON.parse( config.data );

    //Convert Id to number
    updateProductCategory.id = Number( updateProductCategory.id );

    const productCategory = data.productCategories.find( e => e.id === Number(
        updateProductCategory.id
    ) );
    Object.assign( productCategory, updateProductCategory );
    return [200, { productCategory }];
} );


//GET Updated DATA
mock.onGet( `${merchandisingApi.productCategory.get_product_categories_by_query}?page=1&perPage=10` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.productCategories.filter(
            productCategory =>
                productCategory.name.toLowerCase().includes( queryLowered )
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
mock.onGet( `${merchandisingApi.productCategory.get_product_categories_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.productCategories.filter(
            productCategory =>
                productCategory.name.toLowerCase().includes( queryLowered )
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

// GET Product Category by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.productCategory.get_product_category_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const productCategory = data.productCategories.find( i => i.id === id );
    return [200, productCategory, { succeeded: true }];

} );

// DELETE: Deletes Product Category Range
mock.onDelete( `${merchandisingApi.productCategory.delete_product_category_by_range}` ).reply( config => {
    // Get user id from URL
    const productCategoryIds = config.ids;

    // // Convert Id to number


    for ( let index = 0; index < productCategoryIds.length; index++ ) {
        const id = productCategoryIds[index];
        const productCategoryIndex = data.productCategories.findIndex( t => t.id === id );
        data.productCategories.splice( productCategoryIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${merchandisingApi.productCategory.delete_product_category}` ).reply( config => {
    // Get user id from URL
    let productCategoryId = config.id;

    // Convert Id to number
    productCategoryId = Number( productCategoryId );

    const productCategoryIndex = data.productCategories.findIndex( t => t.id === productCategoryId );
    data.productCategories.splice( productCategoryIndex, 1 );

    return [200];
} );