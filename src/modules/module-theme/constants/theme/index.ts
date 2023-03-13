/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { FONT_SIZE } from '@module-theme/constants/fontSize';
import { ICON_SIZE } from '@module-theme/constants/iconSize';
import { Z_INDEX } from '@module-theme/constants/zIndex';
import { LIGHT_COLOR, DARK_COLOR, PURPLE_COLOR } from '@module-theme/constants/color';
import { TYPE_MODE_THEME, TYPE_THEME } from '@module-theme/utils';

export const DARK_THEME = 'dark' as const;
export const PURPLE_THEME = 'purple' as const;
export const LIGHT_THEME = 'light' as const;

export const themes: {
    [key in TYPE_MODE_THEME]: TYPE_THEME;
} = {
    [LIGHT_THEME]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: LIGHT_COLOR,
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [PURPLE_THEME]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: PURPLE_COLOR,
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [DARK_THEME]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: DARK_COLOR,
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },
};
