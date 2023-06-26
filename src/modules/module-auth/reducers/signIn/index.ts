/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import type { PayloadAction } from '@reduxjs/toolkit';

/** constants */
import { emptyUser } from '@module-user/constants';

/** types */
import { StoreAuthType } from '@module-auth/utils';

const signInSuccess = (state: StoreAuthType, action: PayloadAction<Pick<StoreAuthType, 'user'>>) => {
    const { user } = action.payload;
    state.user = user;
    state.meId = user.uid;
};

const signOutSuccess = (state: StoreAuthType) => {
    state.user = emptyUser;
    state.meId = '';
};

export { signInSuccess, signOutSuccess };
