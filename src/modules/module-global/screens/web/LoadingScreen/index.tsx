/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** constants */
import { FlexBase } from '@module-theme/constants';

/** logo */
import Naruto from '@module-base/assets/images/nrt.jpg';

const Container = styled.div(({ theme }) => ({
    ...FlexBase,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.color.particle,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: theme.zIndex.max,

    img: {
        width: window.isMobile ? '94vw' : 490,
        height: 'auto',
        borderRadius: '50%',
    },
}));

const LoadingScreen = () => (
    <Container>
        <img alt="loading" src={Naruto} />
    </Container>
);

LoadingScreen.displayName = 'LoadingScreen';
export default LoadingScreen;
