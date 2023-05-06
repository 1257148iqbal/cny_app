import axios from "axios";
import marked from "marked";
import React, { useEffect, useState } from 'react';
import { Card, CardBody } from "reactstrap";

const ProjectTech = () => {
    const url = 'https://raw.githubusercontent.com/shsohel/ERP/main/ProjectTechnologiies.md';
    const [read, setRead] = useState( '' );

    useEffect( () => {
        axios.get( url ).then( ( response ) => {
            setRead( response.data );
        } );
    }, [] );

    return (
        <div>
            <Card>
                <CardBody dangerouslySetInnerHTML={{ __html: marked( read ) }}></CardBody>
            </Card>
        </div>
    );
};

export default ProjectTech;

