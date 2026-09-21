import type { RouteObject } from 'react-router';
import RoleGuard from '@/routes/guards/RoleGuard';
import { ROLE } from '@/constants/common';

const adminRoutes: RouteObject = {
  path: '/app/admin',
  element: <RoleGuard allowedRoles={[ROLE.ADMIN]} />,
  children: [],
};

export default adminRoutes;
