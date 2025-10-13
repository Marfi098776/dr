import { useTranslation } from '@/Hooks/useTranslation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
    const { changeLanguage, currentLanguage, isBangla } = useTranslation();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                    <Languages className="h-4 w-4" />
                    <span className={isBangla ? 'bangla' : ''}>
                        {isBangla ? 'বাংলা' : 'English'}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => changeLanguage('bn')}
                    className={currentLanguage === 'bn' ? 'bg-accent' : ''}
                >
                    <span className="bangla">বাংলা</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => changeLanguage('en')}
                    className={currentLanguage === 'en' ? 'bg-accent' : ''}
                >
                    English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageToggle;