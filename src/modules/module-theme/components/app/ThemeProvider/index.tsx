/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { useState } from 'react';

/** components */
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

/** utils */
import { ThemeContext } from '@module-theme/utils';

/** constants */
import { localStorageBase } from '@module-base/utils';
import { themeObject, themes } from '@module-theme/constants';

/** types */
import type { FC, ReactNode } from 'react';
import type { ThemeModeType } from '@module-theme/utils';

const ThemeProvider: FC<ReactNode> = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeModeType>(themeObject.light);
    const [theme, setTheme] = useState(themes[mode]);

    const toggleTheme = () => {
        const _mode = mode === themeObject.light ? themeObject.dark : themeObject.light;
        document.documentElement.setAttribute('data-theme', _mode);
        // @ts-ignore
        localStorageBase.set('theme', _mode);
        setMode(_mode);
        setTheme(themes[mode]);
    };

    const store = React.useMemo(
        () => ({
            mode,
            theme,
            toggleTheme,
        }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={store}>
            <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.displayName = 'ThemeProvider';
export default ThemeProvider;
