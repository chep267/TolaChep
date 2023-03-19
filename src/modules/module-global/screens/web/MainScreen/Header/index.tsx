/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';

/** components */
import IconsBase from '@module-base/components/IconBase';
import MenuHeader from '@module-global/screens/web/MainScreen/Header/MenuHeader';
import { AppName } from '@module-global/components/web';

const { Header } = Layout;

const HeaderLayout = styled(Header)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        height: var(--HEADER_HEIGHT);
        min-height: var(--HEADER_HEIGHT);
        max-height: var(--HEADER_HEIGHT);
        overflow: hidden;
    }
`;

const Left = styled.div`
    display: flex;
    flex: 1 1 30%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    span {
        margin-left: 10px;
        width: 100%;
        font-weight: bold;
        font-size: 20px;
    }
`;

const Right = styled.div`
    display: flex;
    flex: 1 1 30%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

const TolaHeader: React.FC = () => {
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    return (
        <HeaderLayout style={{ backgroundColor: colorBgElevated }}>
            <Left>
                <IconsBase name="logoApp" />
                <AppName />
            </Left>
            <Right>
                <MenuHeader />
            </Right>
        </HeaderLayout>
    );
};

export default TolaHeader;
