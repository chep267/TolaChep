/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { useEffect, useState } from 'react';
import { sessionStorageBase } from '../storages';

const onChange = (key, value = '') => {
    sessionStorageBase.set(key, value);
    window.dispatchEvent(new Event(key));
};

export default function useValue(key = '') {
    const [value, setValue] = useState(() => sessionStorageBase.get(key));

    useEffect(() => {
        const listener = () => {
            const id = sessionStorageBase.get(key);
            if (value !== id) {
                setValue(id);
            }
        };

        window.addEventListener(key, listener);

        return () => {
            window.removeEventListener(key, listener);
        };
    }, [key, value]);

    return [value, onChange];
}
