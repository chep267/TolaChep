import { call, select } from 'redux-saga/effects';
import { getMeId } from '../../../module-auth/utils/selectors';
import { getListUserFromServer } from '../../../module-auth/sagas/helpers/SignIn';
import { FIREBASE_GET } from '../../../module-global/apis';

export function* getAllThreadFromServer(meId) {
    const response = yield call(FIREBASE_GET, { path: `/messengers/${meId}/` });
    return response.exists() ? response.val() : null;
}

export function* getThreadSearch(payload) {
    const users = yield call(getListUserFromServer);
    const meId = yield select(getMeId);
    if (!users) return null;
    const threadIdsSearch = [];
    const { searchKey } = payload;
    for (const user of users) {
        const { name, phone } = user.info;
        if ((name.includes(searchKey) || phone.includes(searchKey)) && meId !== user.uid) {
            threadIdsSearch.push(user.uid);
        }
    }
    return threadIdsSearch;
}
