import { notify } from "@custom/notifications";
import React from 'react';
import Dropzone from 'react-dropzone';
import { Upload } from 'react-feather';

const DropZoneComponent = () => {
    const uploadPhoto = ( files, reject ) => {
        console.log( files );
        console.log( reject );
    };

    return (
        <div>
            <Dropzone maxSize={2097152} accept=".png, .jpg, .jpeg" onDrop={( acceptedFiles, fileRejections ) => {
                if ( acceptedFiles.length ) {
                    uploadPhoto( acceptedFiles );
                } else {
                    const message = fileRejections[0]?.errors[0]?.message;
                    const fileError = fileRejections[0].errors[0].code === "file-too-large";
                    if ( fileError ) {
                        notify( 'error', 'File size must be within 2 MB.' );
                    } else {
                        notify( 'error', `${message}` );
                    }
                }
            }}>
                {( { getRootProps, getInputProps } ) => (
                    <span
                        {...getRootProps( { onDrop: event => event.stopPropagation() } )}
                    >
                        <input {...getInputProps()} />
                        <Upload />
                    </span>
                )}
            </Dropzone>
        </div>
    );
};

export default DropZoneComponent;
