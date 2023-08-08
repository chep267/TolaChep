/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { fork, take } from 'redux-saga/effects';

/** actions */
import { AUTH_ACTION } from '@module-auth/actions';

/** workers */
import { doSignIn, doSignOut, doRegister, doRecover } from '@module-auth/sagas/workers';

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

function* watchRecover(): any {
    while (true) {
        const result = yield take(AUTH_ACTION.RECOVER.REQUEST);
        yield fork(doRecover, result.payload);
    }
}

function* watchSignOut(): any {
    while (true) {
        const result = yield take(AUTH_ACTION.SIGN_OUT.REQUEST);
        yield fork(doSignOut, result.payload);
    }
}

const AuthSaga = Object.freeze([watchSignIn, watchRegister, watchRecover, watchSignOut]);
export default AuthSaga;
