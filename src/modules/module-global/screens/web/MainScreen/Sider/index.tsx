/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';
import { comparePure } from '@module-base/constants';

import MenuApp from '@module-global/screens/web/MainScreen/Sider/MenuApp';

const { Sider } = Layout;

const SiderLayout = styled(Sider)`
    &&& {
        position: sticky;
        height: calc(100vh - var(--HEADER_HEIGHT));
        min-height: calc(100vh - var(--HEADER_HEIGHT));
        max-height: calc(100vh - var(--HEADER_HEIGHT));
        overflow: hidden auto;
    }
`;

const TolaSider = React.memo(() => {
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <SiderLayout
            style={{ backgroundColor: colorBgElevated }}
            width={300}
            breakpoint="md"
            collapsedWidth="70"
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}>
            <MenuApp />
        </SiderLayout>
    );
}, comparePure());

export default TolaSider;
