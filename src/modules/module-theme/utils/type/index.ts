/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { COLOR_TYPE, FONT_SIZE_TYPE, ICON_SIZE_TYPE, Z_INDEX_TYPE } from '@module-theme/constants';

export interface TYPE_THEME {
    color: COLOR_TYPE;
    fontSize: FONT_SIZE_TYPE;
    iconSize: ICON_SIZE_TYPE;
    zIndex: Z_INDEX_TYPE;
}

export type TYPE_MODE_THEME = 'light' | 'dark' | 'purple';

declare module 'styled-components' {
    export interface DefaultTheme extends TYPE_THEME {}
}
