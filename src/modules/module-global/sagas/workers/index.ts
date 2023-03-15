/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { all, call, fork, put } from 'redux-saga/effects';

/** actions */
import { globalAction, TYPE_GLOBAL_ACTION_PAYLOAD, GLOBAL_ACTION } from '@module-global/actions';

/** selectors */
import { getAvatarBase, getCoverBase } from '@module-global/selectors';

/** utils */
import { localStorageBase } from '@module-base/storage';
import { Decrypt, Encrypt } from '@module-base/utils';
import { emptyFunction } from '@module-base/constants';
import { avatarLocalKey, coverLocalKey } from '@module-global/constants';

export function* doStartApp(payload: TYPE_GLOBAL_ACTION_PAYLOAD[typeof GLOBAL_ACTION.START_APP.REQUEST]) {
    /** check avatar base, cover base */
    const { onSuccess = emptyFunction } = payload;
    let [avatarBase, coverBase]: [string, string] = yield all([
        call(localStorageBase.get, avatarLocalKey),
        call(localStorageBase.get, coverLocalKey),
    ]);
    if (!avatarBase || !coverBase) {
        [avatarBase, coverBase] = yield all([call(getAvatarBase), call(getCoverBase)]);
        yield fork(localStorageBase.setList, [avatarLocalKey, coverLocalKey], [Encrypt(avatarBase), Encrypt(coverBase)]);
    } else {
        avatarBase = Decrypt(avatarBase);
        coverBase = Decrypt(coverBase);
    }

    yield put(globalAction.startApp.success({ avatar: avatarBase, cover: coverBase }));
    yield fork(onSuccess);
}
