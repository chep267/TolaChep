/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { emptyArray } from '@module-base/constants';

type StorageName = 'localStorage' | 'sessionStorage';

class StorageBase {
    constructor(storageName: StorageName) {
        this.storageName = storageName;
    }

    private storageName;

    get = (key: string) => window[this.storageName].getItem(key);
    getList = (keys: string[] = emptyArray) => {
        const results: Record<string, any> = {};
        keys.forEach((key) => {
            results[key] = this.get(key);
        });
        return results;
    };

    set = (key: string, data: string) => window[this.storageName].setItem(key, data);
    setList = (keys: string[] = emptyArray, data: any[] = emptyArray) =>
        keys.forEach((key, index) => {
            this.set(key, data[index]);
        });

    remove = (key: string) => window[this.storageName].removeItem(key);
    removeList = (keys: string[] = emptyArray) =>
        keys.forEach((key) => {
            this.remove(key);
        });

    clearAll = () => window[this.storageName].clear();
    clearIgnoreKeys = (keys: string[] = emptyArray) => {
        const ignoreData = this.getList(keys);
        this.clearAll();
        this.setList(keys, Object.values(ignoreData));
        return true;
    };
}

const localStorageBase = new StorageBase('localStorage');
const sessionStorageBase = new StorageBase('sessionStorage');
export { localStorageBase, sessionStorageBase };
