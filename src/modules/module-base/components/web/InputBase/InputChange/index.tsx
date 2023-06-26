/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle, memo } from 'react';

/** components */
import { SearchOutlined } from '@ant-design/icons';
import InputBase from '../Input';
import { getTextIntl } from '@module-base/components/web';

/** utils */
import { emptyFunction } from '@module-base/constants';
import { baseMessage } from '@module-base/utils';

/** types */
import type { ForwardedRef } from 'react';
import type { InputBaseRef, InputBaseProps } from '../Input';

interface InputChangeProps extends InputBaseProps {
    mode?: 'change' | 'search';
    timing?: number;
    onChangeValue?(value: string): void;
    onLoading?(loading: boolean): void;
}
interface InputChangeRef extends InputBaseRef {
    clear(): void;
}

const InputChange = forwardRef((props: InputChangeProps, ref: ForwardedRef<InputChangeRef>) => {
    const {
        onChangeValue = emptyFunction,
        onLoading = emptyFunction,
        placeholder,
        prefix,
        mode,
        timing = mode === 'search' ? 300 : 0,
        ...inputProps
    } = props;

    const inputRef = useRef<InputRef>(null);
    const prevValue = useRef('');
    const [value, setValue] = useState('');

    useEffect(() => {
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

    useImperativeHandle(
        ref,
        () =>
            ({
                ...inputRef.current,
                clear: () => setValue(''),
            } as InputChangeRef),
        [inputRef]
    );

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value || '';
        setValue(text);
    };

    const placeholderCustom =
        placeholder ||
        (mode === 'search'
            ? getTextIntl({
                  message: baseMessage[`module.base.component.input.search.placeholder`],
              })
            : undefined);

    const prefixCustom = useMemo(() => prefix || (mode === 'search' ? <SearchOutlined /> : undefined), [prefix, mode]);

    return (
        <InputBase
            ref={inputRef}
            value={value}
            onChange={onChange}
            prefix={prefixCustom}
            placeholder={placeholderCustom}
            {...inputProps}
        />
    );
});

InputChange.displayName = 'InputChange';
export type { InputChangeProps, InputChangeRef };
export default memo(InputChange);
