/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { fork, take } from 'redux-saga/effects';

// actions
import { USER_ACTION } from '@module-user/actions';

// worker
import { doCreateUser, doGetUser } from '@module-user/sagas/workers';

function* watchGetUser(): any {
    while (true) {
        const result = yield take(USER_ACTION.GET.REQUEST);
        yield fork(doGetUser, result.payload);
    }
}

function* watchCreateUser(): any {
    while (true) {
        const result = yield take(USER_ACTION.CREATE.REQUEST);
        yield fork(doCreateUser, result.payload);
    }
}

const UserSaga = [watchGetUser, watchCreateUser];
export default UserSaga;
