/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Space, theme } from 'antd';

/** components */
import { IconBase } from '@module-base/components/web';
import { AppName, MenuHeader } from '@module-global/components/web';
import { HeaderLayout, HeaderRight, HeaderLeft } from '../Layout';

/** constants */
import { comparePure } from '@module-base/constants';
import { User } from '@module-user/components/web';
import { useAppSelector } from '@module-global/utils';
import { getMeId } from '@module-auth/utils';

const TolaHeader = React.memo(() => {
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    const meId = useAppSelector(getMeId);

    return (
        <HeaderLayout $colorBg={colorBgElevated}>
            <HeaderLeft>
                <IconBase name="logoApp" />
                <AppName />
            </HeaderLeft>
            <HeaderRight>
                <Space>
                    <User userId={meId} />
                    <MenuHeader />
                </Space>
            </HeaderRight>
        </HeaderLayout>
    );
}, comparePure());

TolaHeader.displayName = 'TolaHeader';
export default TolaHeader;
