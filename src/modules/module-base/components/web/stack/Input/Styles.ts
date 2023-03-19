/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import { FlexCustom, FlexBase, BorderRadiusCustom } from '@module-theme/constants';

export const Container = styled.div<{ isError: boolean }>(({ isError }) => ({
    ...FlexCustom({ justifyContent: 'flex-start' }),
    ...BorderRadiusCustom(6),
    width: '80%',
    padding: '5px 10px',
    marginTop: 10,
    border: isError ? '2px solid #c80000' : '1px solid #000000',
}));

export const Input = styled.input({
    ...FlexBase,
    marginRight: 15,
    marginLeft: 2,
    fontSize: 25,
    flexGrow: 1,
    flexShrink: 1,
    height: 50,
    fontFamily: 'SegoeUI-Regular, serif',
    border: 'none',
    outlineWidth: 0,
    appearance: 'menulist-button',
    backgroundImage: 'none',
    backgroundColor: 'unset',
});

export const Layer = styled.div<{ visible: boolean }>(({ visible }) => ({
    ...FlexCustom({ display: visible ? 'flex' : 'none', height: 50, opacity: 0.25 }),
    ...BorderRadiusCustom(8),
    transition: 'all 0.5s ease',
    ':hover': {
        opacity: 1,
    },
}));

export const LayerIcon = styled.img({
    ...BorderRadiusCustom('50%'),
    width: 50,
    height: 50,
    cursor: 'pointer',
});

export const Placeholder = styled.span<{ visible: boolean }>(({ visible }) => ({
    display: visible ? 'flex' : 'none',
    position: 'absolute',
    marginLeft: 6,
    color: '#f2761c',
    zIndex: 999,
}));
