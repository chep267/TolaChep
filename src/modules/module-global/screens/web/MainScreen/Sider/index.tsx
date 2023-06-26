/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Layout, theme } from 'antd';
import styled from 'styled-components';

/** components */
import { MenuApp } from '@module-global/components/web';

/** utils */
import { comparePure } from '@module-base/constants';
import { AppSizeCustom } from '@module-global/constants';

const { Sider } = Layout;

const SiderLayout = styled(Sider)`
    &&& {
        position: sticky;
        height: calc(100vh - ${AppSizeCustom.global.headerHeight}px);
        min-height: calc(100vh - ${AppSizeCustom.global.headerHeight}px);
        max-height: calc(100vh - ${AppSizeCustom.global.headerHeight}px);
        overflow: hidden auto;
        overscroll-behavior: none;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    }
`;

const TolaSider = React.memo(() => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <SiderLayout
            width={250}
            breakpoint="xl"
            collapsedWidth={AppSizeCustom.global.siderWidth.min}
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}>
            <MenuApp />
        </SiderLayout>
    );
}, comparePure());

export default TolaSider;
