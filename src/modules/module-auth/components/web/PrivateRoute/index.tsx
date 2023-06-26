/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/** actions */
import { authAction } from '@module-auth/actions';
import { useAppDispatch, useAppSelector } from '@app/store';

/** utils */
import { localStorageBase, sessionStorageBase, Decrypt, Encrypt } from '@module-base/utils';

/** constants */
import { meIdLocalKey, routerLocalKey, SCREEN } from '@module-global/constants';

/** selectors */
import { getMeId } from '@module-auth/selectors';

/** types */
type PrivateRouteProps = {
    type?: string;
    element: React.ReactNode;
};

/** components */
const StartScreen = lazy(() => import('@module-auth/screens/web/Start'));

function PrivateRoute(props: PrivateRouteProps) {
    const { element, type } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const meId = useAppSelector(getMeId);
    const meIdLocal = Decrypt(localStorageBase.get(meIdLocalKey));

    React.useEffect(() => {
        runEffectRoute();
    }, [meId, meIdLocal]);

    const runEffectRoute = () => {
        if (!meIdLocal) {
            // chưa đăng nhập, trở về đăng nhập
            return goSignIn();
        }
        // có meIdLocal là đã đăng nhập
        if (meId) {
            // có meId là đã start xong -> chuyển vào home
            return goHome();
        }
        // gửi api start
        doStart();
    };

    const doStart = () => {
        saveRoute();
        dispatch(authAction.autoStart.request({ uid: meIdLocal }));
    };

    const goSignIn = () => {
        saveRoute();
        navigate(SCREEN.SIGN_IN, { replace: true });
    };

    const goHome = () => {
        const prevRouterPathname: string = Decrypt(sessionStorageBase.get(routerLocalKey)) || SCREEN.FEED;
        navigate(prevRouterPathname, { replace: true });
    };

    const saveRoute = () => {
        const { pathname, search } = location;
        let route = type === 'auth' ? SCREEN.FEED : pathname + search;
        if (route === '/' || pathname === '/') {
            route = SCREEN.FEED;
        }
        sessionStorageBase.set(routerLocalKey, Encrypt(route));
    };

    if (type === 'auth' || meId) {
        return element;
    }

    return <StartScreen />;
}

export default PrivateRoute;
