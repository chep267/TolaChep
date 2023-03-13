/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { getState } from '@module-global/selectors/Store/Data';
import { emptyArray, emptyObject } from '@module-base/constants';

const getThreadData = (state, threadId) => getState(state, `messenger.threads.${threadId}`) || emptyObject;
const getThreadName = (state, threadId) => getState(state, `messenger.threads.${threadId}.threadName`) || '';
const getThreadIdSelected = (state) => getState(state, `messenger.threadIdSelected`) || '';
const getThreadIds = (state) => getState(state, `messenger.threadIds`) || emptyArray;
const getThreadIdsSearch = (state) => getState(state, `messenger.threadIdsSearch`) || emptyArray;

export { getThreadData, getThreadName, getThreadIdSelected, getThreadIds, getThreadIdsSearch };
