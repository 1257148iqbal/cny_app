import React, { Suspense } from "react;";
import { Spinner } from "reactstrap";
const ProfilePage = React.lazy( () => import( './ProfilePage' ) ); // Lazy-loaded

// Show a spinner while the profile [data fetching] is loading
<Suspense fallback={<Spinner />}>
    <ProfilePage />
</Suspense>;


// import React from 'react';
// import { Spinner } from 'reactstrap';

// const CustomSpinner = ( { children } ) => {
//     return (
//         <div>
//             <Spinner color='primary' />
//             <Spinner color='secondary' />
//             <Spinner color='success' />
//             <Spinner color='danger' />
//             <Spinner color='warning' />
//             <Spinner color='info' />
//             <Spinner color='light' />
//             <Spinner color='dark' />
//         </div>
//     );
// };

// export default CustomSpinner;
