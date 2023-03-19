/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { emptyArray } from '@module-base/constants';

type Props = {
    storeName: 'localStorage' | 'sessionStorage';
};

class StorageBase {
    constructor(props: Props) {
        this.storeName = props.storeName;
    }
    private storeName;

    get = (key: string) => window[this.storeName].getItem(key);
    getList = (keys: string[] = emptyArray) => {
        const results: Record<string, any> = {};
        keys.forEach((key) => {
            results[key] = this.get(key);
        });
        return results;
    };

    set = (key: string, data: string) => {
        window[this.storeName].setItem(key, data);
        return true;
    };
    setList = (keys: string[] = emptyArray, data: any[] = emptyArray) => {
        keys.forEach((key, index) => {
            this.set(key, data[index]);
        });
        return true;
    };

    remove = (key: string) => {
        window[this.storeName].removeItem(key);
        return true;
    };
    removeList = (keys: string[] = emptyArray) => {
        keys.forEach((key) => {
            this.remove(key);
        });
        return true;
    };

    clearAll = () => {
        window[this.storeName].clear();
        return true;
    };
    clearAllButSkipForKeys = (keys: string[] = emptyArray) => {
        const dataSkip = this.getList(keys);
        this.clearAll();
        this.setList(keys, Object.values(dataSkip));
        return true;
    };
}

const localStorageBase = new StorageBase({ storeName: 'localStorage' });
const sessionStorageBase = new StorageBase({ storeName: 'sessionStorage' });
export { localStorageBase, sessionStorageBase };
