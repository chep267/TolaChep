/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createMessageIntl } from '@module-base/utils';

const EN_GLOBAL = {
    'module.global.lang': 'Language',
    'module.global.lang.vi': 'Vietnamese',
    'module.global.lang.en': 'English',
} as const;

const VI_GLOBAL = {
    'module.global.lang': 'Ngôn ngữ',
    'module.global.lang.vi': 'Tiếng Việt',
    'module.global.lang.en': 'Tiếng Anh',
} as const;

const globalMessage = createMessageIntl(VI_GLOBAL);

export { globalMessage, VI_GLOBAL, EN_GLOBAL };
