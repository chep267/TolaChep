/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { createMessageIntl } from '@module-base/utils';

export const EN_THEME = Object.freeze({
    'module.theme.theme': 'Theme',
    'module.theme.theme.light': 'Light',
    'module.theme.theme.purple': 'Purple',
    'module.theme.theme.dark': 'Dark',
    'module.theme.theme.system': 'System',
});

export const VI_THEME = Object.freeze({
    'module.theme.theme': 'Giao diện',
    'module.theme.theme.light': 'Sáng',
    'module.theme.theme.purple': 'Cá tính',
    'module.theme.theme.dark': 'Tối',
    'module.theme.theme.system': 'Hệ thống',
});

export const themeMessage = createMessageIntl(VI_THEME);
