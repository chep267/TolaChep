/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { VI_BASE, EN_BASE } from '@module-base/utils';
import { VI_GLOBAL, EN_GLOBAL } from '@module-global/utils';
import { VI_LANG, EN_LANG } from '@module-language/utils';
import { VI_THEME, EN_THEME } from '@module-theme/utils';
import { VI_ERROR, EN_ERROR } from '@module-error/utils';
import { VI_AUTH, EN_AUTH } from '@module-auth/utils';
import { VI_USER, EN_USER } from '@module-user/utils';
import { localeObject } from '@module-language/constants';

/** types */
import type { MessagesType } from '@module-language/utils';

export const messages: MessagesType = {
    [localeObject.vi]: Object.assign({}, VI_BASE, VI_GLOBAL, VI_LANG, VI_THEME, VI_ERROR, VI_AUTH, VI_USER),
    [localeObject.en]: Object.assign({}, EN_BASE, EN_GLOBAL, EN_LANG, EN_THEME, EN_ERROR, EN_AUTH, EN_USER),
};
