/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { MessageDescriptor } from '@formatjs/intl/src/types';
import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';

type TextIntlProps = {
    message: MessageDescriptor;
    messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
};

export function getTextIntl(props: TextIntlProps) {
    const { message, messageOption } = props;
    const intl = useIntl();
    return intl.formatMessage(message, messageOption);
}

export default function TextIntl(props: TextIntlProps & TextProps) {
    const { message, messageOption, ...spanProps } = props;
    return <Typography.Text {...spanProps}>{getTextIntl({ message, messageOption })}</Typography.Text>;
}
