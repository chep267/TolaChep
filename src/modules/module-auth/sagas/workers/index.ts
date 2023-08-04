/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { call, put, all, fork, delay } from 'redux-saga/effects';
import Cookies from 'js-cookie';

/** actions */
import { AUTH_ACTION, authAction, AuthActionPayloadType } from '@module-auth/actions';

/** selectors */
import { genNewUser, genUid } from '@module-user/utils';

/** workers */
import { doCreateUser } from '@module-user/sagas/workers';
import { doCheckRegisterAccount } from '@module-auth/sagas/helpers';

/** utils */
import { Encrypt, localStorageBase } from '@module-base/utils';
import { emptyFunction, emptyObject } from '@module-base/constants';
import { emailLocalKey, meIdCookieKey } from '@module-global/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';

/** types */
import { signInAccount, signOutAccount } from '@module-auth/apis';

/** hàm đăng nhập */
function* doSignIn(payload: AuthActionPayloadType[typeof AUTH_ACTION.SIGN_IN.REQUEST]) {
    const { account, password, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const { response, error } = yield call(signInAccount, account, password);

    /** Failure */
    if (error) {
        const { code } = error;
        yield delay(500);
        onFailure(code === 'auth/wrong-password' ? AUTH_FORM_ERROR.ACCOUNT_INCORRECT : AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED);
        return;
    }

    /** Success */
    const meId = genUid(response.uid);
    Cookies.set(meIdCookieKey, meId, { expires: 1, path: '' });
    localStorageBase.set(emailLocalKey, Encrypt(account));
    yield put(authAction.signIn.success({ meId }));
    yield fork(onSuccess);
}

/** hàm đăng kí */
function* doRegister(payload: AuthActionPayloadType[typeof AUTH_ACTION.REGISTER.REQUEST]) {
    const { account = '', password, type = 'account', onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const { uid }: { uid: string } = yield call(doCheckRegisterAccount, { account, password });

    /** Failure */
    if (uid === AUTH_FORM_ERROR.ACCOUNT_REGISTERED) {
        yield delay(500);
        yield fork(onFailure, uid);
        return false;
    }

    /** Success */
    const user = genNewUser({ email: account, type, uid: genUid(uid) });
    const emailLocal: string | undefined = yield call(localStorageBase.get, emailLocalKey);
    yield all([call(doCreateUser, { user }), delay(500)]);
    if (!emailLocal) {
        yield fork(localStorageBase.set, emailLocalKey, Encrypt(account));
    }
    yield fork(onSuccess);
}

/** hàm đăng xuất */
function* doSignOut(payload = null) {
    yield fork(signOutAccount);
    Cookies.remove(meIdCookieKey, { path: '' });
    yield put(authAction.signOut.success(payload));
}

export { doRegister, doSignIn, doSignOut };
