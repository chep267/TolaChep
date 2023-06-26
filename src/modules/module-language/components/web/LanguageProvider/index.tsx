/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { useState, useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';

/** selectors */
import { getDeviceLanguage } from '@module-language/selectors';

/** utils */
import { LanguageContext } from '@module-language/utils';
import { Encrypt, Decrypt } from '@module-base/utils';

/** constants */
import { localStorageBase } from '@module-base/utils';
import { localeObject } from '@module-language/constants';
import { localeLocalKey } from '@module-global/constants';

/** types */
import type { FC, ReactNode } from 'react';
import type { MessagesType, LocaleType, LanguageProps } from '@module-language/utils';

type Props = {
    children: ReactNode;
    messages: MessagesType;
};

const LanguageProvider: FC<ReactNode> = ({ children, messages }: Props) => {
    const [locale, setLocale] = useState<LocaleType>(getDeviceLanguage());

    useEffect(() => {
        const initLanguage = async () => {
            const lastLocale = (await localStorageBase.get(localeLocalKey)) || '';
            const localeCookie = Decrypt(lastLocale) as LocaleType;
            if (localeCookie && localeCookie !== locale && !!localeObject[localeCookie]) {
                setLocale(localeCookie);
            }
        };

        initLanguage().then();
    }, []);

    const toggleLanguage = (value: LocaleType) => {
        if (locale === value) {
            return;
        }
        localStorageBase.set(localeLocalKey, Encrypt(value));
        setLocale(value);
    };

    const store: LanguageProps = useMemo(
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
};

LanguageProvider.displayName = 'LanguageProvider';
export default LanguageProvider;
