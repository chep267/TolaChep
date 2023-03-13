/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';

/** components */
import { SafeLayout } from '@module-base/components/Layout';
import AppBar from '@module-global/components/web/AppBar';
import HeaderBar from '@module-global/components/web/HeaderBar';

/** utils */
import { HEADER_HEIGHT, HEADER_PADDING, APP_BAR_WIDTH } from '@module-global/constants';

export const MainContainer = styled(SafeLayout)({
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
});

export const MainHeader = styled(HeaderBar)`
    width: calc(100vw - ${APP_BAR_WIDTH + 10 + HEADER_PADDING}px);
    height: ${HEADER_HEIGHT}px;
    max-height: ${HEADER_HEIGHT}px;
    min-height: ${HEADER_HEIGHT}px;
    padding: 0 ${HEADER_PADDING}px 0 ${APP_BAR_WIDTH + 10}px;
    box-shadow: 0 1px 6px 0 #c1c1c1;
    overflow: hidden;
    @media screen and (max-width: 565px) {
        width: calc(100vw - 2 * ${HEADER_PADDING}px);
        padding: 0 ${HEADER_PADDING}px;
    }
`;

export const MainBody = styled(SafeLayout)({
    width: '100vw',
});

export const MainSider = styled(AppBar)`
    transition: width 0.35s, min-width 0.35s, max-width 0.35s;
    overflow: hidden;
    @media screen and (max-width: 565px) {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
    }
`;

export const MainContent = styled(SafeLayout)`
    width: calc(100vw - ${APP_BAR_WIDTH}px);
    @media screen and (max-width: 565px) {
        width: 100vw;
    }
`;
