import type { RouteObject } from 'react-router';
import PublicLayout from '@/layouts/public/PublicLayout';
import LandingPage from '@/pages/Landing';

const publicRoutes: RouteObject = {
  path: '/',
  element: <PublicLayout />,
  children: [{ index: true, element: <LandingPage /> }],
};

export default publicRoutes;
