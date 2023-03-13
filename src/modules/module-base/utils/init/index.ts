/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { emptyObject } from '@module-base/constants';

/**
 * hàm tạo message cho intl
 */
export const parseMessageToDefineIntlMessage = <messageType>(
    message: Readonly<messageType>
): {
    [key in keyof messageType]: {
        id: key;
        defaultMessage: messageType[key];
    };
} => {
    const data = {} as {
        [key in keyof messageType]: {
            id: key;
            defaultMessage: messageType[key];
        };
    };

    Object.keys(message).forEach((key) => {
        data[key] = {
            id: key,
            defaultMessage: message[key],
        };
    });

    return data;
};

/**
 * hàm tạo action key cho module
 */
export function createActionKey<Root extends string, Action extends Readonly<string[]>>(rootKey: Root, arrActionKey: Action) {
    const action = {} as Readonly<{
        [key in Action[number]]: {
            REQUEST: `${Root}_${key}_REQUEST`;
            SUCCESS: `${Root}_${key}_SUCCESS`;
            FAILURE: `${Root}_${key}_FAILURE`;
        };
    }>;
    arrActionKey.forEach((key) => {
        action[key] = {
            REQUEST: `${rootKey}_${key}_REQUEST`,
            SUCCESS: `${rootKey}_${key}_SUCCESS`,
            FAILURE: `${rootKey}_${key}_FAILURE`,
        };
    });
    return action;
}

/**
 * hàm tạo action dispatch
 */
export const createAction = (type = '', payload: object = emptyObject) => ({
    type,
    payload,
});

/**
 * hàm tạo object
 */
export function createObject<Root extends string, Keys extends Readonly<string[]>>(rootKey: Root, arrKey: Keys) {
    const object = {} as Readonly<{
        [key in Keys[number]]: `${Root}_${key}`;
    }>;
    arrKey.forEach((key) => {
        object[key] = `${rootKey}_${key}`;
    });
    return object;
}
