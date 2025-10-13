import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './en/common.json';
import bnCommon from './bn/common.json';

const resources = {
    en: {
        common: enCommon,
    },
    bn: {
        common: bnCommon,
    },
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    lng: 'bn',
    fallbackLng: 'bn',
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        checkWhiteList: true,
    },
});

i18n.changeLanguage('bn');

export default i18n;