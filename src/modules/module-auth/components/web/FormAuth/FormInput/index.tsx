/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

/** types */
import type { FormItemProps } from 'antd/es/form/FormItem';
import type { InputProps, InputRef } from 'rc-input/lib/interface';

interface FormInputProps extends FormItemProps {
    resetStatus?: () => void;
    inputProps: InputProps;
}

const FormInput = React.forwardRef((props: FormInputProps, ref) => {
    const { name, hasFeedback, rules, resetStatus, validateStatus, help, inputProps } = props;
    const inputRef: React.Ref<InputRef> = React.useRef(null);
    const [value, setValue] = React.useState('');

    React.useImperativeHandle(ref, () => {
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
            {inputProps.type === 'password' ? (
                <Input.Password
                    ref={inputRef}
                    size="large"
                    value={value}
                    allowClear
                    onChange={onChange}
                    addonBefore={<LockOutlined className="site-form-item-icon" />}
                    autoComplete="on"
                    {...inputProps}
                />
            ) : (
                <Input
                    ref={inputRef}
                    size="large"
                    value={value}
                    allowClear
                    onChange={onChange}
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    autoComplete="on"
                    {...inputProps}
                />
            )}
        </Form.Item>
    );
});

FormInput.displayName = 'FormInput';
export default FormInput;
