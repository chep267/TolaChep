/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { emptyFunction } from '@module-base/constants';

const useCountDown = ({ numberCountDown = 10, timer = 1000, callback = emptyFunction }) => {
    const [second, setSecond] = React.useState(numberCountDown);

    React.useEffect(() => {
        const countDownEffect = () =>
            setSecond((s) => {
                const next = s - 1;
                if (next === 0) {
                    callback();
                    return 1;
                }
                return s - 1;
            });

        const Timer = setInterval(countDownEffect, timer);
        return () => {
            clearInterval(Timer);
        };
    }, []);

    return {
        second,
    };
};

export { useCountDown };
