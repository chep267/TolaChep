/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { createMessageIntl } from '@module-base/utils';

const EN_THEME = {
    'module.theme.theme': 'Theme',
    'module.theme.theme.light': 'Light',
    'module.theme.theme.purple': 'Purple',
    'module.theme.theme.dark': 'Dark',
    'module.theme.theme.system': 'System',
} as const;

const VI_THEME = {
    'module.theme.theme': 'Giao diện',
    'module.theme.theme.light': 'Sáng',
    'module.theme.theme.purple': 'Cá tính',
    'module.theme.theme.dark': 'Tối',
    'module.theme.theme.system': 'Hệ thống',
} as const;

const themeMessage = createMessageIntl(VI_THEME);

export { EN_THEME, VI_THEME, themeMessage };
