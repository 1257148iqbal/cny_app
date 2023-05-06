import { inventoryApi } from "../../services/api-end-points/inventory";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";

const data = {
    itemGroups: [
        {
            id: 1,
            itemGroupName: 'Fabric',
            itemSubGroupName: [
                {
                    id: 1,
                    name: 'Cotton Fabric'
                },
                {
                    id: 2,
                    name: 'Pollster Fabric '
                }
            ],
            description: 'This is Fabric division'


        },
        {
            id: 2,
            itemGroupName: 'Accessories',
            itemSubGroupName: [
                {
                    id: 1,
                    name: 'Pollster Fabric'
                }

            ],
            description: 'This is Accessories division'

        }

    ]
};
//#region GET ALL Item Group
mock.onGet( `${inventoryApi.itemGroup.get_item_group}` ).reply( 200, data.itemGroups );

//Add New Item Group
mock.onPost( `${inventoryApi.itemGroup.add_item_group}` ).reply( config => {
    // Get event from post data
    const itemGroup = JSON.parse( config.data );

    const { length } = data.itemGroups;

    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.itemGroups[length - 1].id;
    }
    itemGroup.id = randomIdGenerator();
    data.itemGroups.unshift( itemGroup );
    return [201, { itemGroup }];

} );

// Update Item Group
mock.onPut( `${inventoryApi.itemGroup.update_item_group}` ).reply( config => {
    const updateItemGroup = JSON.parse( config.data ).itemGroup;

    //Convert Id to number
    updateItemGroup.id = Number( updateItemGroup.id );

    const itemGroup = data.itemGroups.find( e => e.id === Number( updateItemGroup.id ) );
    Object.assign( itemGroup, updateItemGroup );

    return [200, { itemGroup }];
} );

// Get Updated Data
mock.onGet( `${inventoryApi.itemGroup.get_item_group_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    const queryLowered = q.toLowerCase();
    const filteredData = data.itemGroups.filter(
        itemGroup => itemGroup.itemGroupName.toLowerCase().includes( queryLowered )
    );

    return [
        200, {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );

// Get Item Group By Id
mock.onGet( `${inventoryApi.itemGroup.get_item_group_by_id}` ).reply( config => {
    const { id } = config;
    const itemGroup = data.itemGroups.find( i => i.id === id );
    return [200, { itemGroup }];
} );

// DELETE Item Group  Range
mock.onDelete( `${inventoryApi.itemGroup.delete_item_group_by_range}` ).reply( config => {
    // Get itemGroup id from URL
    const itemGroupIds = config.ids;

    for ( let index = 0; index < itemGroupIds.length; index++ ) {
        const id = itemGroupIds[index];
        const itemGroupIndex = data.itemGroups.findIndex( t => t.id === id );
        data.itemGroups.splice( itemGroupIndex, 1 );
    }
    return [200];
} );

// Delete Item Group
mock.onDelete( `${inventoryApi.itemGroup.delete_item_group}` ).reply( config => {
    // Get itemGroup Id from URL
    let itemGroupId = config.id;

    // Convert Id to Number
    itemGroupId = Number( itemGroupId );

    const itemGroupIndex = data.itemGroups.findIndex( t => t.id === itemGroupId );
    data.itemGroups.splice( itemGroupIndex, 1 );
    return [200];
} );