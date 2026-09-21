import { createBrowserRouter } from 'react-router';

import PublicRoutes from '@/routes/PublicRoutes';
import AuthRoutes from '@/routes/AuthRoutes';
import CustomerRoutes from '@/routes/CustomerRoutes';
import CatererRoutes from '@/routes/CatererRoutes';
import AdminRoutes from '@/routes/AdminRoutes';

const router = createBrowserRouter([
  PublicRoutes,
  AuthRoutes,
  CustomerRoutes,
  CatererRoutes,
  AdminRoutes,
]);

export default router;
