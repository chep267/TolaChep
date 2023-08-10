/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** components */
import { MenuApp } from '@module-global/components/web';
import { SiderLayout } from '../Layout';

/** constants */
import { comparePure } from '@module-base/constants';
import { AppSizeCustom } from '@module-global/constants';

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

TolaSider.displayName = 'TolaSider';
export default TolaSider;
