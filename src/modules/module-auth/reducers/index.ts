/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** utils */
import { AUTH_STORE_KEY } from '@module-auth/constants';
import { AUTH_ACTION } from '@module-auth/actions';

/** types */
import type { StoreAuthType } from '@module-auth/models';

const initialState: StoreAuthType = {
    meId: '',
};

const moduleAuthReducer = Object.freeze({
    [AUTH_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction<Pick<StoreAuthType, 'meId'>>(AUTH_ACTION.SIGN_IN.SUCCESS), (state, action) => {
            const { meId } = action.payload;
            state.meId = meId;
        });
        builder.addCase(createAction(AUTH_ACTION.SIGN_OUT.SUCCESS), (state) => {
            state.meId = '';
        });
        builder.addDefaultCase(() => {});
    }),
});

export default moduleAuthReducer;
