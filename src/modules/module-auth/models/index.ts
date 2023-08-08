/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { AUTH_FORM_ERROR } from '@module-auth/constants';

type StoreAuthType = {
    meId: string;
};

type FormErrorType = (typeof AUTH_FORM_ERROR)[keyof typeof AUTH_FORM_ERROR];

type AccountType = 'account' | 'facebook' | 'google';

type FormStatusType = Record<'account' | 'password' | 'passwordHill', FormErrorType>;

type FormDataType = Record<'account' | 'password' | 'passwordHill', string>;

export type { StoreAuthType, FormErrorType, AccountType, FormStatusType, FormDataType };
