/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { call } from 'redux-saga/effects';

/** apis */
import { FIREBASE_GET } from '@module-global/apis';

import { registerAccount, signInAccount, signOutAccount } from '@module-auth/apis';

/** constants */
import { AUTH_FORM_ERROR, PATH_AUTH_FIREBASE } from '@module-auth/constants';

/** utils */
import { Encrypt } from '@module-base/utils';

/** types */
import type { AccountType } from '@module-auth/models';

/**
 * Hàm kiểm tra xác thực tài khoản
 * return:
 * uid: xác thực thành công, trả về uid
 * AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED: tài khoản chưa được đăng ký
 * AUTH_FORM_ERROR.ACCOUNT_INCORRECT: tài khoản, mật khẩu không chính xác
 */
function* doCheckAuth(payload: { account: string; password: string; type?: AccountType }): any {
    const { account, password, type = 'account' } = payload;
    const response = yield call(FIREBASE_GET, { path: `${PATH_AUTH_FIREBASE}${type}/${account}` });
    if (response.exists()) {
        const data: { uid: string; password: string } = response.val(); // uid = response.val()
        if (data.password === Encrypt(password)) {
            return data.uid;
        }
        return AUTH_FORM_ERROR.ACCOUNT_INCORRECT;
    }
    return AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED;
}

function* doCheckSignInAccount(payload: { account: string; password: string }) {
    const { account, password } = payload;
    const { response, error } = yield call(signInAccount, account, password);
    if (error) {
        const { code } = error;
        if (code === 'auth/wrong-password') {
            return {
                uid: AUTH_FORM_ERROR.ACCOUNT_INCORRECT,
            };
        }
        return {
            uid: AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED,
        };
    }
    return response;
}

function* doCheckRegisterAccount(payload: { account: string; password: string }): any {
    const { account, password } = payload;
    const { response, error } = yield call(registerAccount, account, password);
    if (error) {
        return {
            uid: AUTH_FORM_ERROR.ACCOUNT_REGISTERED,
        };
    }
    return response;
}

function* doCheckSignOutAccount(): any {
    const { error } = yield call(signOutAccount);
    return !error;
}

export { doCheckAuth, doCheckRegisterAccount, doCheckSignInAccount, doCheckSignOutAccount };
