/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { parseMessageToDefineIntlMessage } from '@module-base/utils';

export const EN_USER = {
    'module.user.lang': 'Language',
    'module.user.lang.vi': 'Vietnamese',
    'module.user.lang.en': 'English',
} as const;

export const VI_USER = {
    'module.user.lang': 'Ngôn ngữ',
    'module.user.lang.vi': 'Tiếng Việt',
    'module.user.lang.en': 'Tiếng Anh',
} as const;

export const userMessage = parseMessageToDefineIntlMessage(VI_USER);
