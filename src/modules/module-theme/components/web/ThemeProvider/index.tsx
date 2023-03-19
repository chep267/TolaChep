/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider, theme as antdTheme } from 'antd';
import enAntd from 'antd/locale/en_US';
import viAntd from 'antd/locale/vi_VN';

/** utils */
import { localStorageBase } from '@module-base/storage';
import { themeObject, themes } from '@module-theme/constants';
import { ThemeContext, TypeModeTheme } from '@module-theme/utils';
import { themeLocalKey } from '@module-global/constants';
import { Decrypt, Encrypt } from '@module-base/utils';
import { useLanguage } from '@module-language/utils';
import { localeObject } from '@module-language/constants';

/**
 * Note: Dam bao cau hinh themes lay tu server duoc tra va truoc khi mount component nay ra.
 * Component nay khong ho tro update theme de dam bao van de hieu nang.
 */

type Props = {
    children: ReactNode;
};

function ThemeProviderBase({ children }: Props) {
    const { locale } = useLanguage();

    const [mode, setMode] = useState<TypeModeTheme>(() => {
        const modeCookie = Decrypt(localStorageBase.get(themeLocalKey)) as TypeModeTheme;
        if (modeCookie && !!themes[modeCookie]) {
            return modeCookie;
        }
        return themeObject.light;
    });

    const toggleTheme = (value: TypeModeTheme) => {
        if (mode === value) {
            return;
        }
        localStorageBase.set(themeLocalKey, Encrypt(value));
        setMode(value);
    };

    const store = React.useMemo(
        () => ({
            mode,
            theme: themes[mode],
            toggleTheme,
        }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={store}>
            <ThemeProvider theme={themes[mode]}>
                <ConfigProvider
                    locale={locale === localeObject.en ? enAntd : viAntd}
                    theme={{
                        algorithm: mode === themeObject.dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                        token:
                            mode === themeObject.purple
                                ? {
                                      colorPrimary: '#9e339f',
                                  }
                                : {},
                        hashed: false,
                    }}>
                    {children}
                </ConfigProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeProviderBase;
