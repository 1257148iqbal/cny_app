import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    departments: [
        {
            id: 1,
            name: 'Boys',
            productCategory: [
                {
                    id: 1,
                    name: 'Top'
                },
                {
                    id: 2,
                    name: 'Bottom '
                }
            ],
            productCategoryIds: [1],
            description: 'This is Boys department',
            status: true


        },
        {
            id: 2,
            name: 'Girls',
            productCategory: [
                {
                    id: 1,
                    name: 'Top Ladies'
                }

            ],
            productCategoryIds: [],
            description: 'This is Girls department',
            status: false

        },
        {
            id: 3,
            name: 'Ladies',
            productCategory: [
                {
                    id: 1,
                    name: 'Top Kids'
                }

            ],
            productCategoryIds: [],
            description: 'This is Ladies department',
            status: true

        },
        {
            id: 4,
            name: 'Gents',
            productCategory: [
                {
                    id: 1,
                    name: 'Bottom '
                }

            ],
            productCategoryIds: [],
            description: 'This is Gents department',
            status: false

        }


    ]
};

mock.onGet( `${merchandisingApi.department.get_departments}` ).reply( 200, data.departments );

// POST: Add new Department
mock.onPost( `${merchandisingApi.department.add_department}` ).reply( config => {
    // Get event from post data
    const department = JSON.parse( config.data );
    department.id = randomIdGenerator();

    data.departments.unshift( department );

    return [
        200, {
            data: department,
            succeeded: true
        }
    ];
} );

// POST: Update Department
const urlGetForUpdate = new RegExp( `${merchandisingApi.department.update_department}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateDepartment = JSON.parse( config.data );

    // Convert Id to number
    updateDepartment.id = Number( updateDepartment.id );

    const department = data.departments.find( e => e.id === Number( updateDepartment.id ) );
    Object.assign( department, updateDepartment );

    return [
        200, {
            data: department,
            succeeded: true
        }
    ];
} );

// GET Updated DATA
mock.onGet( `${merchandisingApi.department.get_departments_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;


    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.departments.filter(
        department =>
            department.name.toLowerCase().includes( queryLowered )
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
mock.onGet( `${merchandisingApi.department.get_departments_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;


    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.departments.filter(
        department =>
            department.name.toLowerCase().includes( queryLowered )
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


// GET Department by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.department.get_department_by_id}/*` );
mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const department = data.departments.find( i => i.id === id );
    return [200, department, { succeeded: true }];

} );

// DELETE: Deletes Department Range
mock.onDelete( `${merchandisingApi.department.delete_department_by_range}` ).reply( config => {
    // Get user id from URL
    const departmentIds = config.ids;

    // // Convert Id to number
    // DepartmentId = Number( DepartmentId );

    for ( let index = 0; index < departmentIds.length; index++ ) {
        const id = departmentIds[index];
        const departmentIndex = data.departments.findIndex( t => t.id === id );
        data.departments.splice( departmentIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${merchandisingApi.department.delete_department}` ).reply( config => {
    // Get user id from URL
    let departmentId = config.id;

    // Convert Id to number
    departmentId = Number( departmentId );

    const departmentIndex = data.departments.findIndex( t => t.id === departmentId );
    data.departments.splice( departmentIndex, 1 );

    return [200];
} );