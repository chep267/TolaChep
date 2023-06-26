/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Form, Input, InputRef } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { FormItemProps } from 'antd/es/form/FormItem';
import { InputProps } from 'rc-input/lib/interface';

/** utils */
import { AuthFormErrorType } from '@module-auth/utils';
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { localStorageBase } from '@module-base/utils';
import { emailLocalKey } from '@module-global/constants';
import { Decrypt } from '@module-base/utils';

/** styles */

type Props = {
    resetStatus?: () => void;
};

const FormInput = React.forwardRef((props: Props & FormItemProps & InputProps, forwardRef) => {
    const { name, hasFeedback, rules, type, placeholder, autoFocus, resetStatus, validateStatus, help } = props;
    const inputRef: React.Ref<InputRef> = React.useRef(null);
    const [value, setValue] = React.useState('');

    React.useImperativeHandle(forwardRef, () => {
        return {
            focus: () => inputRef.current?.focus({ cursor: 'end' }),
            input: inputRef.current?.input,
        };
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        resetStatus!();
    };

    return (
        <Form.Item name={name} validateStatus={validateStatus} hasFeedback={hasFeedback} help={help} rules={rules}>
            {type === 'password' ? (
                <Input.Password
                    ref={inputRef}
                    size="large"
                    type={type}
                    value={value}
                    allowClear
                    onChange={onChange}
                    autoFocus={autoFocus}
                    addonBefore={<LockOutlined className="site-form-item-icon" />}
                    placeholder={placeholder}
                />
            ) : (
                <Input
                    ref={inputRef}
                    size="large"
                    type={type}
                    value={value}
                    allowClear
                    onChange={onChange}
                    autoFocus={autoFocus}
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder={placeholder}
                />
            )}
        </Form.Item>
    );
});

export default FormInput;
