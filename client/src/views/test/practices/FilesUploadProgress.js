// const Uppy = require( '@uppy/core' );
// const DragDrop = require( '@uppy/drag-drop' );
// const ProgressBar = require( '@uppy/progress-bar' );
// const Tus = require( '@uppy/tus' );


import Uppy from '@uppy/core';
import DragDrop from '@uppy/drag-drop';
import ProgressBar from '@uppy/progress-bar';
import Tus from '@uppy/tus';
import React from 'react';
// Function for displaying uploaded files
const onUploadSuccess = ( elForUploadedFiles ) => ( file, response ) => {
    const url = response.uploadURL;
    const fileName = file.name;
    const li = document.createElement( 'li' );
    const a = document.createElement( 'a' );
    a.href = url;
    a.target = '_blank';
    a.appendChild( document.createTextNode( fileName ) );
    li.appendChild( a );

    document.querySelector( elForUploadedFiles ).appendChild( li );
};

const uppyOne = new Uppy( { debug: true, autoProceed: true } );
uppyOne
    .use( DragDrop, { target: '.example-one .for-DragDrop' } )
    .use( Tus, { endpoint: 'https://tusd.tusdemo.net/files/' } )
    .use( ProgressBar, { target: '.example-one .for-ProgressBar', hideAfterFinish: false } )
    .on( 'upload-success', onUploadSuccess( '.example-one .uploaded-files ol' ) );

const uppyTwo = new Uppy( { debug: true, autoProceed: false } );
uppyTwo
    .use( DragDrop, { target: '.example-two .for-DragDrop' } )
    .use( Tus, { endpoint: 'https://tusd.tusdemo.net/files/' } )
    .use( ProgressBar, { target: '.example-two .for-ProgressBar', hideAfterFinish: false } )
    .on( 'upload-success', onUploadSuccess( '.example-two .uploaded-files ol' ) );

const uploadBtn = document.querySelector( '.example-two button.upload-button' );
uploadBtn.addEventListener( 'click', function () {
    uppyTwo.upload();
} );

const FilesUploadProgress = () => {
    return (

        <div>
            {/* <div>
                <section className="example-one">
                    <h5>autoProceed is on</h5>

                    <div className="for-DragDrop"></div>

                    <div className="for-ProgressBar"></div>

                    <div className="uploaded-files">
                        <h5>Uploaded files: </h5>
                        <ol></ol>
                    </div>
                </section>
            </div>
            <section className="example-two">
                <h5>autoProceed is off</h5>

                <div className="for-DragDrop"></div>

                <div className="for-ProgressBar"></div>

                <button className="upload-button">Upload</button>

                <div className="uploaded-files">
                    <h5>Uploaded files:</h5>
                    <ol></ol>
                </div>
            </section> */}
        </div>
    );
};

export default FilesUploadProgress;
