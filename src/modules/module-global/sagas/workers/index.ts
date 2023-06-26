/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { all, call, fork, put } from 'redux-saga/effects';

/** actions */
import { globalAction, GLOBAL_ACTION_PAYLOAD_PROPS, GLOBAL_ACTION } from '@module-global/actions';

/** selectors */
import { getAvatarBase, getCoverBase } from '@module-global/selectors';

/** utils */
import { localStorageBase } from '@module-base/utils';
import { Decrypt, Encrypt } from '@module-base/utils';

/** constants */
import { emptyFunction } from '@module-base/constants';
import { avatarLocalKey, coverLocalKey } from '@module-global/constants';

function* doStartApp(payload: GLOBAL_ACTION_PAYLOAD_PROPS[typeof GLOBAL_ACTION.START_APP.REQUEST]) {
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

export { doStartApp };
