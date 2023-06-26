/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */
import { BorderRadiusCustom } from '@module-theme/constants';
import { CSSObject } from 'styled-components';

const Rounded: ({
    colorAfter,
    colorBefore,
    borderRadius,
}: {
    colorAfter?: string;
    colorBefore?: string;
    borderRadius?: number | string;
}) => CSSObject = ({ colorAfter = '#038cf5', colorBefore = '#008fb3', borderRadius = 30 }) => ({
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    ...BorderRadiusCustom(borderRadius),

    ':after': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colorAfter,
        zIndex: -2,
        ...BorderRadiusCustom(borderRadius),
    },

    ':before': {
        content: "''",
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '0%',
        height: '100%',
        backgroundColor: colorBefore,
        transition: 'all 0.3s',
        zIndex: -1,
        ...BorderRadiusCustom(borderRadius),
    },

    ':hover': {
        ':before': {
            width: '100%',
        },
    },
});

export default Rounded;
