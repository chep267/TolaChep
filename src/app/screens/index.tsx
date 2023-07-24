/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** actions */
import { globalAction } from '@module-global/actions';
import { useAppDispatch } from '@app/store';

/** components */
import { ErrorBoundary } from '@module-error/components';

/** utils */
import { TIME_LOADING_APP } from '@module-global/constants';

/** screens */
const LoadingScreen = React.lazy(() => import('@modules/module-global/screens/web/LoadingScreen'));
const AppRouter = React.lazy(() => import('@app/screens/AppRouter'));

function ToLaApp() {
    const dispatch = useAppDispatch();
    const [timer, setTimer] = React.useState(true);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const onStartSuccess = () => {
            window.isToLaStart = true;
            setLoading(false);
        };
        const TimeOut: NodeJS.Timeout = setTimeout(() => {
            setTimer(false);
        }, TIME_LOADING_APP);

        dispatch(globalAction.startApp.request({ onSuccess: onStartSuccess }));

        return () => {
            clearTimeout(TimeOut);
        };
    }, []);

    return (
        <ErrorBoundary isAutoReload>
            <React.Suspense fallback={null}>
                {!window.isToLaStart && (timer || isLoading) ? <LoadingScreen /> : <AppRouter />}
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default ToLaApp;
