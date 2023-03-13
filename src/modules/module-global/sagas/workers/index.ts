/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { all, call, fork, put } from 'redux-saga/effects';
import { getAvatarBase, getCoverBase } from '@module-global/selectors';
import { localStorageBase } from '@module-base/storage';
import { avatarLocalKey, coverLocalKey } from '@module-global/constants';
import { GLOBAL_ACTION } from '@module-global/actions';
import { emptyFunction } from '@module-base/constants';
import { Decrypt, Encrypt } from '@module-base/utils';

export function* doStartApp(payload) {
    /** check avatar base, cover base */
    yield fork(doStartAppStep1, payload);
}

/** get avatar base, cover base */
export function* doStartAppStep1(payload) {
    const { onSuccess = emptyFunction } = payload;
    let [avatarBase, coverBase] = yield all([
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

    yield put({ type: GLOBAL_ACTION.START_APP.SUCCESS, payload: { avatar: avatarBase, cover: coverBase } });
    return onSuccess();
}
