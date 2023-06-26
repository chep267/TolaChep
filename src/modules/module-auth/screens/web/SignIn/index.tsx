/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** utils */
import { FlexBase } from '@module-theme/constants';

/** components */
const ToLaParticle = React.lazy(() => import('@modules/module-base/components/web/Particles'));
const FormAuth = React.lazy(() => import('@modules/module-auth/components/web/FormAuth'));

const LayoutScreen = styled.div({
    ...FlexBase,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
});

function SignInScreen() {
    return (
        <LayoutScreen>
            <React.Suspense fallback={null}>
                <FormAuth />
            </React.Suspense>
            <React.Suspense fallback={null}>
                <ToLaParticle />
            </React.Suspense>
        </LayoutScreen>
    );
}

export default SignInScreen;
