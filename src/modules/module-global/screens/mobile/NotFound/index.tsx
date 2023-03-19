/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

/** components */
import NF404 from '@module-base/assets/images/404.jpg';
import { SafeLayout } from '@module-base/components/web/Layout';
import { HEADER_HEIGHT, APP_BAR_WIDTH } from '@module-global/constants';

const View = styled(SafeLayout)({
    padding: 10,
    width: `calc(100vw - ${APP_BAR_WIDTH + 20}px)`,
    height: `calc(100vh - ${HEADER_HEIGHT + 20}px)`,
    img: {
        borderRadius: 8,
        width: `calc(100vw - ${APP_BAR_WIDTH + 20}px)`,
        height: `calc(100vh - ${HEADER_HEIGHT + 20}px)`,
    },
});

export default function NotFoundScreen() {
    return (
        <View>
            <img src={NF404} alt="404" />
        </View>
    );
}
