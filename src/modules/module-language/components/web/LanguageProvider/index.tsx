/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { IntlProvider } from 'react-intl';

// constants
import { LOCALE_OBJECT } from '@module-language/constants';
import { localeLocalKey } from '@module-global/constants';

// selectors
import { getDeviceLanguage } from '@module-language/selectors';

/** utils */
import { LanguageContext } from '@module-language/utils';
import { localStorageBase } from '@module-base/storage';
import { Encrypt, Decrypt } from '@module-base/utils';

// type
import { TYPE_LOCALE } from '@module-language/constants';

interface Props {
    children: React.ReactNode;
    messages: Record<TYPE_LOCALE, any>;
}

function LanguageProvider({ children, messages }: Props) {
    const [locale, setLocale] = React.useState<TYPE_LOCALE>(getDeviceLanguage());

    React.useEffect(() => {
        const initLanguage = async () => {
            const lastLocale = (await localStorageBase.get(localeLocalKey)) || '';
            const localeCookie = Decrypt(lastLocale) as TYPE_LOCALE;
            if (localeCookie && localeCookie !== locale && !!LOCALE_OBJECT[localeCookie]) {
                setLocale(localeCookie);
            }
        };

        initLanguage().then();
    }, []);

    const toggleLanguage = (value: TYPE_LOCALE) => {
        if (locale === value) {
            return;
        }
        localStorageBase.set(localeLocalKey, Encrypt(value));
        setLocale(value);
    };

    const store = React.useMemo(
        () => ({
            locale,
            messages: messages[locale],
            toggleLanguage,
        }),
        [locale]
    );

    return (
        <LanguageContext.Provider value={store}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;
