/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { getState } from '@module-global/selectors/Store/Data';
import { emptyArray, emptyObject } from '@module-base/constants';
import { getTimeToShow } from '@module-global/selectors/time';

const getMessages = (state) => getState(state, 'messenger.messages') || emptyObject;
const getMessage = (state, messageId) => getState(state, `messenger.messages.${messageId}`) || emptyObject;
const getMessageIds = (state) => getState(state, 'messenger.messageIds') || emptyArray;
const getPrevMessageId = (state, mid) => {
    const messageIds = getMessageIds(state);
    const index = messageIds.indexOf(mid);
    if (index === 0) return 'null';
    return messageIds[index - 1];
};

const parseMessageTime = (createdTime) => {
    const { hour, minute, day, month, year } = getTimeToShow(createdTime);
    return `${hour}:${minute} - ${day}/${month}/${year}`;
};

export { getMessages, getMessageIds, parseMessageTime, getMessage, getPrevMessageId };
