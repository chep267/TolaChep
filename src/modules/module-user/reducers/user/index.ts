/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { TYPE_USER_STORE } from '@module-user/utils';
import { USER_STORE_KEY } from '@module-user/constants';

export const addUserToState = (state: TYPE_USER_STORE, action) => {
    const { user, parentId = 'root' } = action.payload;

    // update User
    state[USER_STORE_KEY.USER][user.uid] = user;

    // update HasUser
    if (!!state[USER_STORE_KEY.HAS_USER][parentId]) {
        state[USER_STORE_KEY.HAS_USER][parentId].itemIds = [user.uid, ...state[USER_STORE_KEY.HAS_USER][parentId].itemIds];
        state[USER_STORE_KEY.HAS_USER][parentId].total = state[USER_STORE_KEY.HAS_USER][parentId].total + 1;
    } else {
        state[USER_STORE_KEY.HAS_USER][parentId] = {
            itemIds: [user.uid],
            total: 1,
        };
    }
};
