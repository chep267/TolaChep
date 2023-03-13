/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import SafeLayout from '../SafeLayout';

const ScrollBar = styled(SafeLayout)`
    overflow-y: scroll;
    overflow-x: hidden;
    overscroll-behavior: none;
`;

export default ScrollBar;
