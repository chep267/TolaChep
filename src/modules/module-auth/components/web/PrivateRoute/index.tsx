/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

/** actions */
import { authAction } from '@module-auth/actions';

/** utils */
import { sessionStorageBase, Decrypt, Encrypt } from '@module-base/utils';
import { getMeId } from '@module-auth/utils';
import { useAppDispatch, useAppSelector } from '@module-global/utils';

/** constants */
import { meIdCookieKey, routerLocalKey, SCREEN } from '@module-global/constants';

/** types */
import type { ReactNode } from 'react';

type PrivateRouteProps = {
    type?: string;
    element: ReactNode;
};

/** components */
const StartScreen = React.lazy(() => import('@module-auth/screens/web/StartScreen'));

function PrivateRoute(props: PrivateRouteProps) {
    const { element, type } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const meId = useAppSelector(getMeId);
    const meIdCookie = Cookies.get(meIdCookieKey) || '';

    React.useEffect(() => {
        const runEffectRoute = () => {
            if (!meIdCookie) {
                // chưa đăng nhập, trở về đăng nhập
                saveRoute();
                return navigate(SCREEN.SIGN_IN, { replace: true });
            }
            // có meIdCookie là đã đăng nhập
            if (meId) {
                // có meId là đã start xong -> chuyển vào home
                const prevRouterPathname: string = Decrypt(sessionStorageBase.get(routerLocalKey)) || SCREEN.FEED;
                return navigate(prevRouterPathname, { replace: true });
            }
            // gửi api start
            saveRoute();
            dispatch(authAction.signIn.success({ meId: meIdCookie }));
        };

        runEffectRoute();
    }, [meId, meIdCookie]);

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
