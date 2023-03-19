/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_LANG = Object.freeze({
    'module.language.lang': 'Language',
    'module.language.lang.vi': 'Vietnamese',
    'module.language.lang.en': 'English',
});

export const VI_LANG = Object.freeze({
    'module.language.lang': 'Ngôn ngữ',
    'module.language.lang.vi': 'Tiếng Việt',
    'module.language.lang.en': 'Tiếng Anh',
});

export const langMessage = createMessageIntl(VI_LANG);
