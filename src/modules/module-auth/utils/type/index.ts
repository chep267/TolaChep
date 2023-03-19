/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { TypeUser } from '@module-user/utils';
import { AUTH_FORM_ERROR } from '@module-auth/constants';

export type TYPE_STORE_AUTH = {
    meId: string;
    user: TypeUser;
};

export type TypeAuthFormError = (typeof AUTH_FORM_ERROR)[keyof typeof AUTH_FORM_ERROR];

export type TYPE_ACCOUNT = 'account' | 'facebook' | 'google';
