/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** utils */
import { FONT_SIZE, ICON_SIZE, themeObject, Z_INDEX } from '@module-theme/constants';

type FontSizeType = typeof FONT_SIZE;
type IconSizeType = typeof ICON_SIZE;
type ZIndexType = typeof Z_INDEX;
type ThemeType = {
    fontSize: FontSizeType;
    iconSize: IconSizeType;
    zIndex: ZIndexType;
};
type ThemeModeType = keyof typeof themeObject;
type ThemeObjectType = Readonly<{ [key in ThemeModeType]: key }>;
type ThemeContextProps = {
    mode: ThemeModeType;
    theme: ThemeType;
    toggleTheme: (value: ThemeModeType) => void;
};

declare module 'styled-components' {
    export type DefaultTheme = ThemeType;
}

export type { ThemeContextProps, FontSizeType, IconSizeType, ZIndexType, ThemeType, ThemeModeType, ThemeObjectType };
