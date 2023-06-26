/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { useContext, createContext } from 'react';

/** constants */
import { localeObject } from '@module-language/constants';
import { emptyObject } from '@module-base/constants';

/** types */
import type { FunctionComponent } from 'react';
import type { LocaleType, LanguageProps } from '@module-language/constants';

const LanguageContext = createContext<LanguageProps>({
    locale: localeObject.vi,
    messages: emptyObject,
    toggleLanguage: (value: LocaleType) => value,
});

const useLanguage = () => useContext(LanguageContext);

function withLanguage(WrappedComponent: FunctionComponent) {
    return function EnhancedComponent<Props>(props: Props) {
        const language = useLanguage();
        return <WrappedComponent {...props} useLanguage={language} />;
    };
}

LanguageContext.displayName = 'LanguageContext';
export { LanguageContext, useLanguage, withLanguage };
