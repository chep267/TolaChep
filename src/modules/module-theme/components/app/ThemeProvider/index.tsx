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
import { themeObject, themes } from '@module-theme/constants';
import { TypeModeTheme } from '@module-theme/utils';

/**
 * Note: Dam bao cau hinh themes lay tu server duoc tra va truoc khi mount component nay ra.
 * Component nay khong ho tro update theme de dam bao van de hieu nang.
 */

type Props = {
    children: ReactNode | undefined;
};

function ThemeProviderBase({ children }: Props) {
    // const modeRef = useRef(localStorageBase.get('theme')).current || 'os-default';
    const [mode, setMode] = useState<TypeModeTheme>(themeObject.light);
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
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default ThemeProviderBase;
