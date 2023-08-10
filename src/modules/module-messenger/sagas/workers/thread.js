import { call, put, select } from 'redux-saga/effects';
import { getThreadSearch } from '../helper/thread';
import THREAD_ACTION from '../../actions/old/thread.js';
import { getThreadIdSelected, getThreadIds } from '../../utils/selectors/thread';

export function* doUpdateThreadIds(payload) {
    const { type, data } = payload;
    let ids;
    if (type === 'get') {
        const threadIdSelected = yield select(getThreadIdSelected);
        let ids;
        if (!threadIdSelected) {
            ids = [...data];
        } else {
            if (data.includes(threadIdSelected)) {
                ids = [...data];
            } else {
                ids = [threadIdSelected, ...data];
            }
        }
        if (!ids.includes('cid-mycloud')) ids.push('cid-mycloud');
        if (!ids.includes('cid-chatbot')) ids.push('cid-chatbot');
        yield put({ type: THREAD_ACTION.UPDATE_LIST.SUCCESS, payload: { threadIds: ids } });
        return null;
    }

    const threadIds = yield select(getThreadIds);
    ids = threadIds.filter((id) => id !== data);
    yield put({ type: THREAD_ACTION.UPDATE_LIST.SUCCESS, payload: { threadIds: [data, ...ids] } });
}

export function* doMoveThreadToTop(threadId) {
    yield put({ type: THREAD_ACTION.START_NEW_THREAD.SUCCESS, payload: { threadId } });
}

export function* doSearchListThread(payload) {
    const threadIdsSearch = yield call(getThreadSearch, payload);
    yield put({ type: THREAD_ACTION.SEARCH.SUCCESS, payload: { threadIdsSearch } });
}

export function* doStartNewThread(payload) {
    yield put({ type: THREAD_ACTION.START_NEW_THREAD.SUCCESS, payload });
}
