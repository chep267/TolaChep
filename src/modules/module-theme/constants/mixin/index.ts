/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { CSSObject } from 'styled-components';

export * from './Text';

export const FlexBase: CSSObject = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
};

export const FlexCustom = (Style: CSSObject = {}) => ({
    ...FlexBase,
    ...Style,
});

export const BorderRadiusCustom = (value: number | string = 0) => ({
    borderRadius: value,
    WebkitBorderTopLeftRadius: value,
    MozBorderRadius: value,
});

export const BorderRadiusTopAndBottomCustom = (top: number | string = 0, bottom: number | string = 0) => ({
    borderTopLeftRadius: top,
    borderTopRightRadius: top,
    borderBottomLeftRadius: top || bottom,
    borderBottomRightRadius: top || bottom,

    WebkitBorderTopLeftRadius: top,
    WebkitBorderTopRightRadius: top,
    WebkitBorderBottomLeftRadius: top || bottom,
    WebkitBorderBottomRightRadius: top || bottom,
});
