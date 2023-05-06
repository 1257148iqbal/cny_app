import marked from "marked";
import React, { useEffect, useState } from 'react';
import Doc from '../../documents/ProjectTechnologiies.md';
const DocRead = () => {
  const [read, setRead] = useState( null );
  useEffect( () => {
    fetch( Doc )
      .then( response => {
        return response.text();
      } )
      .then( text => {
        setRead( {
          markdown: marked( text )
        } );
      } );
  }, [] );
  return (
    <div >
      <section dangerouslySetInnerHTML={{ __html: read?.markdown }}></section>
    </div>
  );
};

export default DocRead;
