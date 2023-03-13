/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
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
