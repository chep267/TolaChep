/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** constants */
import { localeObject } from '@module-language/constants';
import { emptyObject } from '@module-base/constants';

/** types */
import type { ComponentType } from 'react';
import type { LocaleType, LanguageProps } from '@module-language/utils/type';

const LanguageContext = React.createContext<LanguageProps>({
    locale: localeObject.vi,
    messages: emptyObject,
    toggleLanguage: (value: LocaleType) => value,
});

const useLanguage = () => React.useContext(LanguageContext);

function withLanguage<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const language = useLanguage();
        return <WrappedComponent {...props} useLanguage={language} />;
    };
}

LanguageContext.displayName = 'LanguageContext';
export { LanguageContext, useLanguage, withLanguage };
