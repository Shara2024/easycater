import type { RouteObject } from 'react-router';
import GuestGuard from '@/routes/guards/GuestGuard';
import LoginPage from '@/pages/Login';
import SignUpPage from '@/pages/SignUp';

const AuthRoutes: RouteObject = {
  path: '/auth',
  element: <GuestGuard />,
  children: [
    { path: 'login', element: <LoginPage /> },
    { path: 'sign-up', element: <SignUpPage /> },
  ],
};

export default AuthRoutes;
