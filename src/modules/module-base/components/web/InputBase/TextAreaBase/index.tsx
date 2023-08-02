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
import type { TextAreaProps, InputRef } from 'antd/es/input';

type TextAreaBaseRef = InputRef;
type TextAreaBaseProps = TextAreaProps;

/** styles */
const TextAreaBaseElem: ForwardRefExoticComponent<TextAreaBaseProps & RefAttributes<TextAreaBaseRef>> = styled(
    Input.TextArea
)`
    width: 100%;
    border-radius: 6px;
`;

const TextAreaBase = React.forwardRef((props: TextAreaBaseProps, ref: ForwardedRef<TextAreaBaseRef>) => {
    const { placeholder, ...inputProps } = props;
    const { formatMessage } = useIntl();

    const placeholderCustom = placeholder || formatMessage(baseMessage['module.base.component.input.change.placeholder']);

    return <TextAreaBaseElem ref={ref} spellCheck={false} placeholder={placeholderCustom} allowClear {...inputProps} />;
});

TextAreaBase.displayName = 'TextAreaBase';
export type { TextAreaBaseRef, TextAreaBaseProps };
export default TextAreaBase;
