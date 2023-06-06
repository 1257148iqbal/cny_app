// import { Box, Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
// import _ from 'lodash';
// import React from 'react';
// import { MemoryRouter } from 'react-router';
// import { withRouter } from 'react-router-dom';
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: 360
//   },
//   lists: {
//     backgroundColor: theme.palette.background.default,
//     marginTop: theme.spacing(2)
//   },
//   nested: {
//     paddingLeft: theme.spacing(8)
//   }
// }));

// const Breadcrumbs = props => {
//   const classes = useStyles();
//   const {
//     history,
//     location: { pathname }
//   } = props;
//   const pathnames = pathname.split('/').filter(x => x);

//   return (
//     <MemoryRouter initialEntries={['/']}>
//       <Box className={classes.root}>
//         <MUIBreadcrumbs aria-label="breadcrumb">
//           {pathnames.length > 0 ? <Link onClick={() => history.push('/')}>Home</Link> : <Typography> Home </Typography>}
//           {pathnames.map((name, index) => {
//             const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//             const isLast = index === pathnames.length - 1;
//             return isLast ? (
//               <Typography key={name}>{_.startCase(name)}</Typography>
//             ) : (
//               <Link key={name} onClick={() => history.push(routeTo)}>
//                 {_.startCase(name)}
//               </Link>
//             );
//           })}
//         </MUIBreadcrumbs>
//       </Box>
//     </MemoryRouter>
//   );
// };

// export default withRouter(Breadcrumbs);
