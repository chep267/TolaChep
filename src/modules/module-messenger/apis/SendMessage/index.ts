/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { fork } from 'redux-saga/effects';
import { doSendMessageProps } from '@module-messenger/apis/inteface.message';
import { FIREBASE_SET, FIREBASE_UPDATE } from '@module-global/apis';
import { chatBotMessage, chatBotSay } from '@module-messenger/constants/Message';

/** Api send message */
export function* apiSendMessage(payload: doSendMessageProps): any {
    const { threadId, meId, messageData, isGroup = false, isFirstMessage = false } = payload;
    const { mid } = messageData;
    if (!threadId) {
        console.log('apiSendMessage::lost threadId!!!');
        return null;
    }

    const isChatBot = threadId === 'cid-chatbot';

    if (isFirstMessage) {
        /** set to threadIds of me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threadIds/${threadId}`, data: { id: threadId } });
    }

    if (isChatBot) {
        /** send to me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${mid}/`, data: messageData });
        const { type } = messageData;
        // @ts-ignore
        const content = chatBotSay[type][Math.floor(Math.random() * 10)];
        const messCB = chatBotMessage('text', content);
        /** set last message to history of me */
        yield fork(FIREBASE_UPDATE, { path: `/history/${meId}/`, data: { ['cid-chatbot']: messCB.mid } });
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${messCB.mid}/`, data: messCB });
        return null;
    }

    /** set last message to history of me */
    yield fork(FIREBASE_UPDATE, { path: `/history/${meId}/`, data: { [threadId]: mid } });
    const isMyCloud = threadId === 'cid-mycloud';
    if (isMyCloud) {
        /** send to me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${mid}/`, data: messageData });
        return null;
    }

    const partnerId = `uid-${threadId.split('-')[1]}`;
    const partnerThreadId = `cid-${meId.split('-')[1]}`;
    /** set last message to history of partner */
    yield fork(FIREBASE_UPDATE, { path: `/history/${partnerId}/`, data: { [partnerThreadId]: mid } });

    if (!isGroup) {
        if (isFirstMessage) {
            /** set to threadIds of partner */
            yield fork(FIREBASE_SET, {
                path: `/messengers/${partnerId}/threadIds/${partnerThreadId}`,
                data: { id: partnerThreadId },
            });
        }
        /** send to me */
        yield fork(FIREBASE_SET, { path: `/messengers/${meId}/threads/${threadId}/${mid}/`, data: messageData });
        /** send to partner */
        yield fork(FIREBASE_SET, { path: `/messengers/${partnerId}/threads/${partnerThreadId}/${mid}/`, data: messageData });
        return null;
    }

    /** send to all */
    // const getThreadIds = yield call(FIREBASE_GET, {path: `/messengers/${threadId}/`} as payloadProps);
    // getThreadIds.then((snapshot: any) => {
    //     const threadIds = snapshot.val();
    //     if (threadIds !== undefined && threadIds !== null) {
    //         threadIds.forEach(function* send(id: string) {
    //             yield fork(FIREBASE_SET, {path: `/messengers/${threadId}/${id}/${mid}/`, data: messageData} as payloadProps);
    //         });
    //     }
    // });
    return null;
}
