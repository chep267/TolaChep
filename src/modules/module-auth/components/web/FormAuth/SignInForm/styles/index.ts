/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import styled from 'styled-components';
import { Form, Button } from 'antd';

export const FormStyle = styled(Form)(({ theme }) => ({
    width: '100%',
    height: '100%',
}));

export const ButtonSubmit = styled(Button)(({ theme }) => ({
    float: 'right',
    minWidth: 100,
}));
