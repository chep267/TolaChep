/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { parseMessageToDefineIntlMessage } from '@module-base/utils';

export const EN_GLOBAL = {
    'module.global.lang': 'Language',
    'module.global.lang.vi': 'Vietnamese',
    'module.global.lang.en': 'English',
} as const;

export const VI_GLOBAL = {
    'module.global.lang': 'Ngôn ngữ',
    'module.global.lang.vi': 'Tiếng Việt',
    'module.global.lang.en': 'Tiếng Anh',
} as const;

export const globalMessage = parseMessageToDefineIntlMessage(VI_GLOBAL);
