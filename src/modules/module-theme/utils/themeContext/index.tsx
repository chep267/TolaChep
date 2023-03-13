/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

// Const
import { LIGHT_THEME, themes } from '@module-theme/constants';
import { TYPE_THEME, TYPE_MODE_THEME } from '@module-theme/utils';

export type ThemeProps = {
    mode: TYPE_MODE_THEME;
    theme: TYPE_THEME;
    toggleTheme: (value: TYPE_MODE_THEME) => void;
};

const initialState = {
    mode: LIGHT_THEME,
    theme: themes[LIGHT_THEME],
    toggleTheme: () => null,
};

const ThemeContext = React.createContext<ThemeProps>(initialState);
ThemeContext.displayName = 'ThemeContext';

const useTheme = () => React.useContext<ThemeProps>(ThemeContext);

function withTheme(WrappedComponent) {
    return function EnhancedComponent(props) {
        const theme = useTheme();
        return <WrappedComponent {...props} theme={theme} />;
    };
}

export { ThemeContext, useTheme, withTheme };
