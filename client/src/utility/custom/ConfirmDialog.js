import '@custom-styles/basic/confirm-dialogue.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent( Swal );

export const confirmDialog = ( confirmObj ) => {
    const { title, text, confirmButtonText, cancelButtonText } = confirmObj;

    return MySwal.fire( {
        title,
        // text,
        html: text,

        icon: 'question',
        showCancelButton: true,
        confirmButtonText,
        cancelButtonText,
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false
    } );
};

export const confirmOK = ( confirmObj ) => {
    const { title, text, confirmButtonText, cancelButtonText } = confirmObj;

    return MySwal.fire( {
        title,
        text,
        allowOutsideClick: false,
        icon: 'error',
        showCancelButton: false,
        confirmButtonText,
        cancelButtonText,
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false
    } );
};

// export const confirmToChangeUserProfile = async ( confirmObj ) => {
//     const { title, text, confirmButtonText, cancelButtonText } = confirmObj;
//     const result_3 = await MySwal.fire( {
//         title: 'Submit your Github username',
//         input: 'text',
//         inputAttributes: {
//             autocapitalize: 'off'
//         },
//         showCancelButton: true,
//         confirmButtonText: 'Look up',
//         showLoaderOnConfirm: true,
//         preConfirm: async ( login_1 ) => {
//             try {
//                 const response = await fetch( `//api.github.com/users/${login_1}` );
//                 if ( !response.ok ) {
//                     throw new Error( response.statusText );
//                 }
//                 return await response.json();
//             } catch ( error ) {
//                 Swal.showValidationMessage(
//                     `Request failed: ${error}`
//                 );
//             }
//         },
//         allowOutsideClick: () => !Swal.isLoading()
//     } );
//     if ( result_3.isConfirmed ) {
//         Swal.fire( {
//             title: `${result_3.value.login}'s avatar`,
//             imageUrl: result_3.value.avatar_url
//         } );
//     }
// };
