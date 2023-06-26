/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createAction, createReducer } from '@reduxjs/toolkit';

/** actions */
import { GLOBAL_ACTION } from '@module-global/actions';

/** utils */
import { GLOBAL_STORE_KEY } from '@module-global/constants';
import { GlobalStoreType } from '@module-global/utils';

/** types */
import type { PayloadAction } from '@reduxjs/toolkit';

const startAppSuccess = (state: GlobalStoreType, action: PayloadAction<{ avatar: string; cover: string }>) => {
    const { avatar, cover } = action.payload;
    state.image = {
        avatar,
        cover,
    };
};

const initialState: GlobalStoreType = {
    router: '/',
    image: {
        avatar: '',
        cover: '',
    },
};

const moduleGlobalReducer = Object.freeze({
    [GLOBAL_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addCase(createAction<{ avatar: string; cover: string }>(GLOBAL_ACTION.START_APP.SUCCESS), startAppSuccess);
        builder.addDefaultCase((state, action) => {
            // const a = current(state);
            // // do nothing
            // debugger;
        });
    }),
});

export default moduleGlobalReducer;
