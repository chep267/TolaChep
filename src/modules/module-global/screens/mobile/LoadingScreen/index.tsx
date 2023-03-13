/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** utils */
import Naruto from '@module-base/assets/images/nrt.jpg';
import { FlexBase } from '@module-theme/constants';

const Container = styled.div(({ theme }) => ({
    ...FlexBase,
    width: '100vw',
    height: '100vh',
    // backgroundColor: theme.color.background.main,

    img: {
        width: window.isMobile ? '94vw' : 490,
        height: 'auto',
        borderRadius: '50%',
    },
}));

// Man hinh loading:
export default function LoadingScreen() {
    return (
        <Container>
            <img alt="loading" src={Naruto} />
        </Container>
    );
}
