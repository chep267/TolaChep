/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createActionKey, createAction as createActionBase } from '@module-base/utils';

/** types */
import type { FormErrorType } from '@module-auth/models';

const arrActionKey = ['AUTO_START', 'SIGN_IN', 'REGISTER', 'RECOVER', 'SIGN_OUT', 'CHANGE_PATH_NAME'] as const;
const AUTH_ACTION = createActionKey('AUTH_ACTION', arrActionKey);

type AuthActionPayloadType = {
    [AUTH_ACTION.SIGN_IN.REQUEST]: {
        account: string;
        password: string;
        onSuccess?(): void;
        onFailure?(value: FormErrorType): void;
    };
    [AUTH_ACTION.SIGN_IN.SUCCESS]: {
        meId: string;
    };

    [AUTH_ACTION.SIGN_OUT.REQUEST]: null;
    [AUTH_ACTION.SIGN_OUT.SUCCESS]: null;

    [AUTH_ACTION.REGISTER.REQUEST]: {
        account: string;
        password: string;
        type?: 'account';
        onSuccess?(): void;
        onFailure?(value: FormErrorType): void;
    };
    [AUTH_ACTION.REGISTER.SUCCESS]: object;

    [AUTH_ACTION.RECOVER.REQUEST]: {
        account: string;
        type?: 'account';
        onSuccess?(): void;
        onFailure?(error: FormErrorType): void;
    };
    [AUTH_ACTION.RECOVER.SUCCESS]: object;
};

function createAction<Type extends keyof AuthActionPayloadType>(type: Type) {
    return createActionBase<Type, AuthActionPayloadType>(type);
}

const authAction = Object.freeze({
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
    recover: {
        request: createAction(AUTH_ACTION.RECOVER.REQUEST),
        success: createAction(AUTH_ACTION.RECOVER.SUCCESS),
    },
});

export type { AuthActionPayloadType };
export { authAction, AUTH_ACTION };
