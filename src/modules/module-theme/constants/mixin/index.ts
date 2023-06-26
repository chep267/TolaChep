/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** constants */
import { FONT_SIZE, LIGHT_HEIGHT } from '@module-theme/constants/fontSize';
import { emptyObject } from '@module-base/constants';

/** types */
import type { CSSObject } from 'styled-components';

const getMixinTextStyle = (type: keyof typeof FONT_SIZE, isBold = false): CSSObject => ({
    fontWeight: isBold ? 600 : 400,
    fontSize: FONT_SIZE[type],
    lineHeight: LIGHT_HEIGHT[type],
});

const FlexBase: CSSObject = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
};

const FlexCustom = (Style: CSSObject = emptyObject) => ({
    ...FlexBase,
    ...Style,
});

const BorderRadiusCustom = (value: CSSObject['borderRadius']) => ({
    borderRadius: value,
    WebkitBorderTopLeftRadius: value,
    MozBorderRadius: value,
});

const BorderRadiusTopAndBottomCustom = (top: CSSObject['borderRadius'] = 0, bottom: CSSObject['borderRadius'] = 0) => ({
    borderTopLeftRadius: top,
    borderTopRightRadius: top,
    borderBottomLeftRadius: top || bottom,
    borderBottomRightRadius: top || bottom,

    WebkitBorderTopLeftRadius: top,
    WebkitBorderTopRightRadius: top,
    WebkitBorderBottomLeftRadius: top || bottom,
    WebkitBorderBottomRightRadius: top || bottom,
});

export { getMixinTextStyle, FlexBase, FlexCustom, BorderRadiusCustom, BorderRadiusTopAndBottomCustom };
