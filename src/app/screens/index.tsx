/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';

/** actions */
import { globalAction } from '@module-global/actions';
import { useAppDispatch } from '@app/store';

/** components */
import { App } from 'antd';
import { ErrorBoundary } from '@module-error/components';

/** utils */
import { TIME_LOADING_APP } from '@module-global/constants';

/** screens */
const LoadingScreen = lazy(() => import('@modules/module-global/screens/web/LoadingScreen'));
const AppRouter = lazy(() => import('@app/screens/AppRouter'));

function ToLaApp() {
    const dispatch = useAppDispatch();
    const [timer, setTimer] = useState(true);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
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
            <App>
                <Suspense fallback={null}>
                    {!window.isToLaStart && (timer || isLoading) ? <LoadingScreen /> : <AppRouter />}
                </Suspense>
            </App>
        </ErrorBoundary>
    );
}

export default ToLaApp;
