/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_GLOBAL = Object.freeze({
    'module.global.lang': 'Language',
    'module.global.lang.vi': 'Vietnamese',
    'module.global.lang.en': 'English',
});

export const VI_GLOBAL = Object.freeze({
    'module.global.lang': 'Ngôn ngữ',
    'module.global.lang.vi': 'Tiếng Việt',
    'module.global.lang.en': 'Tiếng Anh',
});

export const globalMessage = createMessageIntl(VI_GLOBAL);
