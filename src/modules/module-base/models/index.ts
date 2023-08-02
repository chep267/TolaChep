/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { MessageDescriptor } from '@formatjs/intl/src/types';
import type { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';

type TextIntlProps = {
    message: MessageDescriptor;
    messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
};

export type { TextIntlProps };
