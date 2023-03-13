/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** reducers */
import { hasUserReducers } from '@module-user/reducers/hasUser';
import { addUserToState } from '@module-user/reducers/user';

/** utils */
import { USER_STORE_KEY } from '@module-user/constants';
import { TYPE_USER_STORE } from '@module-user/utils';
import { USER_ACTION } from '@module-user/actions';

const initialState: TYPE_USER_STORE = {
    [USER_STORE_KEY.HAS_USER]: {},
    [USER_STORE_KEY.USER]: {},
};

const moduleUserReducer = {
    [USER_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction(USER_ACTION.GET.SUCCESS), addUserToState);
        builder.addCase(createAction(USER_ACTION.CREATE.SUCCESS), addUserToState);
        builder.addDefaultCase((state, action) => {
            // const a = current(state);
            // // do nothing
            // debugger;
        });
    }),
};

export default moduleUserReducer;
