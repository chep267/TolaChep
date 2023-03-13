/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createActionKey, createAction } from '@module-base/utils';
import { TYPE_USER } from '@module-user/utils';
import { TYPE_AUTH_FORM_ERROR } from '@module-auth/utils';

const arrActionKey = ['AUTO_START', 'SIGN_IN', 'REGISTER', 'RECOVER', 'SIGN_OUT', 'CHANGE_PATH_NAME'] as const;
export const AUTH_ACTION = createActionKey('AUTH_ACTION', arrActionKey);

export const authAction = {
    autoStart: {
        request: (payload: { uid: string }) => createAction(AUTH_ACTION.AUTO_START.REQUEST, payload),
        success: (payload: { account: string; password: string; onSuccess?(): void; onFailure?(): void }) =>
            createAction(AUTH_ACTION.AUTO_START.SUCCESS, payload),
    },
    signIn: {
        request: (payload: {
            email: string;
            phone: string;
            password: string;
            onSuccess?(): void;
            onFailure?(value: TYPE_AUTH_FORM_ERROR): void;
        }) => createAction(AUTH_ACTION.SIGN_IN.REQUEST, payload),
        success: (payload: { user: TYPE_USER }) => createAction(AUTH_ACTION.SIGN_IN.SUCCESS, payload),
    },
    register: {
        request: (payload: {
            email: string;
            phone: string;
            password: string;
            onSuccess?(): void;
            onFailure?(value: TYPE_AUTH_FORM_ERROR): void;
        }) => createAction(AUTH_ACTION.REGISTER.REQUEST, payload),
    },
    signOut: {
        request: (payload: { account: string; password: string; onSuccess?(): void; onFailure?(): void }) =>
            createAction(AUTH_ACTION.SIGN_OUT.REQUEST, payload),
        success: () => createAction(AUTH_ACTION.SIGN_OUT.SUCCESS),
    },
};
