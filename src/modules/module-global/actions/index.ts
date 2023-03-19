/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { createActionKey, createAction } from '@module-base/utils';

const arrActionKey = ['START_APP'] as const;
export const GLOBAL_ACTION = createActionKey('GLOBAL_ACTION', arrActionKey);

export type TYPE_GLOBAL_ACTION_PAYLOAD = {
    [GLOBAL_ACTION.START_APP.REQUEST]: {
        onSuccess(): void;
    };
    [GLOBAL_ACTION.START_APP.SUCCESS]: {
        avatar: string;
        cover: string;
    };
};

function createGlobalAction<Type extends keyof TYPE_GLOBAL_ACTION_PAYLOAD>(type: Type) {
    return createAction<Type, TYPE_GLOBAL_ACTION_PAYLOAD>(type);
}

export const globalAction = Object.freeze({
    startApp: {
        request: createGlobalAction(GLOBAL_ACTION.START_APP.REQUEST),
        success: createGlobalAction(GLOBAL_ACTION.START_APP.SUCCESS),
    },
});
