import { merchandisingApi } from "@api/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from '../mock';
import { paginateArray } from '../utils';
// Unit: pcs
// Colors: {Black, White}
// SizeGroups: S-XL
// Shipment Mode:
// ShipmentDate: ¨
// Destination:
// OrderQuantity:
// Per Unit Price: 
// Amount: 
// Execess Quantity 
// Wastaste Adjusted Quantity
// Color Size Ratio

const data = {
    purchaseOrders: [
        {
            id: 1,
            purchaseOrderNo: 'PO-53088',
            styleNo: 'SO-702025',
            buyerPurchaseOrderNo: 'BPN-096657',
            purchaseOrderDate: '12/12/2021',
            buyer: {
                id: 1,
                name: 'BABYFAIR'
            },
            merchandiser: {
                id: 3,
                name: 'Sohag Rahman'
            },
            stylesDetails: [
                {
                    id: 1,
                    unit: 'pcs',
                    colors: 'Black, White',
                    sizeGroups: 'S-XL',
                    shipmentMode: 'Air',
                    shipmentDate: '12/08/2021',
                    destination: 'USA',
                    orderQuantity: 1200,
                    perUnitPrice: 2.34,
                    amount: 2400,
                    excessQuantity: 2,
                    wastageQuantity: 3,
                    adjustedQuantity: 1269
                },
                {
                    id: 2,
                    unit: 'pcs',
                    colors: 'Black, White',
                    sizeGroups: 'S-XL',
                    shipmentMode: 'Air',
                    shipmentDate: '12/08/2021',
                    destination: 'USA',
                    orderQuantity: 1200,
                    perUnitPrice: 2.34,
                    amount: 2400,
                    excessQuantity: 2,
                    wastageQuantity: 3,
                    adjustedQuantity: 1269
                }
            ],
            status: 'active'
        }
    ]
};

// GET ALL DATA
mock.onGet( `${merchandisingApi.purchaseOrder.get_purchaseOrders}` ).reply( 200, data.purchaseOrders );

// POST: Add new purchaseOrder
mock.onPost( `${merchandisingApi.purchaseOrder.add_purchaseOrder}` ).reply( config => {
    // Get event from post data
    const purchaseOrder = JSON.parse( config.data );

    const { length } = data.purchaseOrders;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.purchaseOrders[length - 1].id;

    }
    purchaseOrder.id = randomIdGenerator();

    data.purchaseOrders.unshift( purchaseOrder );

    return [201, { purchaseOrder }];
} );


// POST: Update purchaseOrder
// ------------------------------------------------
mock.onPost( `${merchandisingApi.purchaseOrder.update_purchaseOrder}` ).reply( config => {
    const updatepurchaseOrder = JSON.parse( config.data ).purchaseOrder;

    // Convert Id to number
    updatepurchaseOrder.id = Number( updatepurchaseOrder.id );

    const purchaseOrder = data.purchaseOrders.find( e => e.id === Number( updatepurchaseOrder.id ) );
    Object.assign( purchaseOrder, updatepurchaseOrder );

    return [200, { purchaseOrder }];
} );

// GET Updated DATA
mock.onGet( `${merchandisingApi.purchaseOrder.get_purchaseOrders_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.purchaseOrders.filter(
        purchaseOrder =>
            purchaseOrder.purchaseOrderNo.toLowerCase().includes( queryLowered ) &&
            purchaseOrder.status === ( status || purchaseOrder.status )

    )
    /* eslint-enable  */

    return [
        200,
        {
            purchaseOrders: paginateArray( filteredData, perPage, page ),
            total: filteredData.length
        }
    ];
} );

// GET purchaseOrder by Id for Edit or Details
mock.onGet( `${merchandisingApi.purchaseOrder.get_purchaseOrder_by_id}` ).reply( config => {
    const { id } = config;
    const purchaseOrder = data.purchaseOrders.find( i => i.id === id );
    return [200, { purchaseOrder }];
} );

// DELETE: Deletes purchaseOrder Range
mock.onDelete( `${merchandisingApi.purchaseOrder.delete_purchaseOrder_by_range}` ).reply( config => {
    // Get user id from URL
    const purchaseOrderIds = config.ids;

    // // Convert Id to number
    // purchaseOrderId = Number( purchaseOrderId );

    for ( let index = 0; index < purchaseOrderIds.length; index++ ) {
        const id = purchaseOrderIds[index];
        const purchaseOrderIndex = data.purchaseOrders.findIndex( t => t.id === id );
        data.purchaseOrders.splice( purchaseOrderIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes purchaseOrder
mock.onDelete( `${merchandisingApi.purchaseOrder.delete_purchaseOrder}` ).reply( config => {
    // Get user id from URL
    let purchaseOrderId = config.id;

    // Convert Id to number
    purchaseOrderId = Number( purchaseOrderId );

    const purchaseOrderIndex = data.purchaseOrders.findIndex( t => t.id === purchaseOrderId );
    data.purchaseOrders.splice( purchaseOrderIndex, 1 );

    return [200];
} );
