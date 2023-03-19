/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_USER = Object.freeze({
    'module.user.lang': 'Language',
    'module.user.lang.vi': 'Vietnamese',
    'module.user.lang.en': 'English',
});

export const VI_USER = Object.freeze({
    'module.user.lang': 'Ngôn ngữ',
    'module.user.lang.vi': 'Tiếng Việt',
    'module.user.lang.en': 'Tiếng Anh',
});

export const userMessage = createMessageIntl(VI_USER);
