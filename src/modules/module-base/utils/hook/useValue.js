/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { useEffect, useState } from 'react';

const doChangeValue = (key, value = '') => {
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event(key));
};

export default function useValue(key = '') {
    const [value, setValue] = useState(() => window.localStorage.getItem(key));

    useEffect(() => {
        const listener = () => {
            const id = window.localStorage.getItem(key);
            if (value !== id) {
                setValue(id);
            }
        };

        window.addEventListener(key, listener);

        return () => {
            window.removeEventListener(key, listener);
        };
    }, [key, value]);

    return [value, doChangeValue];
}
