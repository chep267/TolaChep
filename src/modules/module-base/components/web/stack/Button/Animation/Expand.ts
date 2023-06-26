/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { BorderRadiusCustom } from '@module-theme/constants';
import { CSSObject } from 'styled-components';

const Expand: ({
    color,
    colorChange,
    borderRadius,
    size,
}: {
    color?: string;
    colorChange?: string;
    borderRadius?: number | string;
    size?: number;
}) => CSSObject = ({ color = '#2d2c3e', colorChange = '#f0f2f5', borderRadius = '50%', size = 40 }) => ({
    ...BorderRadiusCustom(borderRadius),
    width: size,
    height: size,
    ':hover': {
        boxShadow: `inset 0 0 0 0 red`,
    },
    ':focus': {
        boxShadow: `inset 0 0 0 0 red`,
    },
});

export default Expand;
