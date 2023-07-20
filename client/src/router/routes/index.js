import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/DashboardScreen'))
  },
  {
    path: '/news',
    component: lazy(() => import('../../views/NewsScreen'))
  },
  {
    path: '/users',
    component: lazy(() => import('../../views/UserScreen'))
  },
  {
    path: '/categories',
    component: lazy(() => import('../../views/CategoriesScreen'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
