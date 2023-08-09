/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createAction as createActionBase, createActionKey } from '@module-base/utils';

/** types */
import type { UserType } from '@module-user/models';

const USER_ACTION = createActionKey('USER_ACTION', ['GET', 'CREATE', 'UPDATE', 'DELETE'] as const);

type UserActionPayloadType = {
    [USER_ACTION.GET.REQUEST]: {
        uid: string;
        onSuccess?(): void;
        onFailure?(): void;
    };
    [USER_ACTION.GET.SUCCESS]: {
        parentId?: string;
        user: UserType;
    };

    [USER_ACTION.CREATE.REQUEST]: {
        user: UserType;
        onSuccess?(): void;
        onFailure?(): void;
    };
    [USER_ACTION.CREATE.SUCCESS]: {
        parentId?: string;
        user: UserType;
    };

    [USER_ACTION.UPDATE.REQUEST]: {
        account: string;
        password: string;
        onSuccess(): void;
        onFailure(): void;
    };
    [USER_ACTION.UPDATE.SUCCESS]: {
        user: UserType;
    };

    [USER_ACTION.DELETE.REQUEST]: {
        account: string;
        password: string;
        onSuccess(): void;
        onFailure(): void;
    };
    [USER_ACTION.DELETE.SUCCESS]: unknown;
};

function createAction<Type extends Readonly<string>>(type: Type) {
    return createActionBase<Type, UserActionPayloadType>(type);
}

const userAction = Object.freeze({
    get: {
        request: createAction(USER_ACTION.GET.REQUEST),
        success: createAction(USER_ACTION.GET.SUCCESS),
    },
    create: {
        request: createAction(USER_ACTION.CREATE.REQUEST),
        success: createAction(USER_ACTION.CREATE.SUCCESS),
    },
    update: {
        request: createAction(USER_ACTION.UPDATE.REQUEST),
        success: createAction(USER_ACTION.UPDATE.SUCCESS),
    },
    delete: {
        request: createAction(USER_ACTION.DELETE.REQUEST),
        success: createAction(USER_ACTION.DELETE.SUCCESS),
    },
});

export type { UserActionPayloadType };
export { userAction, USER_ACTION };
