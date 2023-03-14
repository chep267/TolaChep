/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { emptyObject } from '@module-base/constants';

/** hàm tạo message cho intl */
export const parseMessageToDefineIntlMessage = <messageType>(message: Readonly<messageType>) =>
    (Object.keys(message) as (keyof messageType)[]).reduce(
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

/** hàm tạo action key cho module */
export const createActionKey = <Root extends string, ActionKey extends Readonly<string[]>>(
    rootKey: Root,
    arrActionKey: ActionKey
) =>
    arrActionKey.reduce(
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

/** hàm tạo action dispatch */
export const createAction = (type = '', payload: object = emptyObject) => ({
    type,
    payload,
});

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
