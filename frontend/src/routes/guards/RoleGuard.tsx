import { Outlet } from 'react-router';
import type { Role } from '@/constants/common';

type RoleGuardProps = {
  allowedRoles: Role[];
};

const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
  void allowedRoles;
  return <Outlet />;
};

export default RoleGuard;
