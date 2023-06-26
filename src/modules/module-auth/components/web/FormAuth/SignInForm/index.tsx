/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Form, Checkbox, InputRef } from 'antd';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import { ButtonSubmit, FormStyle } from '@module-auth/components/web/FormAuth/SignInForm/styles';
import FormInput from '@module-auth/components/web/FormAuth/FormInput';
import FormFooter from '@module-auth/components/web/FormAuth/FormFooter';
import { getTextIntl } from '@module-base/components/web';

/** utils */
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { authMessage, AuthFormErrorType } from '@module-auth/utils';
import { useAppDispatch } from '@app/store';
import { Decrypt } from '@module-base/utils';
import { localStorageBase } from '@module-base/utils';
import { emailLocalKey } from '@module-global/constants';
import { REGEX_PHONE, REGEX_EMAIL } from '@module-base/constants';

function SignInForm() {
    const dispatch = useAppDispatch();

    const accountRef: React.Ref<InputRef> = React.useRef(null);
    const passwordRef: React.Ref<InputRef> = React.useRef(null);

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
        <FormStyle
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
                    status.account
                        ? getTextIntl({ message: authMessage[`module.auth.form.input.error.${status.account}`] })
                        : undefined
                }
                hasFeedback={!!status.account}
                type="text"
                autoFocus
                placeholder={getTextIntl({ message: authMessage['module.auth.form.input.placeholder.account'] })}
                resetStatus={onResetStatus}
            />

            <FormInput
                ref={passwordRef}
                name="password"
                validateStatus={status.password ? 'error' : undefined}
                help={
                    status.password
                        ? getTextIntl({ message: authMessage[`module.auth.form.input.error.${status.password}`] })
                        : undefined
                }
                hasFeedback={!!status.password}
                type="password"
                placeholder={getTextIntl({ message: authMessage['module.auth.form.input.placeholder.password'] })}
                resetStatus={onResetStatus}
            />

            <Form.Item>
                <Form.Item name="remember_username" valuePropName="checked" noStyle>
                    <Checkbox>{getTextIntl({ message: authMessage['module.auth.form.checkbox.giveMe'] })}</Checkbox>
                </Form.Item>

                <ButtonSubmit type="primary" size="large" htmlType="submit" onClick={onSubmit} loading={isSubmit}>
                    {getTextIntl({ message: authMessage['module.auth.form.title.signin'] })}
                </ButtonSubmit>
            </Form.Item>

            <FormFooter />
        </FormStyle>
    );
}

export default SignInForm;
