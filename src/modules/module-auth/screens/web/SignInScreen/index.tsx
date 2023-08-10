/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { theme } from 'antd';

/** utils */
import { FlexBase } from '@module-theme/constants';

/** components */
const ToLaParticle = React.lazy(() => import('@modules/module-base/components/web/Particles'));
const FormAuth = React.lazy(() => import('@modules/module-auth/components/web/FormAuth'));

const LayoutScreen = styled.div<{ $colorBg: string }>((props) => ({
    ...FlexBase,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: props.$colorBg,
}));

function SignInScreen() {
    const {
        token: { colorBgLayout },
    } = theme.useToken();

    return (
        <LayoutScreen $colorBg={colorBgLayout}>
            <React.Suspense fallback={null}>
                <FormAuth />
                <ToLaParticle />
            </React.Suspense>
        </LayoutScreen>
    );
}

export default SignInScreen;
