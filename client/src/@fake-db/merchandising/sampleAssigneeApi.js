import { merchandisingApi } from "@api/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';


const data = {
    sampleAssignees: [
        {
            id: 1,
            fullName: 'Arif Hossain',
            phoneNumber: '01811275653',
            email: 'arif@gmail.com',
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
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 2,
            fullName: 'Atiur Rahman',
            phoneNumber: '01811275653',
            email: 'atiur@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Chittagong',
                zipCode: 4567,
                street: '202,GEC'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 3,
            fullName: 'Forhad Reza',
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
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 4,
            fullName: 'Ashraful Islam',
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
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 5,
            fullName: 'AbdulHamid',
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
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 6,
            fullName: 'Mehedi Hasan',
            phoneNumber: '01811275653',
            email: 'mehedi@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Chittagong',
                zipCode: 4566,
                street: '201,Hathazari'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 7,
            fullName: 'Md. Anisur Rahman',
            phoneNumber: '02911275653',
            email: 'anis@gmail.com',
            fax: '22-61421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Chittagong',
                zipCode: 4566,
                street: '201,Agrabad'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 8,
            fullName: 'Jahir Ahmed',
            phoneNumber: '01811275653',
            email: 'jahir@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Cumilla',
                zipCode: 4566,
                street: '201,Kot Bari'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 9,
            fullName: 'Md. Rayhan ',
            phoneNumber: '01811275653',
            email: 'rayhan@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Chittagong',
                zipCode: 4566,
                street: '201,Boalkhali'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 10,
            fullName: 'Md. Shakil Ahmed',
            phoneNumber: '01811275653',
            email: 'shakil@gmail.com',
            fax: '32-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Feni',
                zipCode: 4566,
                street: '201,Feni Sadar'
            },
            status: false,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        },
        {
            id: 11,
            fullName: 'Abdur Rahman',
            phoneNumber: '01811275653',
            email: 'rahman@gmail.com',
            fax: '22-21421411',
            address: {
                address: 'Road no 2, Washington, Washington, United States',

                country: 'Bangladesh',
                state: 'Bangladesh',
                city: 'Dhaka',
                zipCode: 4566,
                street: '201,Airport'
            },
            status: true,
            photo: require( '@src/assets/images/avatars/10.png' ).default

        }

    ]
};

//GET ALL DATA
mock.onGet( `${merchandisingApi.sampleAssignee.get_sample_assignees}` ).reply( 200, data.sampleAssignees );

//POST: Add new Sample Assignee
mock.onPost( `${merchandisingApi.sampleAssignee.add_sample_assignee}` ).reply( config => {
    //Get event from post data
    const sampleAssignee = JSON.parse( config.data );
    sampleAssignee.id = randomIdGenerator();
    data.sampleAssignees.unshift( sampleAssignee );
    return [200, { data: sampleAssignee, succeeded: true }];
} );

//POST:Update Sample Assignee
const urlGetForUpdate = new RegExp( `${merchandisingApi.sampleAssignee.update_sample_assignee}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateSampleAssignee = JSON.parse( config.data );
    //Convert Id to number
    updateSampleAssignee.id = Number( updateSampleAssignee.id );

    const sampleAssignee = data.sampleAssignees.find( e => e.id === Number(
        updateSampleAssignee.id
    ) );
    Object.assign( sampleAssignee, updateSampleAssignee );
    return [200, { data: sampleAssignee, succeeded: true }];
} );


//GET Updated DATA
mock.onGet( `${merchandisingApi.sampleAssignee.get_sample_assignees_by_query}?page=1&perPage=10` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );

        const queryLowered = q.toLowerCase();

        const filteredData = data.sampleAssignees.filter(
            sampleAssignee => sampleAssignee.fullName.toLowerCase().includes(
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
//GET Updated DATA
mock.onGet( `${merchandisingApi.sampleAssignee.get_sample_assignees_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, country = null, status = null } = config;

        const selectedCountry = country?.charAt( 0 ).toUpperCase() + country?.slice( 1 );

        const queryLowered = q.toLowerCase();

        const filteredData = data.sampleAssignees.filter(
            sampleAssignee => sampleAssignee.fullName.toLowerCase().includes(
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
const urlGet = new RegExp( `${merchandisingApi.sampleAssignee.get_sample_assignee_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const sampleAssignee = data.sampleAssignees.find( i => i.id === id );
    return [200, sampleAssignee, { succeeded: true }];

} );

//DELETE:Deletes Sample Agent Range/Multiple

mock.onDelete( `${merchandisingApi.sampleAssignee.delete_sample_assignee_by_range}` ).reply( config => {
    //Get user id from URL
    const sampleAssigneeIds = config.ids;


    //Convert Id to number
    //sampleAssigneeIds = Number( sampleAssigneeIds );
    for ( let index = 0; index < sampleAssigneeIds.length; index++ ) {
        const id = sampleAssigneeIds[index];
        const sampleAssigneeIndex = data.sampleAssignees.findIndex( t => t.id === id );
        data.sampleAssignees.splice( sampleAssigneeIndex, 1 );
    }
    return [200];
} );


//DELETE:Deletes BuyerAgent
mock.onDelete( `${merchandisingApi.sampleAssignee.delete_sample_assignee}` ).reply( config => {
    //Get user id from URL
    let sampleAssigneeId = config.id;

    //Convert Id to Number
    sampleAssigneeId = Number( sampleAssigneeId );

    const sampleAssigneeIndex = data.sampleAssignees.findIndex( t => t.id === sampleAssigneeId );
    data.sampleAssignees.splice( sampleAssigneeIndex, 1 );

    return [200];
} );