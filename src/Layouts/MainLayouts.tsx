import { Button } from '@/components/ui/button';
import { useTranslation } from '@/Hooks/useTranslation';
import Navbar from '@/Pages/Shared/Navbar';
import { LogIn } from 'lucide-react';
import React from 'react';
import { Link, Outlet } from 'react-router';
const MainLayouts = () => {
    const { t, isBangla } = useTranslation();
    return (
        <div>
            <Navbar></Navbar>
            <Link to="/login">
                <Button
                    className={`fixed bottom-6 right-6 rounded-full shadow-lg z-40 ${isBangla ? 'bangla' : ''}`}
                    size="lg"
                    onClick={() => setShowLogin(true)}
                >
                    <LogIn className="w-5 h-5 mr-2" />
                    {t("nav.logIn")}
                </Button>
            </Link>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;