import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

const PublicHeader = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-cream">
    <Link to="/" className="font-display text-xl font-semibold text-ink">
      EasyCater
    </Link>
    <nav className="hidden md:flex gap-6 text-sm text-ink/70">{/* TODO: nav links */}</nav>
    <div className="flex items-center gap-3">
      <Link to="/auth/login" className="text-sm font-medium text-ink">
        Sign In
      </Link>
      <Button asChild className="bg-terracotta hover:bg-terracotta/90">
        <Link to="/auth/sign-up">Sign Up</Link>
      </Button>
    </div>
  </header>
);

export default PublicHeader;
