import { merchandisingApi } from "../../services/api-end-points/merchandising";
import { randomIdGenerator } from "../../utility/Utils";
import mock from "../mock";
import { paginateArray } from "../utils";


const data = {
    seasons: [
        {
            id: 1,
            name: 'Spring',
            description: 'This is Spring season',
            status: true
        },
        {
            id: 2,
            name: 'Summer',
            description: 'This is Summer season',
            status: false
        },
        {
            id: 3,
            name: 'Autumn',
            description: 'This is Autumn season',
            status: true
        }


    ]
};


// GET Season
mock.onGet( `${merchandisingApi.season.get_seasons}` ).reply( 200, data.seasons );

// POST: Add new Season
mock.onPost( `${merchandisingApi.season.add_season}` ).reply( config => {
    // Get event from post data
    const season = JSON.parse( config.data );
    season.id = randomIdGenerator();

    data.seasons.unshift( season );

    return [
        200, {
            data: season,
            succeeded: true
        }
    ];
} );


// POST: Update Season

const urlGetForUpdate = new RegExp( `${merchandisingApi.season.update_season}/*` );
mock.onPut( urlGetForUpdate ).reply( config => {
    const updateSeason = JSON.parse( config.data );

    // Convert Id to number
    updateSeason.id = Number( updateSeason.id );

    const season = data.seasons.find( e => e.id === Number( updateSeason.id ) );
    Object.assign( season, updateSeason );

    return [
        200, {
            data: season,
            succeeded: true
        }
    ];
} );


// GET Updated DATA
mock.onGet( `${merchandisingApi.season.get_seasons_by_query}?page=1&perPage=10` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.seasons.filter(
        season =>
            season.name.toLowerCase().includes( queryLowered )
    )
    return [
        200,
        {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length,
            succeeded: true
        }
    ];
} );
// GET Updated DATA
mock.onGet( `${merchandisingApi.season.get_seasons_by_query}` ).reply( config => {
    const { q = '', perPage = 10, page = 1, status = null } = config;

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = data.seasons.filter(
        season =>
            season.name.toLowerCase().includes( queryLowered )
    )
    return [
        200,
        {
            data: paginateArray( filteredData, perPage, page ),
            total: filteredData.length,
            succeeded: true
        }
    ];
} );


// GET Season by Id for Edit or Details
const urlGet = new RegExp( `${merchandisingApi.season.get_season_by_id}/*` );

mock.onGet( urlGet ).reply( config => {
    const id = Number( config.url.substring( config.url.lastIndexOf( '/' ) + 1 ) );
    const season = data.seasons.find( i => i.id === id );
    return [200, season, { succeeded: true }];

} );


// DELETE: Deletes Season Range
mock.onDelete( `${merchandisingApi.season.delete_season_by_range}` ).reply( config => {
    // Get user id from URL
    const seasonIds = config.ids;

    // // Convert Id to number

    for ( let index = 0; index < seasonIds.length; index++ ) {
        const id = seasonIds[index];
        const seasonIndex = data.seasons.findIndex( t => t.id === id );
        data.seasons.splice( seasonIndex, 1 );
    }


    return [200];
} );


// DELETE: Deletes Season
mock.onDelete( `${merchandisingApi.season.delete_season}` ).reply( config => {
    // Get user id from URL
    let seasonId = config.id;

    // Convert Id to number
    seasonId = Number( seasonId );

    const seasonIndex = data.seasons.findIndex( t => t.id === seasonId );
    data.seasons.splice( seasonIndex, 1 );

    return [200];
} );