/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

/** constants */
import { localeObject } from '@module-language/constants';
import { TypeLocale } from '@module-language/utils';

export interface LanguageProps {
    locale: TypeLocale;
    messages: Record<string, string>;
    toggleLanguage: (value: TypeLocale) => void;
}

const LanguageContext = React.createContext<LanguageProps>({
    locale: localeObject.vi,
    messages: {},
    toggleLanguage: (value: TypeLocale) => value,
});

LanguageContext.displayName = 'LanguageContext';

const useLanguage: () => LanguageProps = () => React.useContext(LanguageContext);

function withLanguage(WrappedComponent: React.ElementType) {
    return function EnhancedComponent(props: any) {
        const language = useLanguage();
        return <WrappedComponent {...props} useLanguage={language} />;
    };
}

export { LanguageContext, useLanguage, withLanguage };
