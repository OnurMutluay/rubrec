import { useRouter } from 'next/router';

const localizations = {
    en: require('../localization/en.json'),
    de: require('../localization/de.json'),
    tr: require('../localization/tr.json'),
};

export const useLocalization = () => {
    const { locale } = useRouter();
    return localizations[locale || 'en'];
};
