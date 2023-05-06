import { inventoryApi } from "../../services/api-end-points/inventory";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";

const data = {
    itemSubGroups: [
        {
            id: 1,
            itemSubGroupName: 'Cotton Fabric',
            description: 'This is Cotton Fabric item sub Group'

        },
        {
            id: 2,
            itemSubGroupName: 'Pollster Fabric',
            description: 'This is Pollster Fabric item sub Group'

        }

    ]
};

// Get All Data
mock.onGet( `${inventoryApi.itemSubGroup.get_item_sub_groups}` ).reply( 200, data.itemSubGroups );

//Add new Sub Category

//POST: Add new Sub Category
mock.onPost( `${inventoryApi.itemSubGroup.add_item_sub_group}` ).reply( config => {
    //Get event from post data
    const itemSubGroup = JSON.parse( config.data );

    const { length } = data.itemSubGroups;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.itemSubGroups[length - 1].id;
    }
    itemSubGroup.id = randomIdGenerator();
    data.itemSubGroups.unshift( itemSubGroup );

    return [201, { itemSubGroup }];
} );

// Update Sub Category
mock.onPut( `${inventoryApi.itemSubGroup.update_item_sub_group}` ).reply( config => {
    const updateItemSubGroup = JSON.parse( config.data ).itemSubGroup;

    //Convert Id to Number
    updateItemSubGroup.id = Number( updateItemSubGroup.id );

    const itemSubGroup = data.itemSubGroups.find( e => e.id === Number( updateItemSubGroup.id ) );
    Object.assign( itemSubGroup, updateItemSubGroup );
    return [
        200, {
            itemSubGroup
        }
    ];
} );

// Get Updated Data
//GET Updated DATA
mock.onGet( `${inventoryApi.itemSubGroup.get_item_sub_groups_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, itemSubGroupName = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.itemSubGroups.filter(
            itemSubGroup =>
                itemSubGroup.itemSubGroupName.toLowerCase().includes( queryLowered )

        )
        /* eslint-enable  */

        return [
            200,
            {
                data: paginateArray( filteredData, perPage, page ),
                total: filteredData.length
            }
        ];
    }
);

// GET Style Category by Id for Edit or Details
mock.onGet( `${inventoryApi.itemSubGroup.get_item_sub_group_by_id}` ).reply( config => {
    const { id } = config;
    const itemSubGroup = data.itemSubGroups.find( i => i.id === id );
    return [200, itemSubGroup];
} );

// DELETE: Deletes Style Category Range
mock.onDelete( `${inventoryApi.itemSubGroup.delete_item_sub_group_by_range}` ).reply( config => {
    // Get user id from URL
    const itemSubGroupIds = config.ids;
    // // Convert Id to number


    for ( let index = 0; index < itemSubGroupIds.length; index++ ) {
        const id = itemSubGroupIds[index];
        const itemSubGroupIndex = data.itemSubGroups.findIndex( t => t.id === id );
        data.itemSubGroups.splice( itemSubGroupIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${inventoryApi.itemSubGroup.delete_item_sub_group}` ).reply( config => {
    // Get user id from URL
    let itemSubGroupId = config.id;

    // Convert Id to number
    itemSubGroupId = Number( itemSubGroupId );

    const itemSubGroupIndex = data.itemSubGroups.findIndex( t => t.id === itemSubGroupId );
    data.itemSubGroups.splice( itemSubGroupIndex, 1 );

    return [200];
} );