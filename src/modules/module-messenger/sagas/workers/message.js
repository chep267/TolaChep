import { all, call, fork, put } from 'redux-saga/effects';
import { apiDeleteMessage, apiRemoveMessage, apiSendMessage } from '../../apis/old/message.js';
import MESSAGE_ACTION from '../../actions/old/message.js';
import { apiSendFile } from '@module-global/apis';

export function* doSendMessage(payload) {
    const { messageData } = payload;
    const { data, type } = messageData;

    if (type === 'file') {
        const { text } = data;
        const urls = yield call(doSendFile, payload);
        const newData = {
            ...messageData,
            data: {
                text,
                files: { ...urls },
            },
        };
        yield fork(apiSendMessage, { ...payload, messageData: newData });
        return null;
    }

    yield fork(apiSendMessage, payload);
}

export function* doSendFile(payload) {
    const { threadId, meId, messageData } = payload;
    const { data, mid } = messageData;
    const { files } = data;

    return yield all(
        files.map(function* getUrl(file) {
            return yield call(apiSendFile, meId, threadId, mid, file);
        })
    );
}

export function* doDeleteMessage(payload) {
    yield fork(apiDeleteMessage, payload);
}

export function* doRemoveMessage(payload) {
    yield fork(apiRemoveMessage, payload);
}

export function* doGetListMessageSuccess(payload) {
    yield put({ type: MESSAGE_ACTION.GET_MESSAGES.SUCCESS, payload });
}
