/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { call, put, all, fork, delay } from 'redux-saga/effects';
import Cookies from 'js-cookie';

/** actions */
import { AUTH_ACTION, authAction, AuthActionPayloadType } from '@module-auth/actions';

/** apis */
import { registerAccount, signInAccount, signOutAccount, recoverAccount } from '@module-auth/apis';

/** workers */
import { doCreateUser } from '@module-user/sagas/workers';

/** utils */
import { genNewUser, genUid } from '@module-user/utils';
import { Encrypt, localStorageBase } from '@module-base/utils';

/** constants */
import { emptyFunction, REGEX_EMAIL, REGEX_PHONE } from '@module-base/constants';
import { emailLocalKey, meIdCookieKey, TIME_WAITING_API } from '@module-global/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';

/** hàm đăng nhập */
function* doSignIn(payload: AuthActionPayloadType[typeof AUTH_ACTION.SIGN_IN.REQUEST]) {
    const { account, password, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const [{ response, error }] = yield all([call(signInAccount, account, password), delay(TIME_WAITING_API)]);

    /** Failure */
    if (error) {
        const msgError =
            error?.code === 'auth/wrong-password' ? AUTH_FORM_ERROR.ACCOUNT_INCORRECT : AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED;
        yield fork(onFailure, msgError);
        return false;
    }

    /** Success */
    const meId = genUid(response.uid);
    Cookies.set(meIdCookieKey, meId, { expires: 1, path: '' });
    localStorageBase.set(emailLocalKey, Encrypt(account));
    yield fork(onSuccess);
    yield put(authAction.signIn.success({ meId }));
}

/** hàm đăng kí */
function* doRegister(payload: AuthActionPayloadType[typeof AUTH_ACTION.REGISTER.REQUEST]) {
    const { account = '', password, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const [{ response, error }] = yield all([call(registerAccount, account, password), delay(TIME_WAITING_API)]);

    /** Failure */
    if (error) {
        yield fork(onFailure, AUTH_FORM_ERROR.ACCOUNT_REGISTERED);
        return false;
    }

    /** Success */
    const email = REGEX_EMAIL.test(account) ? account : '';
    const phone = REGEX_PHONE.test(account) ? account : '';
    const user = genNewUser({ email, phone, uid: genUid(response.uid) });
    const emailLocal: string | undefined = yield call(localStorageBase.get, emailLocalKey);

    let isCreated = false;
    while (!isCreated) {
        isCreated = yield call(doCreateUser, { user });
    }
    if (!emailLocal) {
        yield fork(localStorageBase.set, emailLocalKey, Encrypt(account));
    }
    yield fork(onSuccess);
}

/** hàm xác thực tài khoản */
function* doRecover(payload: AuthActionPayloadType[typeof AUTH_ACTION.RECOVER.REQUEST]) {
    const { account = '', onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const [{ error }] = yield all([call(recoverAccount, account), delay(TIME_WAITING_API)]);

    /** Failure */
    if (error) {
        yield fork(onFailure, AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED);
        return false;
    }

    /** Success */
    yield fork(onSuccess);
}

/** hàm đăng xuất */
function* doSignOut(payload = null) {
    yield fork(signOutAccount);
    Cookies.remove(meIdCookieKey, { path: '' });
    yield put(authAction.signOut.success(payload));
}

export { doRegister, doRecover, doSignIn, doSignOut };
