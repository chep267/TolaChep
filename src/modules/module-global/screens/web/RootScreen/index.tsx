/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** apis */
import { useAppStart, useTimer } from '@module-global/apis';

/** components */
import { ErrorBoundary } from '@module-error/components';

/** utils */
import { TIME_LOADING_APP } from '@module-global/constants';

/** screens */
const LoadingScreen = React.lazy(() => import('@module-global/screens/web/LoadingScreen'));
const RootRouter = React.lazy(() => import('@module-global/screens/web/RootRouter'));

function ToLaApp() {
    const appStart = useAppStart();
    const { isTiming } = useTimer({ timer: TIME_LOADING_APP });

    return (
        <ErrorBoundary isAutoReload>
            <React.Suspense fallback={null}>
                {isTiming || appStart.isLoading ? <LoadingScreen /> : <RootRouter />}
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default ToLaApp;
