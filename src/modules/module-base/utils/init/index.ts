/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** hàm tạo message cho intl */
export function createMessageIntl<messageType>(message: Readonly<messageType>) {
    const msg = (Object.keys(message) as (keyof messageType)[]).reduce(
        (obj, key) => {
            obj[key] = {
                id: key,
                defaultMessage: message[key],
            };
            return obj;
        },
        {} as {
            [key in keyof messageType]: {
                id: key;
                defaultMessage: messageType[key];
            };
        }
    );
    return Object.freeze(msg);
}

/** hàm tạo action key cho module */
export function createActionKey<Root extends Readonly<string>, ActionKey extends Readonly<string[]>>(
    rootKey: Root,
    arrActionKey: ActionKey
) {
    const action = arrActionKey.reduce(
        (obj, key: ActionKey[number]) => {
            obj[key] = {
                REQUEST: `${rootKey}_${key}_REQUEST`,
                SUCCESS: `${rootKey}_${key}_SUCCESS`,
                FAILURE: `${rootKey}_${key}_FAILURE`,
            };
            return obj;
        },
        {} as {
            [Key in ActionKey[number]]: {
                REQUEST: `${Root}_${Key}_REQUEST`;
                SUCCESS: `${Root}_${Key}_SUCCESS`;
                FAILURE: `${Root}_${Key}_FAILURE`;
            };
        }
    );
    return Object.freeze(action);
}

/** hàm tạo action dispatch */
export function createAction<Type extends keyof Action, Action extends Record<Type, object>>(type: Type) {
    return function (payload: Action[Type]) {
        return { type, payload };
    };
}

/** hàm tạo object */
// export function createObject<Root extends string, Keys extends Readonly<string[]>>(rootKey: Root, arrKey: Keys) {
//     const object = {} as Readonly<{
//         [key in Keys[number]]: `${Root}_${key}`;
//     }>;
//     arrKey.forEach((key) => {
//         object[key] = `${rootKey}_${key}`;
//     });
//     return object;
// }
