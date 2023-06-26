/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** actions */
import { USER_ACTION } from '@module-user/actions';

/** reducers */
import { addUser } from '@module-user/reducers/users';

/** constants */
import { USER_STORE_KEY } from '@module-user/constants';

/** types */
import type { UserStoreType } from '@module-user/utils';

const initialState: UserStoreType = {
    [USER_STORE_KEY.HAS_USER]: {},
    [USER_STORE_KEY.USER]: {},
};

const moduleUserReducer = Object.freeze({
    [USER_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction(USER_ACTION.GET.SUCCESS), addUser);
        builder.addCase(createAction(USER_ACTION.CREATE.SUCCESS), addUser);
        builder.addDefaultCase((state, action) => {
            // const a = current(state);
            // // do nothing
            // debugger;
        });
    }),
});

export default moduleUserReducer;
