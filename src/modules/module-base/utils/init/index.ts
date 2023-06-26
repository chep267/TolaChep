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
    }
>(message: Readonly<MessageType>): Readonly<ReturnType> {
    const result = {} as ReturnType;
    Object.keys(message).forEach((key) => {
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
    ActionKeys extends Readonly<string>,
    StateKeys extends Readonly<['REQUEST', 'SUCCESS', 'FAILURE']>[number],
    ReturnType extends {
        [action in ActionKeys]: {
            [state in StateKeys]: `${RootKey}_${action}_${state}`;
        };
    }
>(rootKey: Readonly<RootKey>, actionKeys: Readonly<ActionKeys[]>): ReturnType {
    const result = {} as ReturnType;
    const stateKeys = ['REQUEST', 'SUCCESS', 'FAILURE'] as const;
    actionKeys.forEach((action) => {
        stateKeys.forEach((state) => {
            if (!result[action]) {
                result[action] = {};
            }
            result[action][state] = `${rootKey}_${action}_${state}` as 0[ActionKeys][StateKeys];
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
