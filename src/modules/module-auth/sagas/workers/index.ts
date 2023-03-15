/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { call, put, all, fork, delay } from 'redux-saga/effects';

/** actions */
import { AUTH_ACTION, authAction, TYPE_AUTH_ACTION_PAYLOAD } from '@module-auth/actions';

/** selectors */
import { genNewUser, genUid } from '@module-user/selectors';

/** workers */
import { doCreateUser, doGetUser } from '@module-user/sagas/workers';
import { doCheckRegisterAccount, doCheckSignInAccount, doCheckSignOutAccount } from '@module-auth/sagas/helpers';

/** utils */
import { Encrypt } from '@module-base/utils';
import { localStorageBase } from '@module-base/storage';
import { emptyFunction, emptyObject } from '@module-base/constants';
import { emailLocalKey, meIdLocalKey } from '@module-global/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { TYPE_USER } from '@module-user/utils';

/** hàm tự động đăng nhập lại khi mở web */
export function* doAutoStart(payload: TYPE_AUTH_ACTION_PAYLOAD[typeof AUTH_ACTION.AUTO_START.REQUEST]) {
    const user: false | TYPE_USER = yield call(doGetUser, payload);
    if (user) {
        yield put(authAction.signIn.success({ user }));
    }
}

/** hàm đăng nhập */
export function* doSignIn(payload: TYPE_AUTH_ACTION_PAYLOAD[typeof AUTH_ACTION.SIGN_IN.REQUEST]) {
    const { account, password, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const { uid }: { uid: string } = yield call(doCheckSignInAccount, { account, password });

    /** Failure */
    if (uid === AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED || uid === AUTH_FORM_ERROR.ACCOUNT_INCORRECT) {
        yield delay(500);
        yield fork(onFailure, uid);
        return false;
    }

    /** Success */
    const userId = genUid(uid);
    yield fork(localStorageBase.setList, [meIdLocalKey, emailLocalKey], [Encrypt(userId), Encrypt(account)]);
    const user: TYPE_USER = yield call(doGetUser, { uid: userId });
    if (!user) {
        /** Failure */
        yield fork(onFailure, AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED);
        return false;
    }
    yield put(authAction.signIn.success({ user }));
    yield fork(onSuccess);
}

/** hàm đăng kí */
export function* doRegister(payload: TYPE_AUTH_ACTION_PAYLOAD[typeof AUTH_ACTION.REGISTER.REQUEST]) {
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
export function* doSignOut(payload: TYPE_AUTH_ACTION_PAYLOAD[typeof AUTH_ACTION.SIGN_OUT.REQUEST]): any {
    const { onSuccess = emptyFunction } = payload;
    yield fork(localStorageBase.remove, meIdLocalKey);
    yield put(authAction.signOut.success(emptyObject));
    yield fork(doCheckSignOutAccount);
    yield fork(onSuccess);
}
