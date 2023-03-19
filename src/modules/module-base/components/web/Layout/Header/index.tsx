/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';

const Header = styled.div(({ theme }) => ({
    display: 'flex',
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    minWidth: 0,
    height: 60,
    // backgroundColor: theme.color.background.gray,
    zIndex: theme.zIndex.layout,
}));

export default Header;
