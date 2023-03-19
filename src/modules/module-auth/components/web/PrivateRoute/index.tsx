/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import StartScreen from '@module-auth/screens/web/Start';

/** utils */
import { localStorageBase, sessionStorageBase } from '@module-base/storage';
import { meIdLocalKey, routerLocalKey, SCREEN } from '@module-global/constants';
import { AUTH_STORE_KEY } from '@module-auth/constants';
import { Decrypt, Encrypt } from '@module-base/utils';
import { useAppDispatch, useAppSelector } from '@app/store';

interface Props {
    type?: string;
    element: React.ReactNode | null;
}

function PrivateRoute(props: Props) {
    const { element, type } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const meId = useAppSelector((state) => state[AUTH_STORE_KEY.ROOT].meId);
    const meIdLocal = Decrypt(localStorageBase.get(meIdLocalKey));

    React.useEffect(() => {
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

        const doStart = () => {
            saveRoute();
            dispatch(authAction.autoStart.request({ uid: meIdLocal }));
        };

        const goSignIn = () => {
            saveRoute();
            navigate(SCREEN.SIGN_IN, { replace: true });
        };

        if (meIdLocal) {
            // có meIdLocal là đã đăng nhập
            if (meId) {
                // có meId là đã start xong -> chuyển vào home
                goHome();
            } else {
                // gửi api start
                doStart();
            }
        } else {
            // chưa đăng nhập, trở về đăng nhập
            goSignIn();
        }
    }, [meId, meIdLocal]);

    if (type === 'auth' || meId) {
        return <React.Fragment>{element}</React.Fragment>;
    }

    return <StartScreen />;
}

export default PrivateRoute;
