/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** utils */
import { themeObject, themes } from '@module-theme/constants';

/** types */
import type { ComponentType } from 'react';
import type { ThemeContextProps } from '@module-theme/models';

const ThemeContext = React.createContext<ThemeContextProps>({
    mode: themeObject.light,
    theme: themes[themeObject.light],
    toggleTheme: () => null,
});

const useTheme = () => React.useContext(ThemeContext);

function withTheme<Props>(WrappedComponent: ComponentType<Props>) {
    return function EnhancedComponent(props: Props) {
        const theme = useTheme();
        return <WrappedComponent {...props} theme={theme} />;
    };
}

ThemeContext.displayName = 'ThemeContext';
export { ThemeContext, useTheme, withTheme };
