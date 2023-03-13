/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** components */
import { PrivateRoute } from '@module-auth/components/web';

/** utils */
import { SCREEN } from '@module-global/constants';

/** screens */
const SignInScreen = React.lazy(() => import('@module-auth/screens/web/SignIn'));
const HomeScreen = React.lazy(() => import('@module-global/screens/web/MainScreen'));
const FeedScreen = React.lazy(() => import('@module-feed/screens/NewFeed'));
const MessengerScreen = React.lazy(() => import('@module-messenger/screens/MessengerApp'));
const NotFoundScreen = React.lazy(() => import('@module-global/screens/web/NotFound'));

function HomeRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route path={SCREEN.FEED} element={<FeedScreen />} />
                <Route path={SCREEN.MESSENGER} element={<MessengerScreen />} />
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </React.Suspense>
    );
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={null}>
                <Routes>
                    <Route path={SCREEN.SIGN_IN} element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                    <Route path={SCREEN.REGISTER} element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                    <Route path={SCREEN.RECOVER} element={<PrivateRoute type="auth" element={<SignInScreen />} />} />
                    <Route path="*" element={<PrivateRoute element={<HomeScreen element={<HomeRouter />} />} />} />
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}
