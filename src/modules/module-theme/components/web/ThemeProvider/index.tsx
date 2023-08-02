/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import enAntd from 'antd/locale/en_US';
import viAntd from 'antd/locale/vi_VN';

/** components */
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ConfigProvider, theme as antdTheme, App } from 'antd';

/** utils */
import { ThemeContext } from '@module-theme/utils';
import { Decrypt, Encrypt, localStorageBase } from '@module-base/utils';
import { useLanguage } from '@module-language/utils';

/** constants */
import { localeObject } from '@module-language/constants';
import { themeLocalKey } from '@module-global/constants';
import { themeObject, themes } from '@module-theme/constants';

/** types */
import type { FC, ReactNode } from 'react';
import type { ThemeModeType, ThemeContextProps } from '@module-theme/models';

type Props = {
    children: ReactNode;
};
const ThemeProvider: FC<Props> = ({ children }: Props) => {
    const { locale } = useLanguage();

    const [mode, setMode] = React.useState<ThemeModeType>(() => {
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

    const store: ThemeContextProps = React.useMemo(
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
                    <App>{children}</App>
                </ConfigProvider>
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
