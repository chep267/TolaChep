/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { call } from 'redux-saga/effects';

/** apis */
import { FIREBASE_GET, registerAccount, signInAccount, signOutAccount } from '@module-global/apis';

/** utils */
import { AUTH_FORM_ERROR, PATH_AUTH_FIREBASE } from '@module-auth/constants';
import { Encrypt } from '@module-base/utils';
import { TYPE_ACCOUNT } from '@module-auth/utils';

/**
 * Hàm kiểm tra xác thực tài khoản
 * return:
 * uid: xác thực thành công, trả về uid
 * AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED: tài khoản chưa được đăng ký
 * AUTH_FORM_ERROR.ACCOUNT_INCORRECT: tài khoản, mật khẩu không chính xác
 */
export function* doCheckAuth(payload: { account: string; password: string; type?: TYPE_ACCOUNT }): any {
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

export function* doCheckSignInAccount(payload: { email: string; password: string }): any {
    const { email, password } = payload;
    const { response, error } = yield call(signInAccount, email, password);
    if (error) {
        const { code } = error;
        if (code === 'auth/wrong-password') {
            return AUTH_FORM_ERROR.ACCOUNT_INCORRECT;
        }
        return AUTH_FORM_ERROR.ACCOUNT_UNREGISTERED;
    }
    return response;
}

export function* doCheckRegisterAccount(payload: { email: string; password: string }): any {
    const { email, password } = payload;
    const { response, error } = yield call(registerAccount, email, password);
    if (error) {
        return AUTH_FORM_ERROR.ACCOUNT_REGISTERED;
    }
    return response;
}

export function* doCheckSignOutAccount(): any {
    const { response, error } = yield call(signOutAccount);
    debugger;
    return !error;
}
