/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Themes
import { ThemeContext } from '@module-theme/utils/themeContext';

/** utils */
import { localStorageBase } from '@module-base/storage';
import { DARK_THEME, LIGHT_THEME, themes } from '@module-theme/constants';

/**
 * Note: Dam bao cau hinh themes lay tu server duoc tra va truoc khi mount component nay ra.
 * Component nay khong ho tro update theme de dam bao van de hieu nang.
 */

type Props = {
    children: ReactNode | undefined;
};

function ThemeProviderBase({ children }: Props) {
    // const modeRef = useRef(localStorageBase.get('theme')).current || 'os-default';
    const [mode, setMode] = useState<typeof LIGHT_THEME | typeof DARK_THEME>(LIGHT_THEME);
    const [theme, setTheme] = useState(themes[mode]);

    // useEffect(() => {
    //     if (modeRef === 'os-default') {
    //         const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //         const _mode = isOsDark ? DARK_THEME : LIGHT_THEME;
    //         setMode(_mode);
    //         document.documentElement.setAttribute('data-theme', _mode);
    //         return;
    //     }
    //
    //     document.documentElement.setAttribute('data-theme', mode);
    // }, []);

    // useEffect(() => {
    //     const onSystemThemeChange = (e: MediaQueryListEvent) => {
    //         if (localStorageBase.get('theme')) {
    //             return;
    //         }
    //         const isOsDark = e.matches;
    //         const _mode = isOsDark ? DARK_THEME : LIGHT_THEME;
    //         document.documentElement.setAttribute('data-theme', _mode);
    //     };
    //
    //     const matchMediaPrefDark = window.matchMedia('(prefers-color-scheme: dark)');
    //
    //     matchMediaPrefDark.addEventListener('change', onSystemThemeChange);
    //
    //     return () => {
    //         matchMediaPrefDark.removeEventListener('change', onSystemThemeChange);
    //     };
    // }, []);

    const toggleTheme = () => {
        const _mode = mode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
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
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeProviderBase;
