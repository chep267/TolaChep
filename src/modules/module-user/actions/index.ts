/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { createAction, createActionKey } from '@module-base/utils';
import { TypeUser } from '@module-user/utils';

const arrActionKey = ['GET', 'CREATE', 'UPDATE', 'DELETE'] as const;
export const USER_ACTION = createActionKey('USER_ACTION', arrActionKey);

export type TypeUser_ACTION_PAYLOAD = {
    [USER_ACTION.GET.REQUEST]: {
        uid: string;
        onSuccess?(): void;
        onFailure?(): void;
    };
    [USER_ACTION.GET.SUCCESS]: {
        user: TypeUser;
    };
    [USER_ACTION.CREATE.REQUEST]: {
        uid: string;
    };
    [USER_ACTION.CREATE.SUCCESS]: {
        user: TypeUser;
    };
    [USER_ACTION.UPDATE.REQUEST]: {
        account: string;
        password: string;
        onSuccess(): void;
        onFailure(): void;
    };
    [USER_ACTION.UPDATE.SUCCESS]: {
        user: TypeUser;
    };
    [USER_ACTION.DELETE.REQUEST]: {
        account: string;
        password: string;
        onSuccess(): void;
        onFailure(): void;
    };
    [USER_ACTION.DELETE.SUCCESS]: {};
};

function createUserAction<Type extends keyof TypeUser_ACTION_PAYLOAD>(type: Type) {
    return createAction<Type, TypeUser_ACTION_PAYLOAD>(type);
}

export const userAction = Object.freeze({
    get: {
        request: createUserAction(USER_ACTION.GET.REQUEST),
        success: createUserAction(USER_ACTION.GET.SUCCESS),
    },
    create: {
        request: createUserAction(USER_ACTION.CREATE.REQUEST),
        success: createUserAction(USER_ACTION.CREATE.SUCCESS),
    },
    update: {
        request: createUserAction(USER_ACTION.UPDATE.REQUEST),
        success: createUserAction(USER_ACTION.UPDATE.SUCCESS),
    },
    delete: {
        request: createUserAction(USER_ACTION.DELETE.REQUEST),
        success: createUserAction(USER_ACTION.DELETE.SUCCESS),
    },
});
