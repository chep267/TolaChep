/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';

/** components */
import { IconBase } from '@module-base/components/web';
import { AppName, MenuHeader } from '@module-global/components/web';

const { Header } = Layout;

const HeaderLayout = styled(Header)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        height: var(--header-height);
        min-height: var(--header-height);
        max-height: var(--header-height);
        overflow: hidden;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        z-index: 999;
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
                <IconBase name="logoApp" />
                <AppName />
            </Left>
            <Right>
                <MenuHeader />
            </Right>
        </HeaderLayout>
    );
};

export default TolaHeader;
