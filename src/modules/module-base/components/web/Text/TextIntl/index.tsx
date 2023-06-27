/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** components */
import Text from 'antd/es/typography/Text';

/** types */
import type { MessageDescriptor } from '@formatjs/intl/src/types';
import type { TextProps } from 'antd/es/typography/Text';

interface TextIntlProps extends TextProps {
    message: MessageDescriptor;
    messageOption?: Record<string, any>;
}

export function getTextIntl(props: Pick<TextIntlProps, 'message' | 'messageOption'>) {
    const { message, messageOption } = props;
    const { formatMessage } = useIntl();
    return formatMessage(message, messageOption);
}

function TextIntl(props: TextIntlProps & TextProps) {
    const { message, messageOption, ...textProps } = props;
    return <Text {...textProps}>{getTextIntl({ message, messageOption })}</Text>;
}

export type { TextIntlProps };
export default TextIntl;
