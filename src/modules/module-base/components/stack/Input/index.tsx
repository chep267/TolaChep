/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useRef, useCallback, useEffect, useState, ChangeEvent, RefObject } from 'react';

/** components */
import { Container, Input, Layer, LayerIcon, Placeholder } from './Styles';

/** utils */
import OPEN from '@module-base/assets/images/eye-mo.png';
import CLOSE from '@module-base/assets/images/eye-dong.png';
import { emptyFunction } from '@module-base/constants';

interface InputProps {
    value?: string;
    placeholder?: string;
    isRequire?: boolean;
    isError?: boolean;
    isAutoFocus?: boolean;
    isSecureText?: boolean;
    isDisabled?: boolean;
    onChange?(value: string): void;
}

export default function InputComponent(props: InputProps) {
    const {
        value = '',
        onChange = emptyFunction,
        placeholder = 'Aa...',
        isRequire = false,
        isAutoFocus = false,
        isError = false,
        isSecureText = false,
        isDisabled = false,
    } = props;

    const [getSecureText, setSecureText] = useState(isSecureText);
    const inputRef: RefObject<HTMLInputElement> = useRef(null);

    useEffect(() => {
        if (isError) onClickFocus();
    }, [isError]);

    useEffect(() => {
        if (inputRef && inputRef.current && value) {
            inputRef.current.focus();
            inputRef.current.selectionStart = inputRef.current.selectionEnd = inputRef.current.value.length;
        }
    }, [getSecureText]);

    const onClickFocus = useCallback(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef.current]);

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

    const onChangeLayer = useCallback(() => setSecureText((value) => !value), []);

    return (
        <Container isError={isError}>
            <Input
                ref={inputRef}
                autoFocus={isAutoFocus}
                type={getSecureText ? 'password' : 'text'}
                defaultValue={value}
                onChange={onChangeValue}
                spellCheck="false"
                disabled={isDisabled}
            />
            <Placeholder onClick={onClickFocus} visible={value === ''}>
                {`${placeholder} ${isRequire ? '*' : ''}`}
            </Placeholder>
            <Layer onClick={onChangeLayer} visible={isSecureText}>
                <LayerIcon src={getSecureText ? OPEN : CLOSE} alt={'eye'} />
            </Layer>
        </Container>
    );
}
