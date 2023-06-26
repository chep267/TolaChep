/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** components */
import { PrivateRoute } from '@module-auth/components/web';

/** utils */
import { SCREEN } from '@module-global/constants';

/** screens */
const SignInScreen = lazy(() => import('@modules/module-auth/screens/web/SignIn'));
const MainScreen = lazy(() => import('@modules/module-global/screens/web/MainScreen'));
const FeedScreen = lazy(() => import('@modules/module-feed/screens/NewFeed'));
const MessengerScreen = lazy(() => import('@modules/module-messenger/screens/MessengerApp'));
const NotFoundScreen = lazy(() => import('@modules/module-global/screens/web/NotFound'));

function HomeRouter() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path={SCREEN.FEED} element={<FeedScreen />} />
                <Route path={SCREEN.MESSENGER} element={<MessengerScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Suspense>
    );
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path={SCREEN.SIGN_IN} element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                    <Route path={SCREEN.REGISTER} element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                    <Route path={SCREEN.RECOVER} element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                    <Route path="*" element={<PrivateRoute element={<MainScreen element={<HomeRouter />} />} />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
