import { merchandisingApi } from "@api/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';

const data = {
    buyers: [
        {
            id: 1,
            name: 'Yousuf Hossain',
            shortName: 'Yousuf',
            phoneNumber: '01811275653',
            email: 'yousuf@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 2,
            name: 'Milon Mahmud',
            shortName: 'Mahmud',
            phoneNumber: '01711275653',
            email: 'milon@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Ladies'
                },
                {
                    id: 2,
                    name: 'Gents '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 3,
            name: 'Rasel Siddique',
            phoneNumber: '02911275653',
            email: 'rasel@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Gents'
                }

            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 4,
            name: 'Faisal Wahid',
            phoneNumber: '01821275653',
            email: 'faisal@gmail.com',
            fax: '22-27421411',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 5,
            name: 'Rahim Mahmud',
            phoneNumber: '01811275653',
            email: 'rahim@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [

                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 6,
            name: 'Tanjida Sanita',
            phoneNumber: '01811275653',
            email: 'tanjidasanita@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Ladies'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 7,
            name: 'Sawon Ahmed',
            phoneNumber: '01811275653',
            email: 'sawonahmed@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Gents '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 8,
            name: 'Zahedul Islam',
            phoneNumber: '01811275653',
            email: 'zahedul@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 9,
            name: 'Fahim Rahman',
            phoneNumber: '01811275653',
            email: 'fahim@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 10,
            name: 'Akter Hossain',
            phoneNumber: '01811275653',
            email: 'akter@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                }

            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 11,
            name: 'Rahima Begum',
            phoneNumber: '01811275653',
            email: 'rahima@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 12,
            name: 'Shaleh Hossain',
            phoneNumber: '01811275653',
            email: 'shaleh@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Ladies '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 13,
            name: 'Shakib Abdullah',
            phoneNumber: '01811275653',
            email: 'sakib@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            avatar: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 14,
            name: 'Hamid Karim',
            phoneNumber: '01911275953',
            email: 'hamid@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Boys'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 15,
            name: 'Sunaira Jahan',
            phoneNumber: '01811275658',
            email: 'sunaira@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            buyerDepartment: [
                {
                    id: 1,
                    name: 'Gents'
                },
                {
                    id: 2,
                    name: 'Girls '
                }
            ],
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        }
    ]
};

// GET ALL DATA
mock.onGet( `${merchandisingApi.buyer.get_buyers}` ).reply( 200, data.buyers );

// POST: Add new Buyer
mock.onPost( `${merchandisingApi.buyer.add_buyer}` ).reply( config => {
    // Get event from post data
    const buyer = JSON.parse( config.data );

    const { length } = data.buyers;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.buyers[length - 1].id;

    }
    buyer.id = randomIdGenerator();

    data.buyers.unshift( buyer );
    return [200, buyer.id];
} );


// POST: Update Buyer
const urlGetForUpdate = new RegExp( `${merchandisingApi.buyer.update_buyer}/*` );

mock.onPut( urlGetForUpdate ).reply( config => {
    const updateBuyer = JSON.parse( config.data );
    // Convert Id to number
    updateBuyer.id = Number( updateBuyer.id );

    const buyer = data.buyers.find( e => e.id === Number( updateBuyer.id ) );
    Object.assign( buyer, updateBuyer );

    return [
        200, {
            data: buyer,
            succeeded: true
        }
    ];
} );

// GET Updated DATA

mock.onGet( `${merchandisingApi.buyer.get_buyers_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

    const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.buyers.filter(
        buyer =>
            buyer.name.toLowerCase().includes( queryLowered )
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
mock.onGet( `${merchandisingApi.buyer.get_buyers_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

    const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.buyers.filter(
        buyer =>
            buyer.name.toLowerCase().includes( queryLowered )
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

//GET Buyer by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.buyer.get_buyer_by_id}/*` );

mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const buyer = data.buyers.find( i => i.id === id );
    return [200, buyer, { succeeded: true }];
} );

// DELETE: Deletes Buyer Range
mock.onDelete( `${merchandisingApi.buyer.delete_buyer_by_range}` ).reply( config => {
    // Get user id from URL
    const buyerIds = config.ids;

    // // Convert Id to number
    // buyerId = Number( buyerId );

    for ( let index = 0; index < buyerIds.length; index++ ) {
        const id = buyerIds[index];
        const buyerIndex = data.buyers.findIndex( t => t.id === id );
        data.buyers.splice( buyerIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Buyer
mock.onDelete( `${merchandisingApi.buyer.delete_buyer}` ).reply( config => {
    // Get user id from URL
    let buyerId = config.id;

    // Convert Id to number
    buyerId = Number( buyerId );

    const buyerIndex = data.buyers.findIndex( t => t.id === buyerId );
    data.buyers.splice( buyerIndex, 1 );

    return [200];
} );
