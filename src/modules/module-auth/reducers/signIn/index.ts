/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import type { PayloadAction } from '@reduxjs/toolkit';
import { TYPE_STORE_AUTH } from '@module-auth/utils';
import { emptyUser } from '@module-user/constants';

export const signInSuccess = (state: TYPE_STORE_AUTH, action: PayloadAction<Pick<TYPE_STORE_AUTH, 'user'>>) => {
    const { user } = action.payload;
    state.user = user;
    state.meId = user.uid;
};

export const signOutSuccess = (state: TYPE_STORE_AUTH) => {
    state.user = emptyUser;
    state.meId = '';
};
