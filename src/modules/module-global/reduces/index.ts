/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

/** actions */
import { GLOBAL_ACTION } from '@module-global/actions';

/** utils */
import { GLOBAL_STORE_KEY } from '@module-global/constants';
import { TYPE_GLOBAL_STORE } from '@module-global/utils';

const startAppSuccess = (state: TYPE_GLOBAL_STORE, action: PayloadAction<{ avatar: string; cover: string }>) => {
    const { avatar, cover } = action.payload;
    state.image = {
        avatar,
        cover,
    };
};

const initialState: TYPE_GLOBAL_STORE = {
    router: '/',
    image: {
        avatar: '',
        cover: '',
    },
};

const moduleGlobalReducer = {
    [GLOBAL_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction<{ avatar: string; cover: string }>(GLOBAL_ACTION.START_APP.SUCCESS), startAppSuccess);
        builder.addDefaultCase((state, action) => {
            // const a = current(state);
            // // do nothing
            // debugger;
        });
    }),
};

export default moduleGlobalReducer;
