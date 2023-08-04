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
import type { TextBaseProps } from '@module-base/models';

function TextBase(props: TextBaseProps) {
    const { className, message, messageOption, textProps } = props;
    const { formatMessage } = useIntl();

    return (
        <Text className={className} {...textProps}>
            {formatMessage(message, messageOption)}
        </Text>
    );
}

export default TextBase;
