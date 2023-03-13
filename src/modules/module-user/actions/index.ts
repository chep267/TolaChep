/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { createAction, createActionKey } from '@module-base/utils';
import { TYPE_USER } from '@module-user/utils';

const arrActionKey = ['GET', 'CREATE', 'UPDATE', 'DELETE'] as const;
export const USER_ACTION = createActionKey('USER_ACTION', arrActionKey);

export const userAction = {
    get: {
        request: (payload: { account: string; password: string; onSuccess(): void; onFailure(): void }) =>
            createAction(USER_ACTION.GET.REQUEST, payload),
        success: (payload: { user: TYPE_USER }) => createAction(USER_ACTION.GET.SUCCESS, payload),
    },
    create: {
        request: (payload: { uid: string }) => createAction(USER_ACTION.CREATE.REQUEST, payload),
        success: (payload: { user: TYPE_USER }) => createAction(USER_ACTION.CREATE.SUCCESS, payload),
    },
    update: {
        request: (payload: { account: string; password: string; onSuccess(): void; onFailure(): void }) =>
            createAction(USER_ACTION.UPDATE.REQUEST, payload),
        success: (payload: { user: TYPE_USER }) => createAction(USER_ACTION.UPDATE.SUCCESS, payload),
    },
    delete: {
        request: (payload: { account: string; password: string; onSuccess(): void; onFailure(): void }) =>
            createAction(USER_ACTION.DELETE.REQUEST, payload),
    },
};
