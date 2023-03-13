/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { App } from 'antd';

/** actions */
import { GLOBAL_ACTION } from '@module-global/actions';

/** components */
import { ErrorBoundary } from '@module-error/components';

/** utils */
import { TIME_LOADING_APP } from '@module-global/constants';
import { useAppDispatch } from '@app/store';

/** screens */
const LoadingScreen = React.lazy(() => import('@module-global/screens/web/LoadingScreen'));
const AppRouter = React.lazy(() => import('@app/screens/AppRouter'));

function ToLaApp() {
    const dispatch = useAppDispatch();
    const [timer, setTimer] = React.useState(true);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const onStartSuccess = () => {
            window.isToLaStart = true;
            setLoading(true);
        };

        const TimeOut: NodeJS.Timeout = setTimeout(() => {
            setTimer(false);
        }, TIME_LOADING_APP);

        dispatch({ type: GLOBAL_ACTION.START_APP.REQUEST, payload: { onSuccess: onStartSuccess } });

        return () => {
            clearTimeout(TimeOut);
        };
    }, []);

    return (
        <ErrorBoundary isAutoReload>
            <App>
                <React.Suspense fallback={null}>
                    {/*{!window.isToLaStart && (timer || isLoading) ? <LoadingScreen /> : null}*/}
                    <AppRouter />
                </React.Suspense>
            </App>
        </ErrorBoundary>
    );
}

export default ToLaApp;
