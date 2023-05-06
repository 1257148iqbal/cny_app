import { lazy } from 'react';

export const authRoutes = [
  {
    path: '/home',
    component: lazy( () => import( '../../views/Home' ) )
  },


  {
    path: '/error',
    component: lazy( () => import( '../../views/Error' ) ),
    layout: 'BlankLayout'
  }
];
