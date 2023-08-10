/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { fork, select } from 'redux-saga/effects';
import { doDeleteMessageProps, doRemoveMessageProps, doSendMessageProps } from '@module-messenger/apis/old/inteface.message';
import { FIREBASE_REMOVE, FIREBASE_SET, FIREBASE_UPDATE } from '@module-global/apis';
// import { chatBotMessage, chatBotSay } from '@module-messenger/constants/Message';
import { Encrypt } from '@module-base/utils';
import { emptyArray } from '@module-base/constants';
// @ts-ignore
import { getPrevMessageId } from '@module-messenger/utils/selectors/message';

/** Api delete message */
export function* apiDeleteMessage(payload: doDeleteMessageProps): any {
    const { threadId, meId, messageId, files = emptyArray } = payload;

    if (!threadId || !meId || !messageId) {
        console.log('apiDeleteMessage::lost data!!!');
        return null;
    }

    const prevMessageId = yield select(getPrevMessageId, messageId);
    /** set last message to history of me */
    yield fork(FIREBASE_UPDATE, { path: `/history/${meId}/`, data: { [threadId]: prevMessageId } });

    yield fork(FIREBASE_REMOVE, { path: `/messengers/${meId}/threads/${threadId}/${messageId}/` });
    if (files.length > 0) {
        for (const file of files) {
            // @ts-ignore
            const { type, fid } = file;
            const urlRef = type.includes('image/') ? 'images/' : type.includes('video/') ? 'videos/' : 'others/';
            yield fork(FIREBASE_REMOVE, { path: `/repos/${meId}/${threadId}/${urlRef}/${fid}/` });
        }
    }
    return null;
}
