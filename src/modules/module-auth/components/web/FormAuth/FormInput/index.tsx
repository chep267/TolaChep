/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import type { FormItemProps } from 'antd/es/form/FormItem';
import type { InputProps, InputRef } from 'rc-input/lib/interface';

type Props = {
    resetStatus?: () => void;
};

const FormInput = React.forwardRef((props: Props & FormItemProps & InputProps, forwardRef) => {
    const { name, hasFeedback, rules, type, autoFocus, resetStatus, validateStatus, help, ...inputProps } = props;
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
                    addonBefore={<LockOutlined className="site-form-item-icon" />}
                    {...inputProps}
                />
            ) : (
                <Input
                    ref={inputRef}
                    size="large"
                    type={type}
                    value={value}
                    allowClear
                    onChange={onChange}
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    {...inputProps}
                />
            )}
        </Form.Item>
    );
});

FormInput.displayName = 'FormInput';
export default FormInput;
