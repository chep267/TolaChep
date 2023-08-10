/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import styled from 'styled-components';
import { Form, Button } from 'antd';
import { FlexBase } from '@module-theme/constants';

const FormAuth = styled.div<{ $colorBg: string }>((props) => {
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
        backgroundColor: props.$colorBg,
        zIndex: props.theme.zIndex.layout,
        ...styleForm,
    };
});

const FormWrap = styled(Form)`
    width: 100%;
    height: 100%;
`;

const ButtonSubmit = styled(Button)`
    float: right;
    min-width: 100px;
    margin-left: 10px;
`;

export { FormAuth, FormWrap, ButtonSubmit };
export { default as FormFooter } from './FormFooter';
export { default as FormMenu } from './FormMenu';
