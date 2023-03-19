/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { TypeColor, FONT_SIZE_TYPE, ICON_SIZE_TYPE, Z_INDEX_TYPE } from '@module-theme/constants';

export interface TypeTheme {
    color: TypeColor;
    fontSize: FONT_SIZE_TYPE;
    iconSize: ICON_SIZE_TYPE;
    zIndex: Z_INDEX_TYPE;
}

export type TypeModeTheme = 'light' | 'dark' | 'purple';
export type TypeThemeObject = Readonly<{ [key in TypeModeTheme]: key }>;

declare module 'styled-components' {
    export interface DefaultTheme extends TypeTheme {}
}
