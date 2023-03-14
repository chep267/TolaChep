/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { emptyArray } from '@module-base/constants';

class SessionStorageBase {
    get = (key = '') => window.sessionStorage.getItem(key);
    getList = (keys: string[] = emptyArray) => {
        const results: Record<string, any> = {};
        keys.forEach((key) => {
            results[key] = this.get(key);
        });
        return results;
    };

    set = (key = '', data = '') => {
        window.sessionStorage.setItem(key, data);
        return true;
    };
    setList = (keys: string[] = emptyArray, data: any[] = emptyArray) => {
        keys.forEach((key, index) => {
            this.set(key, data[index]);
        });
        return true;
    };

    remove = (key = '') => {
        window.sessionStorage.removeItem(key);
        return true;
    };
    removeList = (keys: string[] = emptyArray) => {
        keys.forEach((key) => {
            this.remove(key);
        });
        return true;
    };

    clearAll = () => {
        window.sessionStorage.clear();
        return true;
    };
    clearAllButSkipForKeys = (keys: string[] = emptyArray) => {
        const dataSkip = this.getList(keys);
        this.clearAll();
        this.setList(keys, Object.values(dataSkip));
        return true;
    };
}

const sessionStorageBase = new SessionStorageBase();
export default sessionStorageBase;
