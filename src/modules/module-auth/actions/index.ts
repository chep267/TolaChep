/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createActionKey, createAction as createActionBase } from '@module-base/utils';

/** types */
import type { UserType } from '@module-user/utils';
import type { AuthFormErrorType } from '@module-auth/utils';

const arrActionKey = ['AUTO_START', 'SIGN_IN', 'REGISTER', 'RECOVER', 'SIGN_OUT', 'CHANGE_PATH_NAME'] as const;
const AUTH_ACTION = createActionKey('AUTH_ACTION', arrActionKey);

type AuthActionPayloadType = {
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
        onFailure?(value: AuthFormErrorType): void;
    };
    [AUTH_ACTION.SIGN_IN.SUCCESS]: {
        user: UserType;
    };
    [AUTH_ACTION.SIGN_OUT.REQUEST]: {
        onSuccess?(): void;
        onFailure?(): void;
    };
    [AUTH_ACTION.SIGN_OUT.SUCCESS]: object;
    [AUTH_ACTION.REGISTER.REQUEST]: {
        account: string;
        password: string;
        type?: 'account';
        onSuccess?(): void;
        onFailure?(value: AuthFormErrorType): void;
    };
    [AUTH_ACTION.REGISTER.SUCCESS]: object;
};

function createAction<Type extends keyof AuthActionPayloadType>(type: Type) {
    return createActionBase<Type, AuthActionPayloadType>(type);
}

const authAction = Object.freeze({
    autoStart: {
        request: createAction(AUTH_ACTION.AUTO_START.REQUEST),
        success: createAction(AUTH_ACTION.AUTO_START.SUCCESS),
    },
    signIn: {
        request: createAction(AUTH_ACTION.SIGN_IN.REQUEST),
        success: createAction(AUTH_ACTION.SIGN_IN.SUCCESS),
    },
    signOut: {
        request: createAction(AUTH_ACTION.SIGN_OUT.REQUEST),
        success: createAction(AUTH_ACTION.SIGN_OUT.SUCCESS),
    },
    register: {
        request: createAction(AUTH_ACTION.REGISTER.REQUEST),
        success: createAction(AUTH_ACTION.REGISTER.SUCCESS),
    },
});

export type { AuthActionPayloadType };
export { authAction, AUTH_ACTION };
