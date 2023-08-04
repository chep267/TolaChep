/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Form, Checkbox } from 'antd';
import { useIntl } from 'react-intl';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import { FormWrap, ButtonSubmit, FormInput, FormFooter } from '@module-auth/components/web/FormAuth/components';

/** constants */
import { REGEX_PHONE, REGEX_EMAIL } from '@module-base/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { emailLocalKey } from '@module-global/constants';

/** utils */
import { authMessage } from '@module-auth/utils';
import { useAppDispatch } from '@module-global/utils';
import { Decrypt, localStorageBase } from '@module-base/utils';

/** types */
import type { AuthFormErrorType } from '@module-auth/models';
import type { InputBaseRef } from '@module-base/models';

function SignInForm() {
    const dispatch = useAppDispatch();
    const { formatMessage } = useIntl();

    const accountRef = React.useRef<InputBaseRef>(null);
    const passwordRef = React.useRef<InputBaseRef>(null);

    const [status, setStatus] = React.useState<{
        account: AuthFormErrorType;
        password: AuthFormErrorType;
    }>({
        account: AUTH_FORM_ERROR.DEFAULT,
        password: AUTH_FORM_ERROR.DEFAULT,
    });
    const [isSubmit, setIsSubmit] = React.useState(false);

    const onResetStatus = React.useCallback(() => {
        setStatus({
            account: AUTH_FORM_ERROR.DEFAULT,
            password: AUTH_FORM_ERROR.DEFAULT,
        });
    }, []);

    const onSubmit = () => {
        const account = accountRef.current?.input?.value?.trim() || '';
        const password = passwordRef.current?.input?.value?.trim() || '';
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

                const onFailure = (value: AuthFormErrorType) => {
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
    };

    return (
        <FormWrap
            name="tola_signin_form"
            initialValues={{
                remember_username: true,
                username: Decrypt(localStorageBase.get(emailLocalKey)),
            }}>
            <FormInput
                ref={accountRef}
                name="username"
                validateStatus={status.account ? 'error' : undefined}
                help={
                    status.account ? formatMessage(authMessage[`module.auth.form.input.error.${status.account}`]) : undefined
                }
                hasFeedback={!!status.account}
                resetStatus={onResetStatus}
                inputProps={{
                    type: 'text',
                    placeholder: formatMessage(authMessage['module.auth.form.input.placeholder.account']),
                    autoFocus: true, // eslint-disable-line jsx-a11y/no-autofocus
                }}
            />

            <FormInput
                ref={passwordRef}
                name="password"
                validateStatus={status.password ? 'error' : undefined}
                help={
                    status.password
                        ? formatMessage(authMessage[`module.auth.form.input.error.${status.password}`])
                        : undefined
                }
                hasFeedback={!!status.password}
                resetStatus={onResetStatus}
                inputProps={{
                    type: 'password',
                    placeholder: formatMessage(authMessage['module.auth.form.input.placeholder.password']),
                }}
            />

            <Form.Item>
                <Form.Item name="remember_username" valuePropName="checked" noStyle>
                    <Checkbox>{formatMessage(authMessage['module.auth.form.checkbox.giveMe'])}</Checkbox>
                </Form.Item>
                <ButtonSubmit type="primary" size="large" htmlType="submit" onClick={onSubmit} loading={isSubmit}>
                    {formatMessage(authMessage['module.auth.form.title.signin'])}
                </ButtonSubmit>
            </Form.Item>

            <FormFooter />
        </FormWrap>
    );
}

export default SignInForm;
