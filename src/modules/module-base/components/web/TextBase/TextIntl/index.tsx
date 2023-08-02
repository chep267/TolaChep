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
import type { TextProps } from 'antd/es/typography/Text';
import type { TextIntlProps } from '@module-base/models';

function TextIntl(props: TextIntlProps & TextProps) {
    const { message, messageOption, ...textProps } = props;
    const { formatMessage } = useIntl();
    return <Text {...textProps}>{formatMessage(message, messageOption)}</Text>;
}

export default TextIntl;
