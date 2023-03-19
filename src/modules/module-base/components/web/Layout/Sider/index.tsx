/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import { HEADER_HEIGHT, APP_BAR_WIDTH } from '@module-global/constants';

const Sider = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    left: 0,
    bottom: 0,
    width: APP_BAR_WIDTH,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    minHeight: 0,
    // backgroundColor: theme.color.background.gray,
    zIndex: theme.zIndex.layout,
}));

export default Sider;
