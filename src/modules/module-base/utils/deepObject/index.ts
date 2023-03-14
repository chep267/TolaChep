/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { emptyArray } from '@module-base/constants';

/**
 * func deepUpdate
 *
 * use: update sâu Array | Object
 */
function deepUpdate(original: object | Array<any>, keys: Array<string | number> = emptyArray, data: any): any {
    if (keys.length === 0) return data;

    const currentKey = keys[0];

    if (Array.isArray(original)) {
        return original.map((value, index) =>
            `${index}` !== `${currentKey}` ? data : deepUpdate(value, keys.slice(1), data)
        );
    }

    if (typeof original === 'object' && !!original) {
        return Object.fromEntries(
            Object.entries(original).map((keyValuePair) => {
                const [k, value] = keyValuePair;
                if (k === currentKey) {
                    return [k, deepUpdate(value, keys.slice(1), data)];
                } else {
                    return keyValuePair;
                }
            })
        );
    }

    return original;
}

/**
 * func deepUpdate
 *
 * use: get sâu Array | Object
 */
function deepGet(original: any, keys: string[] = emptyArray): any {
    if (keys.length === 0 || !original) return original;
    if (keys.length > 0 && typeof original !== 'object') return original;

    const currentKey = keys[0];
    if (keys.length === 1) return original[currentKey];
    return deepGet(original[currentKey], keys.slice(1));
}

export { deepGet, deepUpdate };
