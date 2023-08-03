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

/** utils */
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { Decrypt, localStorageBase } from '@module-base/utils';
import { authMessage, AuthFormErrorType } from '@module-auth/utils';
import { useAppDispatch } from '@module-global/utils';
import { emailLocalKey } from '@module-global/constants';
import { REGEX_PHONE, REGEX_EMAIL } from '@module-base/constants';
import { useIntl } from 'react-intl';

function RecoverForm() {
    const dispatch = useAppDispatch();
    const { formatMessage } = useIntl();

    const accountRef: React.Ref<InputRef> = React.useRef(null);
    const passwordRef: React.Ref<InputRef> = React.useRef(null);
    const passwordHillRef: React.Ref<InputRef> = React.useRef(null);

    const [status, setStatus] = React.useState<{
        account: AuthFormErrorType;
        password: AuthFormErrorType;
        passwordHill: AuthFormErrorType;
    }>({
        account: AUTH_FORM_ERROR.DEFAULT,
        password: AUTH_FORM_ERROR.DEFAULT,
        passwordHill: AUTH_FORM_ERROR.DEFAULT,
    });
    const [isSubmit, setIsSubmit] = React.useState(false);

    const onResetStatus = React.useCallback(() => {
        setStatus({
            account: AUTH_FORM_ERROR.DEFAULT,
            password: AUTH_FORM_ERROR.DEFAULT,
            passwordHill: AUTH_FORM_ERROR.DEFAULT,
        });
    }, []);

    const onSubmit = () => {
        const account = accountRef.current?.input?.value?.trim() || '';
        const password = passwordRef.current?.input?.value?.trim() || '';
        const passwordHill = passwordHillRef.current?.input?.value?.trim() || '';
        const isEmail = REGEX_EMAIL.test(account);
        const isPhone = REGEX_PHONE.test(account);

        switch (true) {
            case !account || status.account === AUTH_FORM_ERROR.ACCOUNT_EMPTY: {
                accountRef.current?.focus();
                if (status.account !== AUTH_FORM_ERROR.ACCOUNT_EMPTY) {
                    setStatus({
                        account: AUTH_FORM_ERROR.ACCOUNT_EMPTY,
                        password: AUTH_FORM_ERROR.DEFAULT,
                        passwordHill: AUTH_FORM_ERROR.DEFAULT,
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
                        passwordHill: AUTH_FORM_ERROR.DEFAULT,
                    });
                }
                return;
            }
            case !passwordHill || status.passwordHill === AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY: {
                passwordHillRef.current?.focus();
                if (status.password !== AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY) {
                    setStatus({
                        account: AUTH_FORM_ERROR.DEFAULT,
                        password: AUTH_FORM_ERROR.DEFAULT,
                        passwordHill: AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY,
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
                        passwordHill: AUTH_FORM_ERROR.DEFAULT,
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
                        passwordHill: AUTH_FORM_ERROR.DEFAULT,
                    });
                }
                return;
            }
            case password !== passwordHill: {
                passwordHillRef.current?.focus();
                if (status.passwordHill !== AUTH_FORM_ERROR.PASSWORD_DIFFERENT) {
                    setStatus({
                        account: AUTH_FORM_ERROR.DEFAULT,
                        password: AUTH_FORM_ERROR.PASSWORD_DIFFERENT,
                        passwordHill: AUTH_FORM_ERROR.PASSWORD_DIFFERENT,
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
                        passwordHill: value,
                    });
                    setIsSubmit(false);
                };

                dispatch(authAction.register.request({ account, password, onSuccess, onFailure }));
                return;
        }
    };

    const checkPassword = () => {
        const password = passwordRef.current?.input?.value?.trim() || '';
        const passwordHill = passwordHillRef.current?.input?.value?.trim() || '';
        return passwordHill.length > 5 && password === passwordHill;
    };

    const success = checkPassword();

    return (
        <FormStyle
            name="tola_register_form"
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
                type="text"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                placeholder={formatMessage(authMessage['module.auth.form.input.placeholder.account'])}
                resetStatus={onResetStatus}
            />

            <FormInput
                ref={passwordRef}
                name="password"
                autoComplete="on"
                validateStatus={success ? 'success' : status.password ? 'error' : undefined}
                help={
                    status.password
                        ? formatMessage(authMessage[`module.auth.form.input.error.${status.password}`])
                        : undefined
                }
                hasFeedback={success || !!status.password}
                type="password"
                placeholder={formatMessage(authMessage['module.auth.form.input.placeholder.password'])}
                resetStatus={onResetStatus}
            />

            <FormInput
                ref={passwordHillRef}
                name="passwordHill"
                autoComplete="on"
                validateStatus={success ? 'success' : status.passwordHill ? 'error' : undefined}
                help={
                    status.passwordHill
                        ? formatMessage(authMessage[`module.auth.form.input.error.${status.passwordHill}`])
                        : undefined
                }
                hasFeedback={success || !!status.passwordHill}
                type="password"
                placeholder={formatMessage(authMessage['module.auth.form.input.placeholder.passwordHill'])}
                resetStatus={onResetStatus}
            />

            <Form.Item>
                <Form.Item name="remember_username" valuePropName="checked" noStyle>
                    <Checkbox>{formatMessage(authMessage['module.auth.form.checkbox.giveMe'])}</Checkbox>
                </Form.Item>
                <ButtonSubmit type="primary" size="large" htmlType="submit" onClick={onSubmit} loading={isSubmit}>
                    {formatMessage(authMessage['module.auth.form.title.recover'])}
                </ButtonSubmit>
            </Form.Item>

            <FormFooter />
        </FormStyle>
    );
}

export default RecoverForm;
