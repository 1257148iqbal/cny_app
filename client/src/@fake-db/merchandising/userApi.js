const { merchandisingApi } = require( '../../services/api-end-points/merchandising' );
const { randomIdGenerator } = require( '../../utility/Utils' );
const { default: mock } = require( '../mock' );
const { paginateArray } = require( '../utils' );


const data = {
    users: [
        {
            id: 1,
            fullName: 'Habibur Rahman',
            userName: 'habib',
            phoneNumber: '01811275653',
            email: 'habib@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',
                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Chittagong',
                zipCode: 4566,
                street: '201,Nasirabad'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default,
            module: [
                {
                    id: 1,
                    name: 'Production'
                },
                {
                    id: 2,
                    name: 'Inventory '
                }
            ],

            role: 'Admin'


        },

        {
            id: 3,
            fullName: 'Forhad Reza',
            userName: 'reza',
            phoneNumber: '02911275653',
            email: 'reza@gmail.com',
            fax: '22-61421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Chittagong',
                zipCode: 4568,
                street: '203,Halishohor'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default,
            module: [
                {
                    id: 1,
                    name: 'Merchandiser'
                },
                {
                    id: 2,
                    name: 'Inventory '
                }
            ],
            role: 'User'


        },
        {
            id: 4,
            fullName: 'Ashraful Islam',
            userName: 'ashraful',
            phoneNumber: '01719197175',
            email: 'ashraf@gmail.com',
            fax: '22-614214185',
            address: {
                address: 'Road no 2, Washington, Washington, United States',
                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Dhaka',
                zipCode: 4569,
                street: '204,Sersah'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default,
            module: [

                {
                    id: 1,
                    name: 'Inventory '
                }
            ],
            role: 'User'


        },
        {
            id: 5,
            fullName: 'Abdul Hamid',
            userName: 'hamid',
            phoneNumber: '01811275653',
            email: 'hamid@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',
                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Dhaka',
                zipCode: 4569,
                street: '204,Bayazid'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default,
            module: [
                {
                    id: 1,
                    name: 'Production'
                },
                {
                    id: 2,
                    name: 'Merchandiser '
                }
            ],
            role: 'Admin'

        }


    ]
};

//GET ALL DATA
mock.onGet( `${merchandisingApi.user.get_users}` ).reply( 200, data.users );

//POST: Add new User
mock.onPost( `${merchandisingApi.user.add_user}` ).reply( config => {
    //Get event from post data
    const user = JSON.parse( config.data );

    const { length } = data.users;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.users[length - 1].id;
    }
    user.id = randomIdGenerator();
    data.users.unshift( user );
    return [201, { user }];
} );

//POST:Update User

mock.onPost( `${merchandisingApi.user.update_user}` ).reply( config => {
    const updateUser = JSON.parse( config.data ).user;

    //Convert Id to number
    updateUser.id = Number( updateUser.id );

    const user = data.users.find( e => e.id === Number(
        updateUser.id
    ) );
    Object.assign( user
        , updateUser );
    return [200, { user }];
} );


//GET Updated DATA
mock.onGet( `${merchandisingApi.user.get_users_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );


        // const selectedStatus = status?.charAt( 0 ).toUpperCase() + status?.slice( 1 );


        const queryLowered = q.toLowerCase();

        const filteredData = data.users.filter(
            user => user.fullName.toLowerCase().includes(
                queryLowered
            ) &&
                user.address.country === ( selectedCountry || user.address.country ) &&
                user.status === ( status === '' ? user.status : status )
        );
        return [
            200, {
                user: paginateArray( filteredData, perPage, page ),
                total: filteredData.length
            }
        ];
    }
);

//GET sampleAssignee by ID for Edit or Details

mock.onGet( `${merchandisingApi.user.get_user_by_id}` ).reply( config => {
    const { id } = config;
    const user = data.users.find( i => i.id === id );
    return [200, user, { succeeded: true }];

} );

//DELETE:Deletes Sample Agent Range/Multiple

mock.onDelete( `${merchandisingApi.user.delete_users_by_range}` ).reply( config => {
    //Get user id from URL
    const userIds = config.ids;


    //Convert Id to number
    //productDeveloperIds = Number( productDeveloperIds );
    for ( let index = 0; index < userIds.length; index++ ) {
        const id = userIds[index];
        const userIndex = data.users.findIndex( t => t.id === id );
        data.users.splice( userIndex, 1 );
    }
    return [200];
} );


//DELETE:Deletes User
mock.onDelete( `${merchandisingApi.user.delete_user}` ).reply( config => {
    //Get user id from URL
    let userId = config.id;

    //Convert Id to Number
    userId = Number( userId );

    const userIndex = data.users.findIndex( t => t.id === userId );
    data.users.splice( userIndex, 1 );

    return [200];
} );