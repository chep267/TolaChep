/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

const useTimer = ({ timer = 0 }) => {
    const [isTiming, setTiming] = React.useState(true);

    React.useEffect(() => {
        const Timer = setTimeout(() => {
            setTiming(false);
        }, timer);
        return () => {
            clearTimeout(Timer);
        };
    }, []);

    return {
        isTiming,
    };
};

export { useTimer };
