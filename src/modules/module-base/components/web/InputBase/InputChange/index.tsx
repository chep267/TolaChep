/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** components */
import { SearchOutlined } from '@ant-design/icons';
import InputBase from '../Input';

/** constants */
import { emptyFunction } from '@module-base/constants';

/** utils */
import { baseMessage } from '@module-base/utils';

/** types */
import type { ForwardedRef } from 'react';
import type { InputChangeProps, InputChangeRef, InputBaseRef } from '@module-base/models';

const InputChange = React.forwardRef((props: InputChangeProps, ref: ForwardedRef<InputChangeRef>) => {
    const {
        onChangeValue = emptyFunction,
        onLoading = emptyFunction,
        placeholder,
        prefix,
        mode,
        timing = mode === 'search' ? 300 : 0,
        ...inputProps
    } = props;
    const { formatMessage } = useIntl();

    const inputRef = React.useRef<InputBaseRef>(null);
    const prevValue = React.useRef('');
    const [value, setValue] = React.useState('');

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
        const nextValue = value.trim();
        if (nextValue === '') {
            onChangeValue(nextValue);
        } else if (nextValue !== prevValue.current) {
            prevValue.current = nextValue;
            if (timing > 0) {
                // xử lý loading khi bắt đầu nhập text
                onLoading(true);

                timeout = setTimeout(() => {
                    onChangeValue(nextValue);
                }, timing);
            } else {
                onChangeValue(nextValue);
            }
        }
        prevValue.current = nextValue;
        return () => clearTimeout(timeout);
    }, [value]);

    React.useImperativeHandle(
        ref,
        () =>
            ({
                ...inputRef.current,
                clear: () => setValue(''),
            }) as InputChangeRef,
        [inputRef]
    );

    const placeholderCustom =
        placeholder ||
        (mode === 'search' ? formatMessage(baseMessage[`module.base.component.input.search.placeholder`]) : undefined);

    const prefixCustom = React.useMemo(() => prefix || (mode === 'search' ? <SearchOutlined /> : undefined), [prefix, mode]);

    return (
        <InputBase
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            prefix={prefixCustom}
            placeholder={placeholderCustom}
            {...inputProps}
        />
    );
});

InputChange.displayName = 'InputChange';
export default React.memo(InputChange);
