/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { FONT_SIZE } from '@module-theme/constants/fontSize';
import { ICON_SIZE } from '@module-theme/constants/iconSize';
import { Z_INDEX } from '@module-theme/constants/zIndex';

const themeObject = {
    light: 'light',
    dark: 'dark',
    purple: 'purple',
} as const;

const themes = {
    [themeObject.light]: {
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [themeObject.purple]: {
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },

    [themeObject.dark]: {
        zIndex: Z_INDEX,
        fontSize: FONT_SIZE,
        iconSize: ICON_SIZE,
    },
} as const;

export { themeObject, themes };
