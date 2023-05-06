const { merchandisingApi } = require( '../../services/api-end-points/merchandising' );
const { default: mock } = require( '../mock' );
import { randomIdGenerator } from "../../utility/Utils";
import { paginateArray } from '../utils';

const data = {
    productDevelopers: [
        {
            id: 1,
            name: 'Arif Hossain',
            shortName: 'Arif',
            phoneNumber: '01811275653',
            email: 'arif@gmail.com',
            fax: '22-21421411',

            address: 'Road no 2, Washington, Washington, United States',
            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Chittagong',
            zipCode: 4566,
            street: '201,Nasirabad',
            buyer: 'Yousuf Hossain',
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },

        {
            id: 3,
            name: 'Forhad Reza',
            shortName: 'Reza',
            phoneNumber: '02911275653',
            email: 'reza@gmail.com',
            fax: '22-61421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Chittagong',
            zipCode: 4568,
            street: '203,Halishohor',
            buyer: 'Milon Mahmud',
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 4,
            name: 'Ashraful Islam',
            shortName: 'Islam',
            phoneNumber: '01719197175',
            email: 'ashraf@gmail.com',
            fax: '22-614214185',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Dhaka',
            zipCode: 4569,
            street: '204,Sersah',
            buyer: 'Rasel Siddique',
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 5,
            name: 'Abdul Hamid',
            shortName: 'Hamid',
            phoneNumber: '01811275653',
            email: 'hamid@gmail.com',
            fax: '32-21421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Dhaka',
            zipCode: 4569,
            street: '204,Bayazid',
            buyer: 'Faisal Wahid',
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 6,
            name: 'Mehedi Hasan',
            shortName: 'Hasan',
            phoneNumber: '01811275653',
            email: 'mehedi@gmail.com',
            fax: '22-21421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Chittagong',
            zipCode: 4566,
            street: '201,Hathazari',
            buyer: 'Rahim Mahmud',
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 7,
            name: 'Md. Anisur Rahman',
            shortName: 'Anisur',
            phoneNumber: '02911275653',
            email: 'anis@gmail.com',
            fax: '22-61421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Chittagong',
            zipCode: 4566,
            street: '201,Agrabad',
            buyer: 'Tanjida Sanita',
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 8,
            name: 'Jahir Ahmed',
            shortName: 'Jahir',
            phoneNumber: '01811275653',
            email: 'jahir@gmail.com',
            fax: '32-21421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Cumilla',
            zipCode: 4566,
            street: '201,Kot Bari',

            buyer: 'Sawon Ahmed',
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 9,
            name: 'Md. Rayhan ',
            shortName: 'Rayhan',
            phoneNumber: '01811275653',
            email: 'rayhan@gmail.com',
            fax: '22-21421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Chittagong',
            zipCode: 4566,
            street: '201,Boalkhali',
            buyer: 'Zahedul Islam',
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 10,
            name: 'Md. Shakil Ahmed',
            shortName: 'Shakil',
            phoneNumber: '01811275653',
            email: 'shakil@gmail.com',
            fax: '32-21421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Feni',
            zipCode: 4566,
            street: '201,Feni Sadar',
            buyer: 'Fahim Rahman',
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 11,
            name: 'Abdur Rahman',
            shortName: 'Rahman',
            phoneNumber: '01811275653',
            email: 'rahman@gmail.com',
            fax: '22-21421411',

            address: 'Road no 2, Washington, Washington, United States',

            country: 'Bangladesh',
            state: 'Bangladesh',
            city: 'Dhaka',
            zipCode: 4566,
            street: '201,Airport',
            buyer: 'Akter Hossain',
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        }

    ]
};
//GET ALL DATA
mock.onGet( `${merchandisingApi.productDeveloper.get_product_developers}` ).reply( 200, data.productDevelopers );

//POST: Add new Product Developer
mock.onPost( `${merchandisingApi.productDeveloper.add_product_developer}` ).reply( config => {
    //Get event from post data
    const productDeveloper = JSON.parse( config.data );

    const { length } = data.productDevelopers;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.productDevelopers[length - 1].id;
    }
    productDeveloper.id = randomIdGenerator();
    data.productDevelopers.unshift( productDeveloper );
    return [
        200, {
            data: productDeveloper,
            succeeded: true
        }
    ];
} );

//POST:Update Product Developer
const urlGetForUpdate = new RegExp( `${merchandisingApi.productDeveloper.update_product_developer}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateProductDeveloper = JSON.parse( config.data ).productDeveloper;
    //Convert Id to number
    updateProductDeveloper.id = Number( updateProductDeveloper.id );

    const productDeveloper = data.productDevelopers.find( e => e.id === Number(
        updateProductDeveloper.id
    ) );
    Object.assign( productDeveloper, updateProductDeveloper );
    return [
        200, {
            data: productDeveloper,
            succeeded: true
        }
    ];
} );


//GET Updated DATA
mock.onGet( `${merchandisingApi.productDeveloper.get_product_developers_by_query}?page=1&perPage=10` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );


        // const selectedStatus = status?.charAt( 0 ).toUpperCase() + status?.slice( 1 );


        const queryLowered = q.toLowerCase();

        const filteredData = data.productDevelopers.filter(
            productDeveloper => productDeveloper.name.toLowerCase().includes(
                queryLowered
            )
        );
        return [
            200, {
                data: paginateArray( filteredData, perPage, page ),
                total: filteredData.length,
                succeeded: true
            }
        ];
    }
);

//GET sampleAssignee by ID for Edit or Details

mock.onGet( `${merchandisingApi.productDeveloper.get_product_developer_by_id}` ).reply( config => {
    const { id } = config;
    const productDeveloper = data.productDevelopers.find( i => i.id === id );
    return [200, productDeveloper, { succeeded: true }];
} );

//DELETE:Deletes Sample Agent Range/Multiple

mock.onDelete( `${merchandisingApi.productDeveloper.delete_product_developer_by_range}` ).reply( config => {
    //Get user id from URL
    const productDeveloperIds = config.ids;


    //Convert Id to number
    //productDeveloperIds = Number( productDeveloperIds );
    for ( let index = 0; index < productDeveloperIds.length; index++ ) {
        const id = productDeveloperIds[index];
        const productDeveloperIndex = data.productDevelopers.findIndex( t => t.id === id );
        data.productDevelopers.splice( productDeveloperIndex, 1 );
    }
    return [200];
} );

//DELETE:Deletes Product Developer
mock.onDelete( `${merchandisingApi.productDeveloper.delete_product_developer}` ).reply( config => {
    //Get user id from URL
    let productDeveloperId = config.id;

    //Convert Id to Number
    productDeveloperId = Number( productDeveloperId );

    const productDeveloperIndex = data.productDevelopers.findIndex( t => t.id === productDeveloperId );
    data.productDevelopers.splice( productDeveloperIndex, 1 );

    return [200];
} );