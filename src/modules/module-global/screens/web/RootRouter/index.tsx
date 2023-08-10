/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** components */
import { PrivateRoute } from '@module-auth/components/web';

/** constants */
import { SCREEN } from '@module-global/constants';

/** screens */
const SignInScreen = React.lazy(() => import('@module-auth/screens/web/SignInScreen'));
const HomeScreen = React.lazy(() => import('@module-global/screens/web/HomeScreen'));
const FeedScreen = React.lazy(() => import('@module-feed/screens/web/FeedScreen'));
const MessengerScreen = React.lazy(() => import('@module-messenger/screens/web/MessengerApp'));
const ProfileScreen = React.lazy(() => import('@module-user/screens/web/ProfileScreen'));
const NotFoundScreen = React.lazy(() => import('@module-global/screens/web/NotFound'));

function HomeRouter() {
    return (
        <React.Suspense fallback={null}>
            <Routes>
                <Route path={SCREEN.FEED} element={<FeedScreen />} />
                <Route path={SCREEN.MESSENGER} element={<MessengerScreen />}>
                    <Route path={`${SCREEN.MESSENGER}/:threadId`} element={<MessengerScreen />} />
                </Route>
                <Route path={SCREEN.PROFILE} element={<ProfileScreen />}>
                    <Route path={`${SCREEN.PROFILE}/:userId`} element={<ProfileScreen />} />
                </Route>
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
