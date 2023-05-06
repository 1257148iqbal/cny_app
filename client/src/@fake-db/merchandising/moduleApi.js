import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    modules: [
        {
            id: 1,
            moduleName: 'Merchandiser',
            description: 'This is Merchandiser Module',
            status: true
        },
        {
            id: 2,
            moduleName: 'Inventory',
            description: 'This is Inventory Module',
            status: false
        },
        {
            id: 3,
            moduleName: 'Production',
            description: 'This is Production Module',
            status: true
        }


    ]
};

//Get Modules

mock.onGet( `${merchandisingApi.module.get_modules}` ).reply( 200, data.modules );

//POST: Add new Module
mock.onPost( `${merchandisingApi.module.add_module}` ).reply( config => {
    //Get event from post data
    const module = JSON.parse( config.data );

    const { length } = data.modules;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.modules[length - 1].id;

    }
    module.id = randomIdGenerator();

    data.modules.unshift( module );

    return [201, { module }];
} );

// POST: Update Module
// ------------------------------------------------
mock.onPost( `${merchandisingApi.module.update_module}` ).reply( config => {
    const updateModule = JSON.parse( config.data ).module;

    // Convert Id to number
    updateModule.id = Number( updateModule.id );

    const module = data.modules.find( e => e.id === Number( updateModule.id ) );
    Object.assign( module, updateModule );

    return [200, { module }];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.module.get_modules_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.modules.filter(
        module =>
            module.moduleName.toLowerCase().includes( queryLowered ) &&
            module.status === ( status === '' ? module.status : status )

    )
    /* eslint-enable  */

    return [
        200,
        {
            modules: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );

// GET Module by Id for Edit or Details
mock.onGet( `${merchandisingApi.module.get_module_by_id}` ).reply( config => {
    const { id } = config;
    const module = data.modules.find( i => i.id === id );
    return [200, module, { succeeded: true }];

} );


// DELETE: Deletes Module Range
mock.onDelete( `${merchandisingApi.module.delete_modules_by_range}` ).reply( config => {
    // Get user id from URL
    const moduleIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < moduleIds.length; index++ ) {
        const id = moduleIds[index];
        const moduleIndex = data.modules.findIndex( t => t.id === id );
        data.modules.splice( moduleIndex, 1 );
    }
    return [200];
} );


// DELETE: Deletes Module
mock.onDelete( `${merchandisingApi.module.delete_module}` ).reply( config => {
    // Get user id from URL
    let moduleId = config.id;

    // Convert Id to number
    moduleId = Number( moduleId );

    const moduleIndex = data.modules.findIndex( t => t.id === moduleId );
    data.modules.splice( moduleIndex, 1 );

    return [200];
} );