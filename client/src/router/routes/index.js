import { accountRoutes } from './accountRoutes';
import { authRoutes } from './authRoutes';
import { merchandisingReportingRoutes } from './merchandisingReportingRoutes';

// ** Document title
const TemplateTitle = '%s - ERP';

// ** Default Route
const DefaultRoute = '/home';

// ** Merge Routes
const Routes = [...authRoutes, ...accountRoutes, ...merchandisingReportingRoutes];

export { DefaultRoute, TemplateTitle, Routes };
