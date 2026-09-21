import type { RouteObject } from 'react-router';
import RoleGuard from '@/routes/guards/RoleGuard';
import { ROLE } from '@/constants/common';

const customerRoutes: RouteObject = {
  path: '/app/customer',
  element: <RoleGuard allowedRoles={[ROLE.CUSTOMER]} />,
  children: [],
};

export default customerRoutes;
