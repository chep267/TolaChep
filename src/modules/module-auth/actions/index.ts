/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { createActionKey, createAction } from '@module-base/utils';
import { TYPE_USER } from '@module-user/utils';
import { TYPE_AUTH_FORM_ERROR } from '@module-auth/utils';

const arrActionKey = ['AUTO_START', 'SIGN_IN', 'REGISTER', 'RECOVER', 'SIGN_OUT', 'CHANGE_PATH_NAME'] as const;
export const AUTH_ACTION = createActionKey('AUTH_ACTION', arrActionKey);

export type TYPE_AUTH_ACTION_PAYLOAD = {
    [AUTH_ACTION.AUTO_START.REQUEST]: {
        uid: string;
    };
    [AUTH_ACTION.AUTO_START.SUCCESS]: {
        account: string;
        password: string;
        onSuccess?(): void;
        onFailure?(): void;
    };
    [AUTH_ACTION.SIGN_IN.REQUEST]: {
        account: string;
        password: string;
        onSuccess?(): void;
        onFailure?(value: TYPE_AUTH_FORM_ERROR): void;
    };
    [AUTH_ACTION.SIGN_IN.SUCCESS]: {
        user: TYPE_USER;
    };
    [AUTH_ACTION.SIGN_OUT.REQUEST]: {
        account: string;
        password: string;
        onSuccess?(): void;
        onFailure?(): void;
    };
    [AUTH_ACTION.SIGN_OUT.SUCCESS]: {};
    [AUTH_ACTION.REGISTER.REQUEST]: {
        account: string;
        password: string;
        type?: 'account';
        onSuccess?(): void;
        onFailure?(value: TYPE_AUTH_FORM_ERROR): void;
    };
    [AUTH_ACTION.REGISTER.SUCCESS]: {};
};

function createAuthAction<Type extends keyof TYPE_AUTH_ACTION_PAYLOAD>(type: Type) {
    return createAction<Type, TYPE_AUTH_ACTION_PAYLOAD>(type);
}

export const authAction = {
    autoStart: {
        request: createAuthAction(AUTH_ACTION.AUTO_START.REQUEST),
        success: createAuthAction(AUTH_ACTION.AUTO_START.SUCCESS),
    },
    signIn: {
        request: createAuthAction(AUTH_ACTION.SIGN_IN.REQUEST),
        success: createAuthAction(AUTH_ACTION.SIGN_IN.SUCCESS),
    },
    signOut: {
        request: createAuthAction(AUTH_ACTION.SIGN_OUT.REQUEST),
        success: createAuthAction(AUTH_ACTION.SIGN_OUT.SUCCESS),
    },
    register: {
        request: createAuthAction(AUTH_ACTION.REGISTER.REQUEST),
        success: createAuthAction(AUTH_ACTION.REGISTER.SUCCESS),
    },
};
