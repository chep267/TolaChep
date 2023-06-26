/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

const EN_LANG = {
    'module.language.lang': 'Language',
    'module.language.lang.vi': 'Vietnamese',
    'module.language.lang.en': 'English',
} as const;

const VI_LANG = {
    'module.language.lang': 'Ngôn ngữ',
    'module.language.lang.vi': 'Tiếng Việt',
    'module.language.lang.en': 'Tiếng Anh',
} as const;

const langMessage = createMessageIntl(VI_LANG);

export { langMessage, EN_LANG, VI_LANG };
