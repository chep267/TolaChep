/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';
import { theme } from 'antd';
import { useLocation } from 'react-router-dom';

/** components */
import FormMenu from '@module-auth/components/web/FormAuth/FormMenu';
import SignInForm from '@module-auth/components/web/FormAuth/SignInForm';
import RegisterForm from '@module-auth/components/web/FormAuth/RegisterForm';
import RecoverForm from '@module-auth/components/web/FormAuth/RecoverForm';

/** styles */
import { SCREEN } from '@module-global/constants';
import { FlexBase } from '@module-theme/constants';

const LayoutForm = styled.div<{ colorBG: string }>((props) => {
    const styleForm = window.isMobile
        ? {
              width: 'calc(100% - 30px)',
              height: 'auto',
              padding: '20px 10px',
          }
        : {
              width: 'calc(100% - 80px)',
              maxWidth: 600,
              padding: '20px 30px',
          };
    return {
        ...FlexBase,
        height: 'auto',
        flexDirection: 'column',
        borderRadius: 12,
        backgroundColor: props.colorBG,
        zIndex: props.theme.zIndex.layout,
        ...styleForm,
    };
});

export default function FormAuth() {
    const { pathname } = useLocation();
    const {
        token: { colorBgElevated },
    } = theme.useToken();

    return (
        <LayoutForm colorBG={colorBgElevated}>
            <FormMenu />
            {pathname === SCREEN.SIGN_IN ? <SignInForm /> : pathname === SCREEN.REGISTER ? <RegisterForm /> : <RecoverForm />}
        </LayoutForm>
    );
}
