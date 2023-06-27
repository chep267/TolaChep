/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** utils */
import { themeObject, themes } from '@module-theme/constants';

/** types */
import type { FunctionComponent } from 'react';
import type { ThemeProps } from '@module-theme/utils/type';

const ThemeContext = React.createContext<ThemeProps>({
    mode: themeObject.light,
    theme: themes[themeObject.light],
    toggleTheme: () => null,
});

const useTheme = () => React.useContext(ThemeContext);

function withTheme(WrappedComponent: FunctionComponent) {
    return function EnhancedComponent<Props>(props: Props) {
        const theme = useTheme();
        return <WrappedComponent {...props} theme={theme} />;
    };
}

ThemeContext.displayName = 'ThemeContext';
export { ThemeContext, useTheme, withTheme };
