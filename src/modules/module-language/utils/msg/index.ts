/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { parseMessageToDefineIntlMessage } from '@module-base/utils';

export const EN_LANG = {
    'module.language.lang': 'Language',
    'module.language.lang.vi': 'Vietnamese',
    'module.language.lang.en': 'English',
} as const;

export const VI_LANG = {
    'module.language.lang': 'Ngôn ngữ',
    'module.language.lang.vi': 'Tiếng Việt',
    'module.language.lang.en': 'Tiếng Anh',
} as const;

export const langMessage = parseMessageToDefineIntlMessage(VI_LANG);
