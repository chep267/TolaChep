/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { theme } from 'antd';
import { useLocation } from 'react-router-dom';

/** components */
import { FormAuth as FormAuthElement, FormMenu } from '@module-auth/components/web/FormAuth/components';
import SignInForm from '@module-auth/components/web/FormAuth/SignInForm';
import RegisterForm from '@module-auth/components/web/FormAuth/RegisterForm';
import RecoverForm from '@module-auth/components/web/FormAuth/RecoverForm';

/** constants */
import { SCREEN } from '@module-global/constants';

export default function FormAuth() {
    const { pathname } = useLocation();
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    return (
        <FormAuthElement $colorBG={colorBgElevated}>
            <FormMenu />
            {pathname === SCREEN.SIGN_IN ? <SignInForm /> : pathname === SCREEN.REGISTER ? <RegisterForm /> : <RecoverForm />}
        </FormAuthElement>
    );
}
