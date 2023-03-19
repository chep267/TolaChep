/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';

/** utils */
import { themeObject, themes } from '@module-theme/constants';
import { TypeTheme, TypeModeTheme } from '@module-theme/utils';

export type ThemeProps = {
    mode: TypeModeTheme;
    theme: TypeTheme;
    toggleTheme: (value: TypeModeTheme) => void;
};

const initialState = {
    mode: themeObject.light,
    theme: themes[themeObject.light],
    toggleTheme: () => null,
};

const ThemeContext = React.createContext<ThemeProps>(initialState);
ThemeContext.displayName = 'ThemeContext';

const useTheme = () => React.useContext<ThemeProps>(ThemeContext);

function withTheme(WrappedComponent: React.ElementType) {
    return function EnhancedComponent(props: any) {
        const theme = useTheme();
        return <WrappedComponent {...props} theme={theme} />;
    };
}

export { ThemeContext, useTheme, withTheme };
