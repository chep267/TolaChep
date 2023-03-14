/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

/** constants */
import { LOCALE_OBJECT, TYPE_LOCALE } from '@module-language/constants';

export interface LanguageProps {
    locale: TYPE_LOCALE;
    messages: Record<string, string>;
    toggleLanguage: (value: TYPE_LOCALE) => void;
}

const LanguageContext = React.createContext<LanguageProps>({
    locale: LOCALE_OBJECT.VI,
    messages: {},
    toggleLanguage: (value: TYPE_LOCALE) => value,
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
