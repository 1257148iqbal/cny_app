const { merchandisingApi } = require( '../../services/api-end-points/merchandising' );
const { randomIdGenerator } = require( '../../utility/Utils' );
const { default: mock } = require( '../mock' );
const { paginateArray } = require( '../utils' );


const data = {
    merchandisers: [
        {
            id: 1,
            firstName: 'Ikram',
            lastName: 'Hossain',
            phoneNumber: '01811275653',
            name: 'Ikram Hossain',
            email: 'ikram@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',
                country: 'United States',
                state: 'Washington',
                city: 'Washington',
                zipCode: 4566,
                street: '201,Washington'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 2,
            name: 'Shafik Mahmud',
            firstName: 'Shafik',
            lastName: 'Mahmud',
            phoneNumber: '01811275653',
            email: 'shafik@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Canada',
                state: 'Tor0nto',
                city: 'Toronto',
                zipCode: 4567,
                street: '202,Toronto'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 3,
            name: 'Abu Bakar',
            firstName: 'Abu',
            lastName: 'Bakar',
            phoneNumber: '02911275653',
            email: 'abubakar@gmail.com',
            fax: '22-61421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'United Kingdom',
                state: 'United Kingdom',
                city: 'London',
                zipCode: 4568,
                street: '203,London'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 4,
            name: 'Saint Mendel',
            firstName: 'Saint',
            lastName: 'Mendel',
            phoneNumber: '02911275653',
            email: 'saint@gmail.com',
            fax: '22-61421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'United Kingdom',
                state: 'United Kingdom',
                city: 'London',
                zipCode: 4568,
                street: '203,London'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 5,
            name: 'Harry Potter',
            firstName: 'Harry',
            lastName: 'Potter',
            phoneNumber: '01811275653',
            email: 'harry@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Canada',
                state: 'Tor0nto',
                city: 'Toronto',
                zipCode: 4567,
                street: '202,Toronto'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 6,
            name: 'Tomas Monin',
            firstName: 'Tomas',
            lastName: 'Monin',
            phoneNumber: '01811275653',
            email: 'tomas@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'United States',
                state: 'Washington',
                city: 'Washington',
                zipCode: 4566,
                street: '201,Washington'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 7,
            name: 'Leo Sarif',
            firstName: 'Leo',
            lastName: 'Sarif',
            phoneNumber: '02911275653',
            email: 'leo@gmail.com',
            fax: '22-61421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'United Kingdom',
                state: 'United Kingdom',
                city: 'London',
                zipCode: 4568,
                street: '203,London'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 8,
            name: 'Jack Momin',
            firstName: 'Jack',
            lastName: 'Momin',
            phoneNumber: '01811275653',
            email: 'jack@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Canada',
                state: 'Tor0nto',
                city: 'Toronto',
                zipCode: 4567,
                street: '202,Toronto'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 9,
            name: 'Theodor Shelly',
            firstName: 'Theodor',
            lastName: 'Shelly',
            phoneNumber: '01811275653',
            email: 'theodor@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'United States',
                state: 'Washington',
                city: 'Washington',
                zipCode: 4566,
                street: '201,Washington'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 10,
            name: 'Merry Mahmud',
            firstName: 'Merry',
            lastName: 'Mahmud',
            phoneNumber: '01811275653',
            email: 'merry@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Canada',
                state: 'Tor0nto',
                city: 'Toronto',
                zipCode: 4567,
                street: '202,Toronto'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 11,
            name: 'Jaklin Jemmy',
            firstName: 'Jaklin',
            lastName: 'Jemmy',
            phoneNumber: '01811275653',
            email: 'jaklin@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'United States',
                state: 'Washington',
                city: 'Washington',
                zipCode: 4566,
                street: '201,Washington'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        }


    ]
};


//GET ALL DATA

mock.onGet( `${merchandisingApi.merchandiser.get_merchandisers}` ).reply( 200, data.merchandisers );

//POST: Add new Merchandiser
mock.onPost( `${merchandisingApi.merchandiser.add_merchandiser}` ).reply( config => {
    //Get event from post data
    const merchandiser = JSON.parse( config.data );

    const { length } = data.merchandisers;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.merchandisers[length - 1].id;
    }
    merchandiser.id = randomIdGenerator();
    data.merchandisers.unshift( merchandiser );
    return [
        200,
        {
            merchandiser,
            succeeded: true
        }
    ];
} );


//POST:Update Merchandiser

mock.onPut( `${merchandisingApi.merchandiser.update_merchandiser}` ).reply( config => {
    const updateMerchandiser = JSON.parse( config.data ).merchandiser;

    //Convert Id to number
    updateMerchandiser.id = Number( updateMerchandiser.id );

    const merchandiser = data.merchandisers.find( e => e.id === Number(
        updateMerchandiser.id
    ) );
    Object.assign( merchandiser, updateMerchandiser );
    return [
        200, {
            merchandiser,
            succeeded: true
        }
    ];
} );


//GET Updated DATA
mock.onGet( `${merchandisingApi.merchandiser.get_merchandisers_by_query}?page=1&perPage=10` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );


        // const selectedStatus = status?.charAt( 0 ).toUpperCase() + status?.slice( 1 );


        const queryLowered = q.toLowerCase();

        const filteredData = data.merchandisers.filter(
            merchandiser => merchandiser.firstName.toLowerCase().includes(
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


//GET merchandiser by ID for Edit or Details

mock.onGet( `${merchandisingApi.merchandiser.get_merchandiser_by_id}` ).reply( config => {
    const { id } = config;
    const merchandiser = data.merchandisers.find( i => i.id === id );
    return [200, { merchandiser }];
} );


//DELETE:Deletes Merchandiser Range/Multiple

mock.onDelete( `${merchandisingApi.merchandiser.delete_merchandiser_by_range}` ).reply( config => {
    //Get user id from URL
    const merchandiserIds = config.ids;


    //Convert Id to number
    //merchandiserIds = Number( merchandiserIds );
    for ( let index = 0; index < merchandiserIds.length; index++ ) {
        const id = merchandiserIds[index];
        const merchandiserIndex = data.merchandisers.findIndex( t => t.id === id );
        data.merchandisers.splice( merchandiserIndex, 1 );
    }
    return [200];
} );


//DELETE:Deletes Merchandiser
mock.onDelete( `${merchandisingApi.merchandiser.delete_merchandiser}` ).reply( config => {
    //Get user id from URL
    let merchandiserId = config.id;

    //Convert Id to Number
    merchandiserId = Number( merchandiserId );

    const merchandiserIndex = data.merchandisers.findIndex( t => t.id === merchandiserId );
    data.merchandisers.splice( merchandiserIndex, 1 );

    return [200];
} );
