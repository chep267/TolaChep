import { fork, take } from 'redux-saga/effects';
import THREAD_ACTION from '../../actions/old/thread.js';
import { doUpdateThreadIds, doSearchListThread, doStartNewThread } from '../workers/thread';

function* updateThreadIdsWatcher() {
    while (true) {
        const result = yield take(THREAD_ACTION.UPDATE_LIST.REQUEST);
        yield fork(doUpdateThreadIds, result.payload);
    }
}

function* searchThreadWatcher() {
    while (true) {
        const result = yield take(THREAD_ACTION.SEARCH.REQUEST);
        yield fork(doSearchListThread, result.payload);
    }
}

function* startNewThreadWatcher() {
    while (true) {
        const result = yield take(THREAD_ACTION.START_NEW_THREAD.REQUEST);
        yield fork(doStartNewThread, result.payload);
    }
}

const THREAD_SAGA = [updateThreadIdsWatcher, searchThreadWatcher, startNewThreadWatcher];
export default THREAD_SAGA;
