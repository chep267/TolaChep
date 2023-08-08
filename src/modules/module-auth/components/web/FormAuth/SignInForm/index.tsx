/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { Form, Checkbox, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import { FormWrap, ButtonSubmit, FormFooter } from '@module-auth/components/web/FormAuth/components';

/** constants */
import { REGEX_PHONE, REGEX_EMAIL } from '@module-base/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { emailLocalKey } from '@module-global/constants';

/** utils */
import { authMessage } from '@module-auth/utils';
import { useAppDispatch } from '@module-global/utils';
import { Decrypt, localStorageBase } from '@module-base/utils';

/** types */
import type { InputBaseRef } from '@module-base/models';
import type { FormErrorType, FormStatusType, FormDataType } from '@module-auth/models';

const statusDefault: Omit<FormStatusType, 'passwordHill'> = {
    account: AUTH_FORM_ERROR.DEFAULT,
    password: AUTH_FORM_ERROR.DEFAULT,
};

function SignInForm() {
    const dispatch = useAppDispatch();
    const { formatMessage } = useIntl();
    const [form] = Form.useForm<FormDataType>();

    const accountRef = React.useRef<InputBaseRef>(null);
    const passwordRef = React.useRef<InputBaseRef>(null);

    const [status, setStatus] = React.useState<Omit<FormStatusType, 'passwordHill'>>(statusDefault);
    const [isSubmit, setIsSubmit] = React.useState(false);

    const onResetStatus = React.useCallback(() => setStatus(statusDefault), []);

    const onSubmit = React.useCallback((data: any) => {
        const account = `${data?.account || accountRef.current?.input?.value || ''}`.trim();
        const password = `${data?.password || passwordRef.current?.input?.value || ''}`.trim();
        const isEmail = REGEX_EMAIL.test(account);
        const isPhone = REGEX_PHONE.test(account);

        switch (true) {
            case !account || status.account === AUTH_FORM_ERROR.ACCOUNT_EMPTY: {
                accountRef.current?.focus();
                if (status.account !== AUTH_FORM_ERROR.ACCOUNT_EMPTY) {
                    setStatus({
                        account: AUTH_FORM_ERROR.ACCOUNT_EMPTY,
                        password: AUTH_FORM_ERROR.DEFAULT,
                    });
                }
                return;
            }
            case !password || status.password === AUTH_FORM_ERROR.PASSWORD_EMPTY: {
                passwordRef.current?.focus();
                if (status.password !== AUTH_FORM_ERROR.PASSWORD_EMPTY) {
                    setStatus({
                        account: AUTH_FORM_ERROR.DEFAULT,
                        password: AUTH_FORM_ERROR.PASSWORD_EMPTY,
                    });
                }
                return;
            }
            case !isEmail && !isPhone: {
                accountRef.current?.focus();
                if (status.account !== AUTH_FORM_ERROR.ACCOUNT_FAILED) {
                    setStatus({
                        account: AUTH_FORM_ERROR.ACCOUNT_FAILED,
                        password: AUTH_FORM_ERROR.DEFAULT,
                    });
                }
                return;
            }
            case password.length < 6: {
                passwordRef.current?.focus();
                if (status.password !== AUTH_FORM_ERROR.PASSWORD_SHORT) {
                    setStatus({
                        account: AUTH_FORM_ERROR.DEFAULT,
                        password: AUTH_FORM_ERROR.PASSWORD_SHORT,
                    });
                }
                return;
            }
            default:
                setIsSubmit(true);
                const onSuccess = () => {
                    onResetStatus();
                    setIsSubmit(false);
                };

                const onFailure = (value: FormErrorType) => {
                    accountRef.current?.focus();
                    setStatus({
                        account: value,
                        password: value,
                    });
                    setIsSubmit(false);
                };
                dispatch(authAction.signIn.request({ account, password, onSuccess, onFailure }));
                return;
        }
    }, []);

    const formHelper = React.useMemo(() => {
        const shouldInputUpdate = (prevValues: string, nextValues: string) => prevValues !== nextValues;
        return {
            account: {
                name: 'account',
                validateStatus: status.account ? 'error' : undefined,
                help: status.account
                    ? formatMessage(authMessage[`module.auth.form.input.error.${status.account}`])
                    : undefined,
                hasFeedback: !!status.account,
                shouldUpdate: shouldInputUpdate,
            },
            password: {
                name: 'password',
                validateStatus: status.password ? 'error' : undefined,
                help: status.password
                    ? formatMessage(authMessage[`module.auth.form.input.error.${status.password}`])
                    : undefined,
                hasFeedback: !!status.password,
                shouldUpdate: shouldInputUpdate,
            },
        } as const;
    }, [status]);

    return (
        <FormWrap
            name="tola_signin_form"
            form={form}
            onFinish={onSubmit}
            onValuesChange={onResetStatus}
            initialValues={{
                remember_username: true,
                account: Decrypt(localStorageBase.get(emailLocalKey)),
            }}>
            <Form.Item {...formHelper.account}>
                <Input
                    ref={accountRef}
                    size="large"
                    addonBefore={<UserOutlined className="site-form-item-icon" />}
                    placeholder={formatMessage(authMessage['module.auth.form.input.placeholder.account'])}
                    autoComplete="on"
                    allowClear
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
            </Form.Item>

            <Form.Item {...formHelper.password}>
                <Input.Password
                    ref={passwordRef}
                    size="large"
                    allowClear
                    addonBefore={<LockOutlined className="site-form-item-icon" />}
                    placeholder={formatMessage(authMessage['module.auth.form.input.placeholder.password'])}
                    autoComplete="on"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember_username" valuePropName="checked" noStyle>
                    <Checkbox>{formatMessage(authMessage['module.auth.form.checkbox.giveMe'])}</Checkbox>
                </Form.Item>
                <ButtonSubmit type="primary" size="large" htmlType="submit" loading={isSubmit}>
                    {formatMessage(authMessage['module.auth.form.title.signin'])}
                </ButtonSubmit>
            </Form.Item>

            <FormFooter />
        </FormWrap>
    );
}

export default SignInForm;
