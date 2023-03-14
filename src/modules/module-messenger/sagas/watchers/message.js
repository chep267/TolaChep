import { fork, take } from 'redux-saga/effects';
import MESSAGE_ACTION from '../../actions/message';
import { doDeleteMessage, doGetListMessageSuccess, doRemoveMessage, doSendMessage } from '../workers/message';
import { doMoveThreadToTop } from '../workers/thread';

function* sendMessageWatcher() {
    while (true) {
        const result = yield take(MESSAGE_ACTION.SEND_MESSAGE.REQUEST);
        const { payload } = result;
        yield fork(doSendMessage, payload);
        yield fork(doMoveThreadToTop, payload.threadId);
    }
}

function* deleteMessageWatcher() {
    while (true) {
        const result = yield take(MESSAGE_ACTION.DELETE_MESSAGE.REQUEST);
        yield fork(doDeleteMessage, result.payload);
    }
}

function* removeMessageWatcher() {
    while (true) {
        const result = yield take(MESSAGE_ACTION.REMOVE_MESSAGE.REQUEST);
        yield fork(doRemoveMessage, result.payload);
    }
}

function* getMessagesWatcher() {
    while (true) {
        const result = yield take(MESSAGE_ACTION.GET_MESSAGES.REQUEST);
        yield fork(doGetListMessageSuccess, result.payload);
    }
}

const MESSAGE_SAGA = [sendMessageWatcher, getMessagesWatcher, deleteMessageWatcher, removeMessageWatcher];
export default MESSAGE_SAGA;
