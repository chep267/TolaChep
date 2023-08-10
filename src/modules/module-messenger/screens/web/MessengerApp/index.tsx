/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** components */
import { MessengerRight, MessengerContent, MessengerLayout, LayoutContent, ThreadList } from './components';
import { theme } from 'antd';

function MessengerScreen() {
    const {
        token: { colorBgContainerDisabled },
    } = theme.useToken();

    return (
        <MessengerLayout hasSider>
            <ThreadList $colorBg={colorBgContainerDisabled} />
            <LayoutContent>
                <MessengerContent $colorBg={colorBgContainerDisabled} />
            </LayoutContent>
            <MessengerRight $colorBg={colorBgContainerDisabled} />
        </MessengerLayout>
    );
}

export default MessengerScreen;
