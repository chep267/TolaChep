import styled from 'styled-components';
import { Form, Input, Button, Checkbox, InputRef } from 'antd';

import { SafeLayout } from '@module-base/components/web/Layout';
import { FlexBase } from '@module-theme/constants';

/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

export const FormStyle = styled(Form)(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
    float: 'right',
    minWidth: 100,
}));
