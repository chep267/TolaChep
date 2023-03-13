/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { parseMessageToDefineIntlMessage } from '@module-base/utils';

export const EN_THEME = {
    'module.theme.theme': 'Theme',
    'module.theme.theme.light': 'Light',
    'module.theme.theme.purple': 'Purple',
    'module.theme.theme.dark': 'Dark',
    'module.theme.theme.system': 'System',
} as const;

export const VI_THEME = {
    'module.theme.theme': 'Giao diện',
    'module.theme.theme.light': 'Sáng',
    'module.theme.theme.purple': 'Cá tính',
    'module.theme.theme.dark': 'Tối',
    'module.theme.theme.system': 'Hệ thống',
} as const;

export const themeMessage = parseMessageToDefineIntlMessage(VI_THEME);
