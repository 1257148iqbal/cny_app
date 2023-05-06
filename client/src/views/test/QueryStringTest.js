import React from 'react';
import { getIdFromUrl } from '../../utility/Utils';

const QueryStringTest = () => {
    // const urlSearchParams = new URLSearchParams( window.location );
    // const params = Object.fromEntries( urlSearchParams.entries() );
    // console.log( params.pathname );


    // const urlParams = new URLSearchParams( window.location.search );
    // const myParam = urlParams.get( '' );

    // const id = params.pathname.substring( params.pathname.lastIndexOf( '/' ) + 1 );

    // console.log( id );

    // const getIdFromUrl = () => {
    //     const urlSearchParams = new URLSearchParams( window.location );
    //     const params = Object.fromEntries( urlSearchParams.entries() );
    //     const id = params.pathname.substring( params.pathname.lastIndexOf( '/' ) + 1 );
    //     return id;
    // };
    console.log( getIdFromUrl() );


    return (
        <div>

        </div>
    );
};

export default QueryStringTest;
