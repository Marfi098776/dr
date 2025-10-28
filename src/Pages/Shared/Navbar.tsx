import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router';
import logo from '../../assets/10. Logo Horizontal.png'
import { useTranslation } from '@/Hooks/useTranslation';
import LanguageToggle from '@/components/common/LanguageToggle';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthContext } from '@/Providers/AuthProviders';
import { useContext } from 'react';

const Navbar = () => {
  
  const { t, isBangla } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.service'), path: "/services" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.testimonials'), path: "/testimonials" },
    { name: t('nav.blog'), path: "/blog" },
    { name: t('nav.faq'), path: "/faq" },
  ];

  return (
    <nav className="w-11/12 mx-auto border-b-2 border-b-green-200 rounded-b-2xl bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="w-50">
          <img src={logo} alt="Logo" className="" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-1 text-foreground font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "secondary" : "ghost"}
                  className={isBangla ? "bangla text-base" : "text-base"}
                >
                  {link.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
          <Link to="/login">
            <Button variant="outline" className={isBangla ? "bangla text-sm" : ""}>
              {t('nav.logIn')}
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary" className={isBangla ? "bangla text-sm" : ""}>
              {t('nav.register')}
            </Button>
          </Link>
          <LanguageToggle />
        </div>

        {/* Mobile menu button */}
          
        
        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t-2 border-green-200">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} onClick={() => setMobileOpen(false)}>
                  <Button
                    variant={location.pathname === link.path ? "secondary" : "ghost"}
                    className={isBangla ? "bangla text-base w-full text-left" : "text-base w-full text-left"}
                  >
                    {link.name}
                  </Button>
                </Link>
              </li>
            ))}
            <Avatar className='md:hidden'>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
            <li>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className={isBangla ? "bangla text-base w-full text-left" : "w-full text-left"}>
                  {t('nav.logIn')}
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setMobileOpen(false)}>
                <Button variant="secondary" className={isBangla ? "bangla text-base w-full text-left" : "w-full text-left"}>
                  {t('nav.register')}
                </Button>
              </Link>
            </li>
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;