/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { call, put, all, fork, delay } from 'redux-saga/effects';

/** actions */
import { AUTH_ACTION, authAction, AuthActionPayloadType } from '@module-auth/actions';

/** selectors */
import { genNewUser, genUid } from '@module-user/utils';

/** workers */
import { doCreateUser } from '@module-user/sagas/workers';
import { doCheckRegisterAccount, doCheckSignInAccount, doCheckSignOutAccount } from '@module-auth/sagas/helpers';

/** utils */
import { Encrypt, localStorageBase } from '@module-base/utils';
import { emptyFunction, emptyObject } from '@module-base/constants';
import { emailLocalKey, meIdLocalKey } from '@module-global/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';

/** types */
import type { UserType } from '@module-user/models';

/** hàm tự động đăng nhập lại khi mở web */
function* doAutoStart(payload: AuthActionPayloadType[typeof AUTH_ACTION.AUTO_START.REQUEST]) {}

/** hàm đăng nhập */
function* doSignIn(payload: AuthActionPayloadType[typeof AUTH_ACTION.SIGN_IN.REQUEST]) {
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
    const user: UserType = yield call(doGetUser, { uid: userId });
    if (!user) {
        /** Failure */
        yield fork(onFailure, AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED);
        return false;
    }
    yield put(authAction.signIn.success({ user }));
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
function* doSignOut(payload: AuthActionPayloadType[typeof AUTH_ACTION.SIGN_OUT.REQUEST]): any {
    const { onSuccess = emptyFunction } = payload;
    yield fork(localStorageBase.remove, meIdLocalKey);
    yield put(authAction.signOut.success(emptyObject));
    yield fork(doCheckSignOutAccount);
    yield fork(onSuccess);
}

export { doAutoStart, doRegister, doSignIn, doSignOut };
