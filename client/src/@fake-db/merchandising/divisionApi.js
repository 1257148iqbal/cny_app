import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    divisions: [
        {
            id: 1,
            name: 'Knit',
            styleDepartments: [
                {
                    id: 1,
                    name: 'Style Depterment 01'
                },
                {
                    id: 2,
                    name: 'Style Depterment 02'
                }
            ],
            styleDepartmentIds: [],
            description: 'This is Knit division',
            status: true


        },
        {
            id: 2,
            name: 'Woven',
            styleDepartments: [
                {
                    id: 1,
                    name: 'Style Depterment 01'
                }
            ],
            styleDepartmentIds: [],
            description: 'This is Woven division',
            status: false

        }


    ]
};

mock.onGet( `${merchandisingApi.division.get_divisions}` ).reply( 200, data.divisions );

// POST: Add new Division
mock.onPost( `${merchandisingApi.division.add_division}` ).reply( config => {
    // Get event from post data
    const division = JSON.parse( config.data );
    division.id = randomIdGenerator();

    data.divisions.unshift( division );

    return [
        200, {
            data: division,
            succeeded: true
        }
    ];
} );

// POST: Update Division
const urlGetForUpdate = new RegExp( `${merchandisingApi.division.update_division}/*` );

mock.onPut( urlGetForUpdate ).reply( config => {
    const updateDivision = JSON.parse( config.data );

    // Convert Id to number
    updateDivision.id = Number( updateDivision.id );

    const division = data.divisions.find( e => e.id === Number( updateDivision.id ) );
    Object.assign( division, updateDivision );

    return [
        200, {
            data: division,
            succeeded: true
        }
    ];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.division.get_divisions_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;


    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.divisions.filter(
        division =>
            division.name.toLowerCase().includes( queryLowered )
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


// GET Division by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.division.get_division_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const division = data.divisions.find( i => i.id === id );
    return [200, division, { succeeded: true }];

} );


// DELETE: Deletes Division Range
mock.onDelete( `${merchandisingApi.division.delete_division_by_range}` ).reply( config => {
    // Get user id from URL
    const divisionIds = config.ids;

    // // Convert Id to number
    // divisionId = Number( divisionId );

    for ( let index = 0; index < divisionIds.length; index++ ) {
        const id = divisionIds[index];
        const divisionIndex = data.divisions.findIndex( t => t.id === id );
        data.divisions.splice( divisionIndex, 1 );
    }


    return [200];
} );


// DELETE: Deletes Division
mock.onDelete( `${merchandisingApi.division.delete_division}` ).reply( config => {
    // Get user id from URL
    let divisionId = config.id;

    // Convert Id to number
    divisionId = Number( divisionId );

    const divisionIndex = data.divisions.findIndex( t => t.id === divisionId );
    data.divisions.splice( divisionIndex, 1 );

    return [200];
} );