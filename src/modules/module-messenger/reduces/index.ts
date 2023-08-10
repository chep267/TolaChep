/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createReducer } from '@reduxjs/toolkit';

/** utils */
import { MESSENGER_STORE_KEY } from '@module-messenger/constants';

/** types */
import type { StoreAuthType } from '@module-auth/models';

const initialState: StoreAuthType = {
    meId: '',
};

const moduleMessengerReducer = Object.freeze({
    [MESSENGER_STORE_KEY.ROOT]: createReducer(initialState, (builder) => {
        builder.addDefaultCase(() => {});
    }),
});

export default moduleMessengerReducer;
