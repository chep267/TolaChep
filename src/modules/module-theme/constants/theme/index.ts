/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { FONT_SIZE } from '@module-theme/constants/fontSize';
import { ICON_SIZE } from '@module-theme/constants/iconSize';
import { Z_INDEX } from '@module-theme/constants/zIndex';
import { LIGHT_COLOR, DARK_COLOR, PURPLE_COLOR } from '@module-theme/constants/color';
import { TypeTheme, TypeThemeObject, TypeModeTheme } from '@module-theme/utils';

export const themeObject: TypeThemeObject = Object.freeze({
    light: 'light',
    dark: 'dark',
    purple: 'purple',
});

export const themes: {
    [key in TypeModeTheme]: TypeTheme;
} = {
    [themeObject.light]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: LIGHT_COLOR,
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [themeObject.purple]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: PURPLE_COLOR,
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [themeObject.dark]: {
        // Bộ màu cơ bản cung cấp sẵn dùng
        color: DARK_COLOR,
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },
};
