/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createActionKey, createAction as createActionBase } from '@module-base/utils';

/** types */
type GLOBAL_ACTION_PAYLOAD_PROPS = {
    [GLOBAL_ACTION.START_APP.REQUEST]: {
        onSuccess(): void;
    };
    [GLOBAL_ACTION.START_APP.SUCCESS]: {
        avatar: string;
        cover: string;
    };
};

const arrActionKey = ['START_APP'] as const;
const GLOBAL_ACTION = createActionKey('GLOBAL_ACTION', arrActionKey);

function createAction<Type extends Readonly<string>>(type: Type) {
    return createActionBase<Type, GLOBAL_ACTION_PAYLOAD_PROPS>(type);
}

const globalAction = Object.freeze({
    startApp: {
        request: createAction(GLOBAL_ACTION.START_APP.REQUEST),
        success: createAction(GLOBAL_ACTION.START_APP.SUCCESS),
    },
});

export type { GLOBAL_ACTION_PAYLOAD_PROPS };
export { globalAction, GLOBAL_ACTION };
