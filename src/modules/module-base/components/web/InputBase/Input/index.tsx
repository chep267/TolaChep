/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

/** components */
import { Input } from 'antd';

/** utils */
import { baseMessage } from '@module-base/utils';

/** types */
import type { ForwardRefExoticComponent, RefAttributes, ForwardedRef } from 'react';
import type { InputBaseProps, InputBaseRef } from '@module-base/models';

/** styles */
const InputBaseElement: ForwardRefExoticComponent<InputBaseProps & RefAttributes<InputBaseRef>> = styled(Input)`
    width: 100%;
    border-radius: 6px;
`;

const InputBase = React.forwardRef((props: InputBaseProps, ref: ForwardedRef<InputBaseRef>) => {
    const { placeholder, ...inputProps } = props;
    const { formatMessage } = useIntl();

    const placeholderCustom = placeholder || formatMessage(baseMessage['module.base.component.input.change.placeholder']);

    return <InputBaseElement ref={ref} placeholder={placeholderCustom} spellCheck={false} allowClear {...inputProps} />;
});

InputBase.displayName = 'InputBase';
export default InputBase;
