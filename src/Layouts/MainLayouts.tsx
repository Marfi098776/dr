import { Button } from '@/components/ui/button';
import { useTranslation } from '@/Hooks/useTranslation';
import Footer from '@/Pages/Shared/Footer';
import Navbar from '@/Pages/Shared/Navbar';
import { LogIn } from 'lucide-react';
import { Link, Outlet } from 'react-router';
const MainLayouts = () => {
    const { t, isBangla } = useTranslation();
    return (
        <div>
            <Navbar></Navbar>
            <Link to="/login">
                <Button
                    className={`fixed bottom-6 right-6 rounded-full shadow-lg z-40 ${isBangla ? 'bangla' : ''}`}
                    size="lg">
                    <LogIn className="w-5 h-5 mr-2" />
                    {t("nav.logIn")}
                </Button>
            </Link>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;