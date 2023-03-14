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
import { LIGHT_THEME, PURPLE_THEME, DARK_THEME, themes } from '@module-theme/constants';
import { ThemeContext, TYPE_MODE_THEME } from '@module-theme/utils';
import { themeLocalKey } from '@module-global/constants';
import { Decrypt, Encrypt } from '@module-base/utils';
import { useLanguage } from '@module-language/utils';
import { LOCALE_OBJECT } from '@module-language/constants';

/**
 * Note: Dam bao cau hinh themes lay tu server duoc tra va truoc khi mount component nay ra.
 * Component nay khong ho tro update theme de dam bao van de hieu nang.
 */

type Props = {
    children: ReactNode;
};

function ThemeProviderBase({ children }: Props) {
    const { locale } = useLanguage();

    const [mode, setMode] = useState<TYPE_MODE_THEME>(() => {
        const modeCookie = Decrypt(localStorageBase.get(themeLocalKey) || '') as TYPE_MODE_THEME;
        if (modeCookie && !!themes[modeCookie]) {
            return modeCookie;
        }
        return LIGHT_THEME;
    });

    const toggleTheme = (value: TYPE_MODE_THEME) => {
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
                    locale={locale === LOCALE_OBJECT.EN ? enAntd : viAntd}
                    theme={{
                        algorithm: mode === DARK_THEME ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                        token:
                            mode === PURPLE_THEME
                                ? {
                                      colorPrimary: '#9e339f',
                                  }
                                : {},
                    }}>
                    {children}
                </ConfigProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeProviderBase;
