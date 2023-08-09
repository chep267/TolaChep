/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** actions */
import { USER_ACTION, UserActionPayloadType } from '@module-user/actions';

/** constants */
import { USER_STORE_KEY } from '@module-user/constants';

/** types */
import type { StoreUserType } from '@module-user/models';

const initialState: StoreUserType = {
    [USER_STORE_KEY.HAS_USER]: {},
    [USER_STORE_KEY.USER]: {},
};

const moduleUserReducer = Object.freeze({
    [USER_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction(USER_ACTION.GET.SUCCESS), (state, action) => {});
        builder.addCase(
            createAction<UserActionPayloadType[typeof USER_ACTION.CREATE.SUCCESS]>(USER_ACTION.CREATE.SUCCESS),
            (state, action) => {
                const { user, parentId = 'root' } = action.payload;
                // update User
                state[USER_STORE_KEY.USER][user.uid] = user;
                // update HasUser
                if (state[USER_STORE_KEY.HAS_USER][parentId]) {
                    state[USER_STORE_KEY.HAS_USER][parentId].itemIds = [
                        user.uid,
                        ...state[USER_STORE_KEY.HAS_USER][parentId].itemIds,
                    ];
                    state[USER_STORE_KEY.HAS_USER][parentId].total = state[USER_STORE_KEY.HAS_USER][parentId].total + 1;
                } else {
                    state[USER_STORE_KEY.HAS_USER][parentId] = {
                        itemIds: [user.uid],
                        total: 1,
                        count: 1,
                    };
                }
            }
        );
        builder.addDefaultCase(() => {});
    }),
});

export default moduleUserReducer;
