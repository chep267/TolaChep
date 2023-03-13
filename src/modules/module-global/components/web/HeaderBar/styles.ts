/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import { FlexBase } from '@module-theme/constants';
import { Header } from '@module-base/components/Layout';
import Setting from './Setting';

export const HeaderBar = styled(Header)(() => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
}));

const Menu = styled.button(({ theme }) => ({
    ...FlexBase,
    position: 'fixed',
    top: 30,
    left: 0,
    width: 30,
    height: 30,
    zIndex: theme.zIndex.max,
    cursor: 'pointer',
    border: 'none',
    borderTopRightRadius: 10,
}));

export const BtnMenu = styled(Menu)`
    @media screen and (max-width: 559px) {
        // 60 + 10 + 480 + 10
        display: none;
    }
`;

export const BtnSetting = styled(Setting)``;
