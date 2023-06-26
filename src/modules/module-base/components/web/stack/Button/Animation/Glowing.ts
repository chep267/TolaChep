/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */
import { BorderRadiusCustom } from '@module-theme/constants';
import { CSSObject, keyframes, css } from 'styled-components';

const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

const animationGlowing = () =>
    css`
        ${glowing} 20s linear infinite
    `;

const Glowing: ({ background, borderRadius }: { background?: string; borderRadius?: number | string }) => CSSObject = ({
    background = 'gray',
    borderRadius = 30,
}) => ({
    color: '#fff',
    position: 'relative',
    zIndex: 0,
    background,
    ...BorderRadiusCustom(borderRadius),

    ':after': {
        zIndex: -1,
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        background,
        ...BorderRadiusCustom(borderRadius),
    },

    ':before': {
        content: "''",
        background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
        position: 'absolute',
        top: -2,
        left: -2,
        backgroundSize: '400%',
        zIndex: -1,
        filter: 'blur(5px)',
        width: 'calc(100% + 4px)',
        height: 'calc(100% + 4px)',
        animation: `${animationGlowing}`,
        opacity: 0,
        transition: 'opacity .3s ease-in-out',
        ...BorderRadiusCustom(borderRadius),
    },

    ':hover': {
        ':before': {
            opacity: 1,
        },
    },

    ':active': {
        color: '#000',
        ':after': {
            background: 'transparent',
        },
    },
});

export default Glowing;
