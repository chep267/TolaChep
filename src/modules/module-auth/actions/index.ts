/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { createActionKey, createAction } from '@module-base/utils';
import { TypeUser } from '@module-user/utils';
import { TypeAuthFormError } from '@module-auth/utils';

const arrActionKey = ['AUTO_START', 'SIGN_IN', 'REGISTER', 'RECOVER', 'SIGN_OUT', 'CHANGE_PATH_NAME'] as const;
export const AUTH_ACTION = createActionKey('AUTH_ACTION', arrActionKey);

export type TypeAuthActionPayload = {
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
        onFailure?(value: TypeAuthFormError): void;
    };
    [AUTH_ACTION.SIGN_IN.SUCCESS]: {
        user: TypeUser;
    };
    [AUTH_ACTION.SIGN_OUT.REQUEST]: {
        onSuccess?(): void;
        onFailure?(): void;
    };
    [AUTH_ACTION.SIGN_OUT.SUCCESS]: {};
    [AUTH_ACTION.REGISTER.REQUEST]: {
        account: string;
        password: string;
        type?: 'account';
        onSuccess?(): void;
        onFailure?(value: TypeAuthFormError): void;
    };
    [AUTH_ACTION.REGISTER.SUCCESS]: {};
};

function createAuthAction<Type extends keyof TypeAuthActionPayload>(type: Type) {
    return createAction<Type, TypeAuthActionPayload>(type);
}

export const authAction = Object.freeze({
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
});
