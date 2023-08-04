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

/** constants */
import { AppSizeCustom } from '@module-global/constants';
import { comparePure } from '@module-base/constants';

/** types */
import type { BasicProps } from 'antd/es/layout/layout';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

/** components */
const { Header } = Layout;
const HeaderLayout: ForwardRefExoticComponent<BasicProps & { $colorBG: string } & RefAttributes<HTMLElement>> = styled(
    Header
)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        background-color: ${(props) => props.$colorBG};
        top: 0;
        height: ${AppSizeCustom.global.headerHeight}px;
        min-height: ${AppSizeCustom.global.headerHeight}px;
        max-height: ${AppSizeCustom.global.headerHeight}px;
        padding-inline: 25px;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        z-index: 999;
        overflow: hidden;
    }
`;
const Left = styled.div`
    display: flex;
    flex: 1 1 30%;
    height: 100%;
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
    height: 100%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

const TolaHeader = React.memo(() => {
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    return (
        <HeaderLayout $colorBG={colorBgElevated}>
            <Left>
                <IconBase name="logoApp" />
                <AppName />
            </Left>
            <Right>
                <MenuHeader />
            </Right>
        </HeaderLayout>
    );
}, comparePure());

TolaHeader.displayName = 'TolaHeader';
export default TolaHeader;
