/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

/** components */
import NF404 from '@module-base/assets/images/404.jpg';

const View = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    img {
        border-radius: 8px;
        width: 100%;
        height: auto;
    }
`;

export default function NotFoundScreen() {
    return (
        <View>
            <img src={NF404} alt="404" />
        </View>
    );
}
