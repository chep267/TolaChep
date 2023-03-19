/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { fork, take } from 'redux-saga/effects';

/** actions */
import { AUTH_ACTION } from '@module-auth/actions';

/** workers */
import { doSignIn, doSignOut, doAutoStart, doRegister } from '@module-auth/sagas/workers';

function* watchAutoStart(): any {
    while (true) {
        const result = yield take(AUTH_ACTION.AUTO_START.REQUEST);
        yield fork(doAutoStart, result.payload);
    }
}

function* watchSignIn(): any {
    while (true) {
        const result = yield take(AUTH_ACTION.SIGN_IN.REQUEST);
        yield fork(doSignIn, result.payload);
    }
}

function* watchRegister(): any {
    while (true) {
        const result = yield take(AUTH_ACTION.REGISTER.REQUEST);
        yield fork(doRegister, result.payload);
    }
}

function* watchSignOut(): any {
    while (true) {
        const result = yield take(AUTH_ACTION.SIGN_OUT.REQUEST);
        yield fork(doSignOut, result.payload);
    }
}

const AuthSaga = Object.freeze([watchAutoStart, watchSignIn, watchRegister, watchSignOut]);
export default AuthSaga;
