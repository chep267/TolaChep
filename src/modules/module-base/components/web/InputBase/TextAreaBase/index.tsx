/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { forwardRef } from 'react';
import styled from 'styled-components';

/** components */
import { Input } from 'antd';
import { getTextIntl } from '@module-base/components/web';

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

const TextAreaBase = forwardRef((props: TextAreaBaseProps, ref: ForwardedRef<TextAreaBaseRef>) => {
    const { placeholder, ...inputProps } = props;

    const placeholderCustom =
        placeholder || getTextIntl({ message: baseMessage['module.base.component.input.change.placeholder'] });

    return <TextAreaBaseElem ref={ref} spellCheck={false} placeholder={placeholderCustom} allowClear {...inputProps} />;
});

TextAreaBase.displayName = 'TextAreaBase';
export type { TextAreaBaseRef, TextAreaBaseProps };
export default TextAreaBase;
