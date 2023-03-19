/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

/** screens */
import MainScreen from '@app/screens';

/** providers */
import { ThemeProvider } from '@module-theme/components/web';
import { LanguageProvider } from '@module-language/components/web';
import { UiProvider } from '@module-global/components/web';

/** utils */
import store from '@app/store';
import { messages } from '@app/utils';

/** global styles */
import './index.css';

declare global {
    interface WindowType {
        checkMobile(): boolean;
        isMobile: boolean;
        isToLaStart: boolean;
    }

    interface Window extends WindowType {}
}

window.checkMobile = () => /iPhone|iPad|iPod|Android|Mobi/i.test(navigator.userAgent);
window.isMobile = window.checkMobile();
window.isToLaStart = false;

const App = () => (
    <ReduxProvider store={store}>
        <LanguageProvider messages={messages}>
            <ThemeProvider>
                <UiProvider>
                    <MainScreen />
                </UiProvider>
            </ThemeProvider>
        </LanguageProvider>
    </ReduxProvider>
);

export default App;
