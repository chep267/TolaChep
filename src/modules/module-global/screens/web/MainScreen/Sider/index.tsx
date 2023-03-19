/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';

/** components */
import { MenuApp } from '@module-global/components/web';

/** utils */
import { comparePure } from '@module-base/constants';

const { Sider } = Layout;

const SiderLayout = styled(Sider)`
    &&& {
        position: sticky;
        height: calc(100vh - var(--HEADER_HEIGHT));
        min-height: calc(100vh - var(--HEADER_HEIGHT));
        max-height: calc(100vh - var(--HEADER_HEIGHT));
        overflow: hidden auto;
        overscroll-behavior: none;
    }
`;

const TolaSider = React.memo(() => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <SiderLayout
            width={250}
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
