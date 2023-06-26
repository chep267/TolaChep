/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import styled from 'styled-components';
import { FlexBase } from '@module-theme/constants';

export const Container = styled.button(({ theme }) => ({
    ...FlexBase,
    border: 'none',
    cursor: 'pointer',
    outline: 'none',

    span: {
        fontSize: theme.fontSize.base,
    },

    svg: {
        position: 'relative',
    },
}));
