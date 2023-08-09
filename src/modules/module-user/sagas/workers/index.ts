/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { call, put, fork } from 'redux-saga/effects';

/** actions */
import { USER_ACTION, userAction } from '@module-user/actions';

/** apis */
import { FIREBASE_GET, FIREBASE_SET } from '@module-global/apis';

/** selectors */

/** utils */
import { PATH_USER_FIREBASE } from '@module-user/constants';
import { emptyFunction } from '@module-base/constants';

/** types */
import type { UserActionPayloadType } from '@module-user/actions';

function* doGetUser(payload: UserActionPayloadType[typeof USER_ACTION.GET.REQUEST]): any {
    const { uid, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const response = yield call(FIREBASE_GET, { path: `${PATH_USER_FIREBASE}${uid}` });
    if (response.exists()) {
        const user = response.val();
        yield put(userAction.get.success({ user }));
        yield fork(onSuccess);
        return user;
    }

    yield fork(onFailure);
    return false;
}

function* doCreateUser(payload: UserActionPayloadType[typeof USER_ACTION.CREATE.REQUEST]): any {
    const { user, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const { error } = yield call(FIREBASE_SET, { path: `${PATH_USER_FIREBASE}${user.uid}`, data: user });
    if (error) {
        // co loi xay ra
        yield fork(onFailure);
        return false;
    }

    yield put(userAction.create.success({ user }));
    yield fork(onSuccess);
    return true;
}

export { doCreateUser, doGetUser };
