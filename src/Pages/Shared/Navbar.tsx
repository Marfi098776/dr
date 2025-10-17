import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router';
import logo from '../../assets/10. Logo Horizontal.png'
import { useTranslation } from '@/Hooks/useTranslation';
import LanguageToggle from '@/components/common/LanguageToggle';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isBangla } = useTranslation();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="w-11/12 mx-auto border-2 border-b-green-200 rounded-b-2xl bg-background sticky top-0 z-50">
      <div className=" flex items-center justify-between px-4 ">
        {/* Logo */}
        <Link to="/" className='w-50'>
          <img src={logo} className='' alt="" />
        </Link>

        {/* navigation links */}

        {/* Menu for Desktop */}
        <ul className="hidden md:flex gap-1 text-foreground font-medium">
          <li><Link to="/">
            <Button onClick={() => scrollToSection("home")} 
              variant={`ghost`} 
              className={isBangla ? 'bangla text-base' : 'text-base'}
            >
              {t('nav.home')}
            </Button>
          </Link></li>
          <li>
            <Button onClick={() => scrollToSection("services")} 
              variant={`ghost`} 
              className={isBangla ? 'bangla text-base' : 'text-base'}
            >
              {t('nav.service')}
            </Button>
          </li>
          <li>
            
            <Button onClick={() => scrollToSection("about")} 
              variant={location.pathname === "/about" ? "secondary" : "ghost"} 
              className={isBangla ? 'bangla text-base' : 'text-base'}
            >
              {t('nav.about')}
            </Button>
          </li>
          <li>
            <Button 
              variant={`ghost`} 
              className={isBangla ? 'bangla text-base' : 'text-base'}
            >
              {t('nav.testimonials')}
            </Button>
          </li>
          <li>
            <Button variant={`ghost`}
               
              className={isBangla ? 'bangla text-base' : 'text-base'}
            >
              {t('nav.blog')}
            </Button>
          
          </li>
          <li>
            <Button onClick={() => scrollToSection("faq")}
             variant={`ghost`}  
               className={isBangla ? 'bangla text-base' : 'text-base'}
            >
              {t('nav.faq')}
            </Button>
          </li>
        </ul>

        {/* Right side (buttons + language) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/about">
            <Button  
              className={isBangla ? 'bangla text-sm' : ''}
            >
              {t('nav.bookAppointment')}
            </Button>
          </Link>
          <LanguageToggle />
          {/* <Button asChild variant={`outline `} className="text-sm">
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild className="text-sm">
            <Link to="/register">Register</Link>
          </Button> */}

          {/* Language Toggle */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Change Language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger> */}
            {/* <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={toggleLanguage}>
                {language === "EN" ? "Switch to বাংলা" : "Switch to English"}
              </DropdownMenuItem>
            </DropdownMenuContent> 
          </DropdownMenu>*/}
        </div>

        {/* Mobile menu button */}
        {/* <button
          onClick={toggleMenu}
          className="md:hidden text-foreground focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>*/}
      </div>

      {/* Mobile Dropdown */}
      {/* {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-3 space-y-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 ${isActive ? "text-primary font-semibold" : "text-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <Button asChild className="text-sm">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
            <Button variant="ghost" onClick={toggleLanguage}>
              🌐 {language === "EN" ? "Switch to বাংলা" : "Switch to English"}
            </Button>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;