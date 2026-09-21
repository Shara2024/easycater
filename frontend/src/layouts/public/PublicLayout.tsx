import { Outlet } from 'react-router';
import PublicHeader from '@/layouts/public/PublicHeader';
import PublicFooter from '@/layouts/public/PublicFooter';

const PublicLayout = () => {
  return (
    <>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <PublicFooter />
    </>
  );
};

export default PublicLayout;
