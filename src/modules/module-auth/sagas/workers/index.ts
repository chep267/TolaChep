/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { call, put, all, fork, select, delay } from 'redux-saga/effects';

/** actions */
import { authAction } from '@module-auth/actions';

/** selectors */
import { genNewUser, genUid } from '@module-user/selectors';

/** workers */
import { doCreateUser, doGetUser } from '@module-user/sagas/workers';
import { doCheckRegisterAccount, doCheckSignInAccount, doCheckSignOutAccount } from '@module-auth/sagas/helpers';

/** utils */
import { localStorageBase } from '@module-base/storage';
import { emptyFunction } from '@module-base/constants';
import { emailLocalKey, meIdLocalKey } from '@module-global/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { Encrypt } from '@module-base/utils';
import { TYPE_ACCOUNT, TYPE_AUTH_FORM_ERROR } from '@module-auth/utils';

export function* doAutoStart(payload: { uid: string }) {
    const user = yield call(doGetUser, payload);
    if (user) {
        yield put(authAction.signIn.success({ user }));
    }
}

export function* doSignIn(payload: {
    email: string;
    password: string;
    onSuccess?(): void;
    onFailure?(status: TYPE_AUTH_FORM_ERROR): void;
}) {
    const { email, password, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const response = yield call(doCheckSignInAccount, { email, password });

    /** Failure */
    if (response === AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED || response === AUTH_FORM_ERROR.ACCOUNT_INCORRECT) {
        yield delay(500);
        yield fork(onFailure, response);
        return false;
    }

    /** Success */
    const uid = genUid(response.uid);
    yield fork(localStorageBase.setList, [meIdLocalKey, emailLocalKey], [Encrypt(uid), Encrypt(email)]);
    const user = yield call(doGetUser, { uid });
    yield put(authAction.signIn.success({ user }));
    yield fork(onSuccess);
}

export function* doRegister(payload: {
    email?: string;
    phone?: string;
    password: string;
    type?: TYPE_ACCOUNT;
    onSuccess?(): void;
    onFailure?(status: TYPE_AUTH_FORM_ERROR): void;
}) {
    const {
        email = '',
        phone = '',
        password,
        type = 'account',
        onSuccess = emptyFunction,
        onFailure = emptyFunction,
    } = payload;

    const response = yield call(doCheckRegisterAccount, { email, password });

    /** Failure */
    if (response === AUTH_FORM_ERROR.ACCOUNT_REGISTERED || response === AUTH_FORM_ERROR.ACCOUNT_INCORRECT) {
        yield delay(500);
        yield fork(onFailure, response);
        return false;
    }

    /** Success */
    const user = genNewUser({ email, type, uid: genUid(response.uid) });
    const emailLocal = yield call(localStorageBase.get, emailLocalKey);
    yield all([call(doCreateUser, { user }), delay(500)]);
    if (!emailLocal) {
        yield fork(localStorageBase.set, emailLocalKey, Encrypt(email));
    }
    yield fork(onSuccess);
}

export function* doSignOut(payload: { onSuccess?(): void }): any {
    const { onSuccess = emptyFunction } = payload;
    yield fork(localStorageBase.remove, meIdLocalKey);
    yield put(authAction.signOut.success());
    yield fork(doCheckSignOutAccount);
    yield fork(onSuccess);
}
