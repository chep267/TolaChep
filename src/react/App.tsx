/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

/** screens */
import RootScreen from '@module-global/screens/web/RootScreen';

/** providers */
import { ThemeProvider } from '@module-theme/components/web';
import { LanguageProvider } from '@module-language/components/web';
import { UiProvider } from '@module-global/components/web';

/** utils */
import { reduxStore, messages } from '@module-global/utils';

/** global styles */
import './index.css';

declare global {
    interface WindowType {
        checkMobile(): boolean;
        isMobile: boolean;
    }

    interface Window extends WindowType {}
}

window.checkMobile = () => /iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent);
window.isMobile = window.checkMobile();

const App = () => (
    <ReduxProvider store={reduxStore}>
        <LanguageProvider messages={messages}>
            <ThemeProvider>
                <UiProvider>
                    <RootScreen />
                </UiProvider>
            </ThemeProvider>
        </LanguageProvider>
    </ReduxProvider>
);

export default App;
