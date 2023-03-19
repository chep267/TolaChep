/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { call, put, fork } from 'redux-saga/effects';

/** actions */
import { TypeUser_ACTION_PAYLOAD, USER_ACTION, userAction } from '@module-user/actions';

/** apis */
import { FIREBASE_GET, FIREBASE_SET } from '@module-global/apis';

/** selectors */

/** utils */
import { PATH_USER_FIREBASE } from '@module-user/constants';
import { TypeUser } from '@module-user/utils';
import { emptyFunction } from '@module-base/constants';

export function* doGetUser(payload: TypeUser_ACTION_PAYLOAD[typeof USER_ACTION.GET.REQUEST]): any {
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

export function* doCreateUser(payload: { user: TypeUser; onSuccess?: () => void; onFailure?: () => void }): any {
    const { user, onSuccess = emptyFunction, onFailure = emptyFunction } = payload;
    const error = yield call(FIREBASE_SET, { path: `${PATH_USER_FIREBASE}${user.uid}`, data: user });
    if (error) {
        // co loi xay ra
        yield fork(onFailure);
        return false;
    }

    yield put(userAction.create.success({ user }));
    yield fork(onSuccess);
    return true;
}
