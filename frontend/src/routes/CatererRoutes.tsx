import type { RouteObject } from 'react-router';
import RoleGuard from '@/routes/guards/RoleGuard';
import { ROLE } from '@/constants/common';

const catererRoutes: RouteObject = {
  path: '/app/caterer',
  element: <RoleGuard allowedRoles={[ROLE.CATERER]} />,
  children: [],
};

export default catererRoutes;
