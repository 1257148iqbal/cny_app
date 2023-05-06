import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";

const data = {
    budgets: [
        {
            id: 1,
            budgetNo: 'BG-256',
            styleNo: 'BSS-6325',
            createdDate: '10-04-2021',
            approvedDate: '12-05-2021',
            status: 'Approved'


        },
        {
            id: 2,
            budgetNo: 'BG-256',
            styleNo: 'BSS-6325',
            createdDate: '10-02-2021',
            approvedDate: '12-06-2021',
            status: 'Approved'
        },
        {
            id: 3,
            budgetNo: 'BG-256',
            styleNo: 'BSS-6325',
            createdDate: '10-01-2020',
            approvedDate: '12-05-2021',
            status: 'Pending'
        }


    ]
};

// GET Size

mock.onGet( `${merchandisingApi.budget.get_budgets}` ).reply( 200, data.budgets );

//POST: Add new Size
mock.onPost( `${merchandisingApi.budget.add_budget}` ).reply( config => {
    //Get event from post data
    const budget = JSON.parse( config.data );
    budget.id = randomIdGenerator();

    data.budgets.unshift( budget );

    return [200, budget.id];
} );
// Get Updated Data
// Update Segment
mock.onPut( `${merchandisingApi.budget.update_budget}` ).reply( config => {
    const updateBudget = JSON.parse( config.data ).budget;

    //Convert Id to Number
    updateBudget.id = Number( updateBudget.id );

    const budget = data.budgets.find( e => e.id === Number( updateBudget.id ) );
    Object.assign( budget, updateBudget );
    return [
        200, {
            budget
        }
    ];
} );
//GET Updated DATA
mock.onGet( `${merchandisingApi.budget.get_budgets_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, itemGroup = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.budgets
        console.log( filteredData )
        // const filteredData = data.budgets.filter(
        //     budget =>
        //         budget.status.toLowerCase().includes( queryLowered )

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
mock.onGet( `${merchandisingApi.budget.get_budget_by_id}` ).reply( config => {
    const { id } = config;
    const budget = data.budgets.find( i => i.id === id );
    return [200, budget];
} );


// DELETE: Deletes Style Category Range
mock.onDelete( `${merchandisingApi.budget.delete_budgets_by_range}` ).reply( config => {
    // Get user id from URL
    const budgetIds = config.ids;
    // // Convert Id to number


    for ( let index = 0; index < budgetIds.length; index++ ) {
        const id = budgetIds[index];
        const budgetIndex = data.budgets.findIndex( t => t.id === id );
        data.budgets.splice( budgetIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${merchandisingApi.budget.delete_budget}` ).reply( config => {
    // Get user id from URL
    let budgetId = config.id;

    // Convert Id to number
    budgetId = Number( budgetId );

    const budgetIndex = data.budgets.findIndex( t => t.id === budgetId );
    data.budgets.splice( budgetIndex, 1 );

    return [200];
} );