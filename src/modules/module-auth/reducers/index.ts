/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** reducers */
import { signInSuccess, signOutSuccess } from './signIn';

/** utils */
import { emptyUser } from '@module-user/constants';
import { TYPE_STORE_AUTH } from '@module-auth/utils';
import { AUTH_STORE_KEY } from '@module-auth/constants';
import { GLOBAL_ACTION } from '@module-global/actions';
import { AUTH_ACTION } from '@module-auth/actions';

const initialState: TYPE_STORE_AUTH = {
    meId: '',
    user: emptyUser,
};

const moduleAuthReducer = {
    [AUTH_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction(GLOBAL_ACTION.START_APP.SUCCESS), () => {
            // do
        });
        builder.addCase(createAction<Pick<TYPE_STORE_AUTH, 'user'>>(AUTH_ACTION.SIGN_IN.SUCCESS), signInSuccess);
        builder.addCase(createAction(AUTH_ACTION.SIGN_OUT.SUCCESS), signOutSuccess);
        builder.addDefaultCase((state, action) => {
            // const a = current(state);
            // // do nothing
            // debugger;
        });
    }),
};

export default moduleAuthReducer;
