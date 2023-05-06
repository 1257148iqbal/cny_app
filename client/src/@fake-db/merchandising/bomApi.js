import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    boms: [
        {
            id: 1,
            bomNo: 'BOM-256',
            purchaseOrderNo: 'PO-6325',
            // styles: ['BSS-23', 'BSS-25', 'BSS-28'],
            // size: 'XL',
            // color: 'Black',
            // ratePerUnit: 200,
            // amount: 50,
            // Total: 10000,
            bomItemGroup: 'Fabric',
            itemGroup: 'Item Group-1',
            itemSubGroup: 'Item Sub Group-1',
            itemDescription: 'This is for Fabric description ',
            requiredQuantity: 44,
            uom: 'kg'

        },
        {
            id: 2,
            bomNo: 'BOM-2546',
            purchaseOrderNo: 'PO-6325',
            // styles: ['BSS-23', 'BSS-5', 'BSS-8'],
            // size: 'L',
            // color: 'Green',
            // ratePerUnit: 10,
            // amount: 20,
            // Total: 200,
            bomItemGroup: 'Accessories',
            itemGroup: 'Item Group-2',
            itemSubGroup: 'Item Sub Group-2',
            itemDescription: 'This is for Accessories description ',
            requiredQuantity: 44,
            uom: 'kg'
        }


    ]
};

// GET Size

mock.onGet( `${merchandisingApi.bom.get_boms}` ).reply( 200, data.boms );

//POST: Add new Size
mock.onPost( `${merchandisingApi.bom.add_bom}` ).reply( config => {
    //Get event from post data
    const bom = JSON.parse( config.data );
    bom.id = randomIdGenerator();

    data.boms.unshift( bom );

    return [200, bom.id];
} );
// Get Updated Data
// Update Segment
mock.onPut( `${merchandisingApi.bom.update_bom}` ).reply( config => {
    const updateBom = JSON.parse( config.data ).bom;

    //Convert Id to Number
    updateBom.id = Number( updateBom.id );

    const bom = data.boms.find( e => e.id === Number( updateBom.id ) );
    Object.assign( bom, updateBom );
    return [
        200, {
            bom
        }
    ];
} );
//GET Updated DATA
mock.onGet( `${merchandisingApi.bom.get_boms_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, itemGroup = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.boms
        // const filteredData = data.boms.filter(
        //     bom =>
        //         bom.itemGroup.toLowerCase().includes( queryLowered )

        // )
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
mock.onGet( `${merchandisingApi.bom.get_bom_by_id}` ).reply( config => {
    const { id } = config;
    const bom = data.boms.find( i => i.id === id );
    return [200, bom];
} );


// DELETE: Deletes Style Category Range
mock.onDelete( `${merchandisingApi.bom.delete_boms_by_range}` ).reply( config => {
    // Get user id from URL
    const bomIds = config.ids;
    // // Convert Id to number


    for ( let index = 0; index < bomIds.length; index++ ) {
        const id = bomIds[index];
        const bomIndex = data.boms.findIndex( t => t.id === id );
        data.boms.splice( bomIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${merchandisingApi.bom.delete_bom}` ).reply( config => {
    // Get user id from URL
    let bomId = config.id;

    // Convert Id to number
    bomId = Number( bomId );

    const bomIndex = data.boms.findIndex( t => t.id === bomId );
    data.boms.splice( bomIndex, 1 );

    return [200];
} );