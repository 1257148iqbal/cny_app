import axios from "axios";
import marked from "marked";
import React, { useEffect, useState } from 'react';

const ProjectStructure = () => {
    const url = 'https://raw.githubusercontent.com/shsohel/ERP/main/ProjectStructuralDoc.md';

    const [read, setRead] = useState( '' );

    useEffect( () => {
        axios.get( url ).then( ( response ) => {
            setRead( response.data );
        } );
    }, [] );

    return (
        <div>
            <section>
                <article dangerouslySetInnerHTML={{ __html: marked( read ) }}></article>
            </section>
        </div>
    );
};

export default ProjectStructure;

