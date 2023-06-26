/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createMessageIntl } from '@module-base/utils';

const EN_USER = {
    'module.user.lang': 'Language',
    'module.user.lang.vi': 'Vietnamese',
    'module.user.lang.en': 'English',
} as const;

const VI_USER = {
    'module.user.lang': 'Ngôn ngữ',
    'module.user.lang.vi': 'Tiếng Việt',
    'module.user.lang.en': 'Tiếng Anh',
} as const;

const userMessage = createMessageIntl(VI_USER);

export { userMessage, EN_USER, VI_USER };
