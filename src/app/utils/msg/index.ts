/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

/** utils */
import { VI_BASE, EN_BASE } from '@module-base/utils';
import { VI_GLOBAL, EN_GLOBAL } from '@module-global/utils';
import { VI_LANG, EN_LANG, TYPE_MESSAGES } from '@module-language/utils';
import { VI_THEME, EN_THEME } from '@module-theme/utils';
import { VI_ERROR, EN_ERROR } from '@module-error/utils';
import { VI_AUTH, EN_AUTH } from '@module-auth/utils';
import { VI_USER, EN_USER } from '@module-user/utils';

export const messages: TYPE_MESSAGES = {
    VI: Object.assign({}, VI_BASE, VI_GLOBAL, VI_LANG, VI_THEME, VI_ERROR, VI_AUTH, VI_USER),
    EN: Object.assign({}, EN_BASE, EN_GLOBAL, EN_LANG, EN_THEME, EN_ERROR, EN_AUTH, EN_USER),
};
