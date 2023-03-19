/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import { FlexBase } from '@module-theme/constants';

const SafeLayout = styled.div(({ theme }) => ({
    ...FlexBase,
    minWidth: 0,
    minHeight: 0,
    zIndex: theme.zIndex.cover,
}));

export default SafeLayout;
