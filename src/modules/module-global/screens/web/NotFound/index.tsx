/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** logo */
import NF404 from '@module-base/assets/images/404.jpg';

/** constants */
import { FlexBase } from '@module-theme/constants';
import { AppSizeCustom } from '@module-global/constants';

const NotFoundView = styled.div({
    ...FlexBase,
    width: '100%',
    height: '100%',
    padding: 10,

    img: {
        borderRadius: 8,
        objectFit: 'fill',
        width: '100%',
        height: '100%',
        maxHeight: `calc(100vh - ${AppSizeCustom.global.headerHeight + 16}px)`,
    },
});

export default function NotFoundScreen() {
    return (
        <NotFoundView>
            <img src={NF404} alt="404" />
        </NotFoundView>
    );
}
