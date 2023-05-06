import { merchandisingApi } from "@api/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';


const data = {
    buyerAgents: [
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
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 2,
            name: 'Atiur Rahman',
            phoneNumber: '01811275653',
            email: 'atiur@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 3,
            name: 'Forhad Reza',
            phoneNumber: '02911275653',
            email: 'reza@gmail.com',
            fax: '22-61421411',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 4,
            name: 'Ashraful Islam',
            phoneNumber: '01719197175',
            email: 'ashraf@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 5,
            name: 'AbdulHamid',
            phoneNumber: '01811275653',
            email: 'hamid@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 6,
            name: 'Mehedi Hasan',
            phoneNumber: '01811275653',
            email: 'mehedi@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 7,
            name: 'Md. Anisur Rahman',
            phoneNumber: '02911275653',
            email: 'anis@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 8,
            name: 'Jahir Ahmed',
            phoneNumber: '01811275653',
            email: 'jahir@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 9,
            name: 'Md. Rayhan ',
            phoneNumber: '01811275653',
            email: 'rayhan@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 10,
            name: 'Md. Shakil Ahmed',
            phoneNumber: '01811275653',
            email: 'shakil@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default
        },
        {
            id: 11,
            name: 'Abdur Rahman',
            phoneNumber: '01811275653',
            email: 'rahman@gmail.com',
            fullAddress: 'Road no 2, Washington, Washington, United States',
            country: 'United States',
            state: 'Washington',
            city: 'Washington',
            postalCode: 4566,
            status: true,
            imageUrl: require( '@src/assets/images/avatars/10.png' ).default

        }

    ]
};
//GET ALL DATA
mock.onGet( `${merchandisingApi.buyerAgent.get_buyer_agents}` ).reply( 200, data.buyerAgents );

//POST: Add new buyerAgent
mock.onPost( `${merchandisingApi.buyerAgent.add_buyer_agent}` ).reply( config => {
    //Get event from post data
    const buyerAgent = JSON.parse( config.data );

    const { length } = data.buyerAgents;
    // let lastIndex = 0;
    // if ( length ) {
    //     lastIndex = data.buyerAgents[length - 1].id;
    // }
    buyerAgent.id = randomIdGenerator();
    data.buyerAgents.unshift( buyerAgent );
    return [
        200, {
            data: buyerAgent,
            succeeded: true
        }
    ];
} );

//PUT:Update buyerAgent
const urlGetForUpdate = new RegExp( `${merchandisingApi.buyerAgent.update_buyer_agent}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updatebuyerAgent = JSON.parse( config.data );
    //Convert Id to number
    updatebuyerAgent.id = Number( updatebuyerAgent.id );

    const buyerAgent = data.buyerAgents.find( e => e.id === Number(
        updatebuyerAgent.id
    ) );
    Object.assign( buyerAgent, updatebuyerAgent );
    return [
        200, {
            data: buyerAgent,
            succeeded: true
        }
    ];
} );


//GET Updated DATA
// const urlGetForQuery = new RegExp( `${merchandisingApi.buyerAgent.get_buyer_agents_by_query}?page=1?perPage=10` );
mock.onGet( `${merchandisingApi.buyerAgent.get_buyer_agents_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, country = null, status = null } = config;
    const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );
    // const selectedStatus = status?.charAt( 0 ).toUpperCase() + status?.slice( 1 );
    const queryLowered = q.toLowerCase();

    const filteredData = data.buyerAgents.filter(
        buyerAgent => buyerAgent.name.toLowerCase().includes( queryLowered )
    );

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


//GET buyerAgent by ID for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.buyerAgent.get_buyer_agent_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const buyerAgent = data.buyerAgents.find( i => i.id === id );
    return [200, buyerAgent, { succeeded: true }];

} );


//DELETE:Deletes buyer Agent Range/Multiple

mock.onDelete( `${merchandisingApi.buyerAgent.delete_buyer_agent_by_range}` ).reply( config => {
    //Get user id from URL
    const buyerAgentIds = config.ids;


    //Convert Id to number
    //buyerAgentIds = Number( buyerAgentIds );
    for ( let index = 0; index < buyerAgentIds.length; index++ ) {
        const id = buyerAgentIds[index];
        const buyerAgentIndex = data.buyerAgents.findIndex( t => t.id === id );
        data.buyerAgents.splice( buyerAgentIndex, 1 );
    }
    return [200];
} );


//DELETE:Deletes BuyerAgent
mock.onDelete( `${merchandisingApi.buyerAgent.delete_buyer_agent}` ).reply( config => {
    //Get user id from URL
    let buyerAgentId = config.id;

    //Convert Id to Number
    buyerAgentId = Number( buyerAgentId );

    const buyerAgentIndex = data.buyerAgents.findIndex( t => t.id === buyerAgentId );
    data.buyerAgents.splice( buyerAgentIndex, 1 );

    return [200];
} );
