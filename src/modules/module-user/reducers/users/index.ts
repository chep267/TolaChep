/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { UserStoreType } from '@module-user/utils';

/** constants */
import { USER_STORE_KEY } from '@module-user/constants';

const addUser = (state: UserStoreType, { payload }: { payload: any }) => {
    const { user, parentId = 'root' } = payload;

    // update User
    state[USER_STORE_KEY.USER][user.uid] = user;

    // update HasUser
    if (state[USER_STORE_KEY.HAS_USER][parentId]) {
        state[USER_STORE_KEY.HAS_USER][parentId].itemIds = [user.uid, ...state[USER_STORE_KEY.HAS_USER][parentId].itemIds];
        state[USER_STORE_KEY.HAS_USER][parentId].total = state[USER_STORE_KEY.HAS_USER][parentId].total + 1;
    } else {
        state[USER_STORE_KEY.HAS_USER][parentId] = {
            itemIds: [user.uid],
            total: 1,
            count: 1,
        };
    }
};

export { addUser };
