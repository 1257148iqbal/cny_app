import Uppy from '@uppy/core';
import { DragDrop } from '@uppy/react';
import thumbnailGenerator from '@uppy/thumbnail-generator';
import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

const FileUploaderBasic = () => {
  const [img, setImg] = useState( null );

  const uppy = new Uppy( {
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  } );

  uppy.use( thumbnailGenerator );

  uppy.on( 'thumbnail:generated', ( file, preview ) => {
    setImg( preview );
  } );
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'> Basic </CardTitle>
      </CardHeader>
      <CardBody>
        <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
      </CardBody>
    </Card>
  );
};

export default FileUploaderBasic;
