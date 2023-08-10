/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

const emptyFunction = Object.freeze(() => {});
const emptyObject = Object.freeze({}) as object;
const emptyArray = Object.freeze([]) as [];

const TIMING_SEARCHING = 300;

const comparePure =
    (type: 'pure' | 'check' | 'ignore' = 'pure', keys: string[] = emptyArray) =>
    (prev: Record<string, unknown>, next: Record<string, unknown>) => {
        if (type === 'pure') {
            return true;
        }

        /** bỏ qua check key trong keys */
        if (type === 'ignore') {
            for (const key in prev) {
                if (Object.hasOwn(prev, key)) {
                    if (keys.includes(key)) {
                        continue;
                    }
                    if (prev[key] !== next[key]) {
                        return false;
                    }
                }
            }
            return true;
        }

        /** chỉ check key trong keys */
        for (const key of keys) {
            if (Object.hasOwn(prev, key) && prev[key] !== next[key]) {
                return false;
            }
        }
        return true;
    };

export { emptyFunction, emptyObject, emptyArray, comparePure, TIMING_SEARCHING };
