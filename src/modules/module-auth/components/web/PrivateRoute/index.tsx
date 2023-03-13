/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import StartScreen from '@module-auth/screens/web/Start';

/** utils */
import { localStorageBase, sessionStorageBase } from '@module-base/storage';
import { meIdLocalKey, routerLocalKey, SCREEN } from '@module-global/constants';
import { AUTH_STORE_KEY } from '@module-auth/constants';
import { Decrypt } from '@module-base/utils';
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
    const meIdLocal = Decrypt(localStorageBase.get(meIdLocalKey) || '');

    useEffect(() => {
        const goHome = () => {
            const prevRouterPathname: string = sessionStorageBase.get(routerLocalKey) || SCREEN.FEED;
            navigate(prevRouterPathname, { replace: true });
        };
        const doStart = () => {
            const { pathname, search } = location;
            sessionStorageBase.set(routerLocalKey, type === 'auth' ? SCREEN.FEED : pathname + search);
            dispatch(authAction.autoStart.request({ uid: meIdLocal }));
        };
        const goSignIn = () => {
            const { pathname, search } = location;
            sessionStorageBase.set(routerLocalKey, type === 'auth' ? SCREEN.FEED : pathname + search);
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
        return <>{element}</>;
    }

    return <StartScreen />;
}

export default PrivateRoute;
