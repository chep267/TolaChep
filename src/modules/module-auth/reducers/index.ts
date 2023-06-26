/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** reducers */
import { signInSuccess, signOutSuccess } from './signIn';

/** utils */
import { emptyUser } from '@module-user/constants';
import { AUTH_STORE_KEY } from '@module-auth/constants';
import { AUTH_ACTION } from '@module-auth/actions';

/** types */
import type { StoreAuthType } from '@module-auth/utils';

const initialState: StoreAuthType = {
    meId: '',
    me: emptyUser,
};

const moduleAuthReducer = Object.freeze({
    [AUTH_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction<Pick<StoreAuthType, 'user'>>(AUTH_ACTION.SIGN_IN.SUCCESS), signInSuccess);
        builder.addCase(createAction(AUTH_ACTION.SIGN_OUT.SUCCESS), signOutSuccess);
        builder.addDefaultCase((state, action) => {
            // // do nothing
        });
    }),
});

export default moduleAuthReducer;
