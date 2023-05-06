import { inventoryApi } from "../../services/api-end-points/inventory";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";

const data = {
    segments: [
        {
            id: 1,
            segmentName: 'Segment-1',
            description: 'This is for Segment-1'


        },
        {
            id: 2,
            segmentName: 'Segment-2',
            description: 'This is for Segment-2'

        }

    ]
};

// Get All Data
mock.onGet( `${inventoryApi.segment.get_segment}` ).reply( 200, data.segments );

//Add new Segment

//POST: Add new Segment
mock.onPost( `${inventoryApi.segment.add_segment}` ).reply( config => {
    //Get event from post data
    const segment = JSON.parse( config.data );

    const { length } = data.segments;
    let lastIndex = 0;
    if ( length ) {
        lastIndex = data.segments[length - 1].id;
    }
    segment.id = randomIdGenerator();
    data.segments.unshift( segment );

    return [201, { segment }];
} );

// Update Segment
mock.onPut( `${inventoryApi.segment.update_segment}` ).reply( config => {
    const updateSegment = JSON.parse( config.data ).segment;

    //Convert Id to Number
    updateSegment.id = Number( updateSegment.id );

    const segment = data.segments.find( e => e.id === Number( updateSegment.id ) );
    Object.assign( segment, updateSegment );
    return [
        200, {
            segment
        }
    ];
} );

// Get Updated Data
//GET Updated DATA
mock.onGet( `${inventoryApi.segment.get_segment_by_query}` ).reply(
    config => {
        const { q = '', perPage = 10, page = 1, segmentName = null, status = null } = config;


        /* eslint-disable  */
        const queryLowered = q.toLowerCase()
        const filteredData = data.segments.filter(
            segment =>
                segment.segmentName.toLowerCase().includes( queryLowered )

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
mock.onGet( `${inventoryApi.segment.get_segment_by_id}` ).reply( config => {
    const { id } = config;
    const segment = data.segments.find( i => i.id === id );
    return [200, segment];
} );

// DELETE: Deletes Style Category Range
mock.onDelete( `${inventoryApi.segment.delete_segment_by_range}` ).reply( config => {
    // Get user id from URL
    const segmentIds = config.ids;
    // // Convert Id to number


    for ( let index = 0; index < segmentIds.length; index++ ) {
        const id = segmentIds[index];
        const segmentIndex = data.segments.findIndex( t => t.id === id );
        data.segments.splice( segmentIndex, 1 );
    }


    return [200];
} );

// DELETE: Deletes Department
mock.onDelete( `${inventoryApi.segment.delete_segment}` ).reply( config => {
    // Get user id from URL
    let segmentId = config.id;

    // Convert Id to number
    segmentId = Number( segmentId );

    const segmentIndex = data.segments.findIndex( t => t.id === segmentId );
    data.segments.splice( segmentIndex, 1 );

    return [200];
} );