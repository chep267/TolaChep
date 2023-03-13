import { emptyArray, emptyObject } from '@module-base/constants';
import THREAD_ACTION from '../actions/thread';
import MESSAGE_ACTION from '../actions/message';

const initState = {
    threadIdSelected: '',
    threadIds: [],
    threadIdsSearch: emptyArray,
    messageIds: emptyArray,
    messages: emptyObject,
};

export default function MessengerReducer(state = initState, action) {
    const { payload, type } = action;

    switch (type) {
        case THREAD_ACTION.UPDATE_LIST.SUCCESS:
            return { ...state, threadIds: payload.threadIds };

        case THREAD_ACTION.SEARCH.SUCCESS:
            const { threadIdsSearch } = payload;
            return { ...state, threadIdsSearch };

        case THREAD_ACTION.SELECTED_THREAD:
            const { threadIdSelected } = payload;
            return { ...state, threadIdSelected };

        case MESSAGE_ACTION.GET_MESSAGES.SUCCESS:
            const { messageIds, messages } = payload;
            return { ...state, messageIds, messages };

        case THREAD_ACTION.START_NEW_THREAD.SUCCESS:
            const { threadId } = payload;
            const newThreadIds = state.threadIds.filter((id) => id !== threadId);
            return { ...state, threadIdSelected: threadId, threadIds: [threadId, ...newThreadIds] };

        default:
            return state;
    }
}
