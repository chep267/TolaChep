/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { AUTH_FORM_ERROR } from '@module-auth/constants';

/** types */
import { UserType } from '@module-user/utils';

type StoreAuthType = {
    meId: string;
    me: UserType;
};

type AuthFormErrorType = (typeof AUTH_FORM_ERROR)[keyof typeof AUTH_FORM_ERROR];

type AccountType = 'account' | 'facebook' | 'google';

export type { StoreAuthType, AuthFormErrorType, AccountType };
