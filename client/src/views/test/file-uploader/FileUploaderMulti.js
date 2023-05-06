// import Uppy from '@uppy/core';
// import { DashboardModal, useUppy } from '@uppy/react';
// import Tus from '@uppy/tus';
// import React from 'react';


// const FileUploaderMulti = () => {
//   const uppy = useUppy( () => {
//     return new Uppy()
//       .use( Tus, { endpoint: 'https://tusd.tusdemo.net/files' } );
//   } );

//   return ( <DashboardModal uppy={uppy} />
//   );
// };

// export default FileUploaderMulti;


// // import Uppy from '@uppy/core';
// // import '@uppy/core/dist/style.css';
// // import '@uppy/dashboard/dist/style.css';
// // import { DashboardModal } from '@uppy/react';
// // import XHRUpload from '@uppy/xhr-upload';
// // import React from 'react';
// // export default class MusicUploadButton extends React.Component {
// //   constructor( props ) {
// //     console.log( props );
// //     super( props );

// //     this.state = {
// //       modalOpen: false
// //     };


// //     this.uppy = new Uppy( {
// //       debug: true,
// //       autoProceed: false,
// //       allowMultipleUploads: false,
// //       restrictions: {
// //         maxFileSize: 1000000,
// //         allowedFileTypes: ['image/*']
// //       }
// //     } )

// //       // .use( XHRUpload, { endpoint: 'http://103.125.217.122:89/api/merchandising/styles/992bf645-bbb6-43df-8d27-09f6178d6dd1/imageUpload' } )
// //       .use( XHRUpload, {
// //         endpoint: 'http://103.125.217.122:89/api/merchandising/styles/992bf645-bbb6-43df-8d27-09f6178d6dd1/imageUpload',
// //         formData: true,
// //         fileName: 'File'
// //       } )
// //       // .use( Tus, console.log( Tus ) )
// //       .on( 'complete', ( result ) => {
// //         console.log( result );

// //       } );


// //     this.handleOpen = this.handleOpen.bind( this );
// //     this.handleClose = this.handleClose.bind( this );
// //   }

// //   componentWillUnmount() {
// //     this.uppy.close();
// //   }

// //   handleOpen() {
// //     this.setState( {
// //       modalOpen: true
// //     } );
// //   }

// //   handleClose() {
// //     this.setState( {
// //       modalOpen: false
// //     } );
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <button type="button" onClick={this.handleOpen}>Upload </button>
// //         <DashboardModal
// //           uppy={this.uppy}
// //           closeModalOnClickOutside
// //           open={this.state.modalOpen}
// //           onRequestClose={this.handleClose}
// //         />
// //       </div>
// //     );
// //   }
// // }

// import '@uppy/core/dist/style.css';
// import '@uppy/dashboard/dist/style.css';
// import { useState } from 'react';

// const FileUploaderMulti = () => {
//   const [state, setState] = useState( {
//     modalOpen: false
//   } );

//   // const uppy = new Uppy( {
//   //   debug: true,
//   //   autoProceed: false,
//   //   allowMultipleUploads: false,
//   //   restrictions: {
//   //     maxFileSize: 1000000,
//   //     allowedFileTypes: ['image/*']
//   //   }
//   // } )
//   //   .use( XHRUpload, { endpoint: 'http://103.125.217.122:89/api/merchandising/styles/992bf645-bbb6-43df-8d27-09f6178d6dd1/imageUpload' } )
//   //   .use( XHRUpload, {
//   //     endpoint: 'http://103.125.217.122:89/api/merchandising/styles/992bf645-bbb6-43df-8d27-09f6178d6dd1/imageUpload',
//   //     formData: true,
//   //     fileName: 'File'
//   //   } )

//   //   .on( 'complete', ( result ) => {
//   //     console.log( result );

//   //   } );

//   // const uppy = useUppy( () => {
//   //   return new Uppy()
//   //     .use( XHRUpload, {
//   //       endpoint: 'http://103.125.217.122:89/api/merchandising/styles/992bf645-bbb6-43df-8d27-09f6178d6dd1/imageUpload',
//   //       formData: true,
//   //       fileName: 'File'
//   //     } )
//   //     .on( 'complete', ( result ) => {
//   //       console.log( result );

//   //     } );
//   // } );

//   const handleOpen = () => {
//     setState( {
//       modalOpen: true
//     } );
//   };

//   const handleClose = () => {
//     setState( {
//       modalOpen: false
//     } );
//   };
//   return (
//     <div>
//       {/* <button type="button" onClick={() => handleOpen()}>Upload </button>
//       <DashboardModal
//         uppy={uppy}
//         closeModalOnClickOutside
//         open={state.modalOpen}
//         onRequestClose={() => handleClose()}
//       /> */}
//     </div>
//   );
// };

// export default FileUploaderMulti;

import React from 'react';

const FileUploaderMulti = () => {
  return (
    <div>

    </div>
  );
};

export default FileUploaderMulti;
