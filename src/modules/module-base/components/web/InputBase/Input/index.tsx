/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** components */
import { Input } from 'antd';

/** utils */
import { getTextIntl } from '@module-base/components/web';
import { baseMessage } from '@module-base/utils';

/** types */
import type { ForwardRefExoticComponent, RefAttributes, ForwardedRef } from 'react';
import type { InputProps, InputRef } from 'antd';

type InputBaseRef = InputRef;
type InputBaseProps = InputProps;

/** styles */
const InputBaseElement: ForwardRefExoticComponent<InputBaseProps & RefAttributes<InputBaseRef>> = styled(Input)`
    width: 100%;
    border-radius: 6px;
`;

const InputBase = React.forwardRef((props: InputBaseProps, ref: ForwardedRef<InputBaseRef>) => {
    const { placeholder, ...inputProps } = props;

    const placeholderCustom =
        placeholder || getTextIntl({ message: baseMessage['module.base.component.input.change.placeholder'] });

    return <InputBaseElement ref={ref} placeholder={placeholderCustom} spellCheck={false} allowClear {...inputProps} />;
});

InputBase.displayName = 'InputBase';
export type { InputBaseRef, InputBaseProps };
export default InputBase;
