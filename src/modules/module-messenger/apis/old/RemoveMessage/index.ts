/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { fork } from 'redux-saga/effects';
import { doRemoveMessageProps, doSendMessageProps } from '@module-messenger/apis/old/inteface.message';
import { FIREBASE_SET, FIREBASE_UPDATE } from '@module-global/apis';
import { Encrypt } from '@module-base/utils';

/** Api remove message */
export function* apiRemoveMessage(payload: doRemoveMessageProps) {
    const { threadId, meId, partnerId, messageId, isGroup = false } = payload;
    if (!threadId || !messageId) {
        console.log('apiRemoveMessage::lost data!!!');
        return null;
    }

    const messageContent = Encrypt('Đã thu hồi..!');
    const data = {
        data: {
            text: messageContent,
        },
        type: 'revoke',
    };

    if (!isGroup) {
        /** remove for me */
        yield fork(FIREBASE_UPDATE, { path: `/messengers/${meId}/threads/${threadId}/${messageId}/`, data });
        if (threadId !== 'cid-chatbot' && threadId !== 'cid-mycloud') {
            /** remove for partner */
            yield fork(FIREBASE_UPDATE, { path: `/messengers/${partnerId}/threads/${threadId}/${messageId}/`, data });
        }
        return null;
    }

    /** remove for all */
    // const getThreadIds = FIREBASE_GET({path: `/messengers/${threadId}/`} as payloadProps);
    // getThreadIds.then((snapshot: any) => {
    // 	const threadIds = snapshot.val();
    // 	if (threadIds !== undefined && threadIds !== null) {
    // 		threadIds.forEach(function* send(id: string) {
    // 			yield fork(FIREBASE_UPDATE, {path: `/messengers/${threadId}/${id}/${messageId}/`, data} as payloadProps);
    // 		});
    // 	}
    // });
    return null;
}
