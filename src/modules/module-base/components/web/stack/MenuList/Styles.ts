/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import styled from 'styled-components';
import { FlexCustom, FlexBase } from '@module-theme/constants';

export const List = styled.div<{ isDisabled: boolean }>(({ isDisabled }) => ({
    ...FlexCustom({ flexDirection: 'column', justifyContent: 'flex-start', display: isDisabled ? 'none' : 'flex' }),
    width: '80%',
    marginTop: 10,
    overflow: 'hidden',
    border: '0.5px solid gray',
    minWidth: 100,
    height: 'auto',
    backgroundColor: '#f0f2f5',

    'div:last-child': {
        borderBottom: 'unset',
    },
}));

export const Item = styled.div<{ height?: number | string; width?: number | string }>(({ height, width, theme }) => ({
    ...FlexBase,
    width: width || '100%',
    height,
    padding: '5px 10px',
    borderBottom: `0.5px solid gray`,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#fff',
    },
}));
