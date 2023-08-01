/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** hàm tạo message cho intl */
export function createMessageIntl<
    MessageType extends Readonly<Record<string, string>>,
    ReturnType extends {
        [key in keyof MessageType]: { id: key; defaultMessage: MessageType[key] };
    },
>(message: MessageType): Readonly<ReturnType> {
    const result = {} as ReturnType;
    Object.keys(message).forEach((key) => {
        // @ts-ignore
        result[key] = {
            id: key,
            defaultMessage: message[key],
        };
    });
    return Object.freeze(result);
}

/** hàm tạo action key cho module */
export function createActionKey<
    RootKey extends Readonly<string>,
    ActionKey extends Readonly<string>,
    StateKey extends Readonly<['REQUEST', 'SUCCESS', 'FAILURE']>[number],
    ReturnType extends {
        [action in ActionKey]: {
            [state in StateKey]: `${RootKey}_${action}_${state}`;
        };
    },
>(rootKey: RootKey, actionKeys: Readonly<ActionKey[]>): ReturnType {
    const result = {} as ReturnType;
    const stateKeys = ['REQUEST', 'SUCCESS', 'FAILURE'] as const;
    actionKeys.forEach((action) => {
        stateKeys.forEach((state) => {
            if (!result[action]) {
                // @ts-ignore
                result[action] = {};
            }
            // @ts-ignore
            result[action][state] = `${rootKey}_${action}_${state}`;
        });
    });
    return Object.freeze(result);
}

/** hàm tạo action dispatch */
export function createAction<Type extends Readonly<string>, Payload extends object>(type: Readonly<Type>) {
    return function (payload: Payload): {
        type: Type;
        payload: Payload;
    } {
        return { type, payload };
    };
}
