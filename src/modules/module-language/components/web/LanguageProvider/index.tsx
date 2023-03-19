/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { IntlProvider } from 'react-intl';

/** constants */
import { localeObject } from '@module-language/constants';
import { localeLocalKey } from '@module-global/constants';

// selectors
import { getDeviceLanguage } from '@module-language/selectors';

/** utils */
import { LanguageContext, TypeMessages, TypeLocale } from '@module-language/utils';
import { localStorageBase } from '@module-base/storage';
import { Encrypt, Decrypt } from '@module-base/utils';

interface Props {
    children: React.ReactNode;
    messages: TypeMessages;
}

function LanguageProvider({ children, messages }: Props) {
    const [locale, setLocale] = React.useState<TypeLocale>(getDeviceLanguage());

    React.useEffect(() => {
        const initLanguage = async () => {
            const lastLocale = (await localStorageBase.get(localeLocalKey)) || '';
            const localeCookie = Decrypt(lastLocale) as TypeLocale;
            if (localeCookie && localeCookie !== locale && !!localeObject[localeCookie]) {
                setLocale(localeCookie);
            }
        };

        initLanguage().then();
    }, []);

    const toggleLanguage = (value: TypeLocale) => {
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
