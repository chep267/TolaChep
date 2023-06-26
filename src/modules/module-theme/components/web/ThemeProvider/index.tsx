/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { useState, useMemo } from 'react';
import enAntd from 'antd/locale/en_US';
import viAntd from 'antd/locale/vi_VN';

/** components */
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ConfigProvider, theme as antdTheme } from 'antd';

/** utils */
import { ThemeContext } from '@module-theme/utils';
import { Decrypt, Encrypt } from '@module-base/utils';
import { useLanguage } from '@module-language/utils';

/** constants */
import { localStorageBase } from '@module-base/utils';
import { localeObject } from '@module-language/constants';
import { themeLocalKey } from '@module-global/constants';
import { themeObject, themes } from '@module-theme/constants';

/** types */
import type { FC, ReactNode } from 'react';
import type { ThemeModeType, ThemeProps } from '@module-theme/utils';

const ThemeProvider: FC<ReactNode> = ({ children }: { children: ReactNode }) => {
    const { locale } = useLanguage();

    const [mode, setMode] = useState<ThemeModeType>(() => {
        const modeCookie = Decrypt(localStorageBase.get(themeLocalKey)) as ThemeModeType;
        if (modeCookie && !!themes[modeCookie]) {
            return modeCookie;
        }
        return themeObject.light;
    });

    const toggleTheme = (value: ThemeModeType) => {
        if (mode === value) {
            return;
        }
        localStorageBase.set(themeLocalKey, Encrypt(value));
        setMode(value);
    };

    const store: ThemeProps = useMemo(
        () => ({
            mode,
            theme: themes[mode],
            toggleTheme,
        }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={store}>
            <StyledThemeProvider theme={themes[mode]}>
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
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
