import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";

const data = {
    consumptions: [
        {
            id: 1,
            name: 'Consumption-1',
            styleNo: '4369SMS32-1',
            costingNo: 'CS-56974',
            sizeGroup: 'S-XL',
            colors: ['Black', 'White'],
            costingDate: '01-June-2021',
            uom: 'PCS',
            quantity: 1,
            total: '$525',
            buyer: {
                id: 1,
                buyerName: 'BABYFAIR'
            },
            buyerPoNo: '1205545'
        },
        {
            id: 2,
            name: 'Consumption-2',
            styleNo: '4369SMS32-1',
            costingNo: 'CS-96985',
            sizeGroup: 'X-XL',
            colors: ['Black'],
            costingDate: '15-July-2021',
            uom: 'PCS',
            quantity: 1,
            total: '$872',
            buyer: {
                id: 1,
                buyerName: 'BABYFAIR'
            },
            buyerPoNo: '1205545'
        }

    ]
};


// Get All Data
mock.onGet( `${merchandisingApi.consumption.get_consumptions}` ).reply( 200, data.consumptions );

//Add new Consumption

//POST: Add new Consumption
mock.onPost( `${merchandisingApi.consumption.add_consumption}` ).reply( config => {
    //Get event from post data
    const consumption = JSON.parse( config.data );

    const { length } = data.consumptions;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.consumptions[length - 1].id;
    }
    consumption.id = randomIdGenerator();
    data.consumptions.unshift( consumption );

    return [201, { consumption }];
} );

// Update Consumption
mock.onPut( `${merchandisingApi.consumption.update_consumption}` ).reply( config => {
    const updateConsumption = JSON.parse( config.data ).consumption;

    //Convert Id to Number
    updateConsumption.id = Number( updateConsumption.id );

    const consumption = data.consumptions.find( e => e.id === Number( updateConsumption.id ) );
    Object.assign( consumption, updateConsumption );
    return [
        200, {
            consumption
        }
    ];
} );

// Get Updated Data
//GET Updated DATA
mock.onGet( `${merchandisingApi.consumption.get_consumptions_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, name = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.consumptions.filter(
            consumption =>
                consumption.name.toLowerCase().includes( queryLowered )

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
mock.onGet( `${merchandisingApi.consumption.get_consumption_by_id}` ).reply( config => {
    const { id } = config;
    const consumption = data.consumptions.find( i => i.id === id );
    return [200, consumption];
} );

// DELETE: Deletes Style Category Range
mock.onDelete( `${merchandisingApi.consumption.delete_consumption_by_range}` ).reply( config => {
    // Get user id from URL
    const consumptionIds = config.ids;
    // // Convert Id to number


    for ( let index = 0; index < consumptionIds.length; index++ ) {
        const id = consumptionIds[index];
        const consumptionIndex = data.consumptions.findIndex( t => t.id === id );
        data.consumptions.splice( consumptionIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${merchandisingApi.consumption.delete_consumption}` ).reply( config => {
    // Get user id from URL
    let consumptionId = config.id;

    // Convert Id to number
    consumptionId = Number( consumptionId );

    const consumptionIndex = data.consumptions.findIndex( t => t.id === consumptionId );
    data.consumptions.splice( consumptionIndex, 1 );

    return [200];
} );
