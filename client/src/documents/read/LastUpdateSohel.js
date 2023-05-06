import axios from "axios";
import marked from "marked";
import React, { useEffect, useState } from 'react';
import { Card } from "reactstrap";
import CardBody from "reactstrap/lib/CardBody";

const LastUpdateSohel = () => {
    const url = 'https://raw.githubusercontent.com/shsohel/ERP/main/LastUpdateSohel.md';
    const [read, setRead] = useState( '' );

    useEffect( () => {
        axios.get( url ).then( ( response ) => {
            setRead( response.data );
        } );
        // axios.get( url )
        //     .then( ( { data } ) => {
        //         console.log( data );
        //     } )
        //     // .catch( res => { console.log( res ); } )
        //     .catch( ( { response } ) => {
        //         // alerts('error', `${response.data.Message}`);
        //     } );
    }, [] );

    return (
        <div>
            <Card>
                <CardBody dangerouslySetInnerHTML={{ __html: marked( read ) }}></CardBody>
            </Card>
        </div>
    );
};

export default LastUpdateSohel;

