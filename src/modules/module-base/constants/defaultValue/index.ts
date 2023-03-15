/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const emptyFunction = Object.freeze(() => undefined) as () => void;
const emptyObject = Object.freeze({}) as {};
const emptyArray = Object.freeze([]) as [];

const comparePure =
    (type: 'pure' | 'check' | 'ignore' = 'pure', keys: string[] = emptyArray) =>
    (prev: Record<string, any>, next: Record<string, any>) => {
        if (type === 'pure') {
            return true;
        }

        /** bỏ qua check key trong keys */
        if (type === 'ignore') {
            for (const key in prev) {
                if (prev.hasOwnProperty(key)) {
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
            if (prev[key] !== next[key]) {
                return false;
            }
        }
        return true;
    };

export { emptyFunction, emptyObject, emptyArray, comparePure };
