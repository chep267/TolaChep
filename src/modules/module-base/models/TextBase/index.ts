/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { TextProps } from 'antd/es/typography/Text';
import type { MessageDescriptor } from '@formatjs/intl/src/types';
import type { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';

type TextBaseProps = {
    className?: string;
    message: MessageDescriptor;
    messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
    textProps?: TextProps;
};

export type { TextBaseProps };
