/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { App, Form, Checkbox, InputRef } from 'antd';

/** actions */
import { AUTH_ACTION, authAction } from '@module-auth/actions';

/** utils */
import { authMessage, TYPE_AUTH_FORM_ERROR } from '@module-auth/utils';
import { useAppDispatch } from '@app/store';

/** styles */
import { ButtonSubmit, FormStyle } from '@module-auth/components/web/FormAuth/SignInForm/styles';

/** components */
import FormInput from '@module-auth/components/web/FormAuth/FormInput';
import FormFooter from '@module-auth/components/web/FormAuth/FormFooter';
import { useNavigate } from 'react-router-dom';
import { SCREEN } from '@module-global/constants';
import { AUTH_FORM_ERROR } from '@module-auth/constants';
import { getTextIntl, TextIntl } from '@module-base/components';

function RegisterForm() {
    const { message } = App.useApp();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const accountRef: React.Ref<InputRef> = React.useRef(null);
    const passwordRef: React.Ref<InputRef> = React.useRef(null);
    const passwordHillRef: React.Ref<InputRef> = React.useRef(null);

    const [status, setStatus] = React.useState<TYPE_AUTH_FORM_ERROR>(AUTH_FORM_ERROR.DEFAULT);
    const [passwordSame, setPasswordSame] = React.useState(false);
    const [isSubmit, setIsSubmit] = React.useState(false);

    const onSubmit = () => {
        const account = accountRef.current?.input?.value?.trim() || '';
        const password = passwordRef.current?.input?.value?.trim() || '';
        const passwordHill = passwordHillRef.current?.input?.value?.trim() || '';

        switch (true) {
            case !account || status === AUTH_FORM_ERROR.ACCOUNT_EMPTY: {
                accountRef.current?.focus();
                if (status !== AUTH_FORM_ERROR.ACCOUNT_EMPTY) setStatus(AUTH_FORM_ERROR.ACCOUNT_EMPTY);
                return;
            }
            case !password || status === AUTH_FORM_ERROR.PASSWORD_EMPTY: {
                passwordRef.current?.focus();
                if (status !== AUTH_FORM_ERROR.PASSWORD_EMPTY) setStatus(AUTH_FORM_ERROR.PASSWORD_EMPTY);
                return;
            }
            case password.length < 6: {
                passwordRef.current?.focus();
                if (status !== AUTH_FORM_ERROR.PASSWORD_SHORT) setStatus(AUTH_FORM_ERROR.PASSWORD_SHORT);
                return;
            }
            case !passwordHill || status === AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY: {
                passwordHillRef.current?.focus();
                if (status !== AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY) setStatus(AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY);
                return;
            }
            case password !== passwordHill: {
                passwordHillRef.current?.focus();
                if (status !== AUTH_FORM_ERROR.PASSWORD_DIFFERENT) setStatus(AUTH_FORM_ERROR.PASSWORD_DIFFERENT);
                return;
            }
            default:
                setIsSubmit(true);
                const onSuccess = () => {
                    setStatus(AUTH_FORM_ERROR.DEFAULT);
                    setIsSubmit(false);
                    message
                        .success(<TextIntl message={authMessage['module.auth.form.message.success.register']} />, 3)
                        .then();
                    navigate(SCREEN.SIGN_IN, { replace: true });
                };

                const onFailure = (value: TYPE_AUTH_FORM_ERROR) => {
                    accountRef.current?.focus();
                    setStatus(value);
                    setIsSubmit(false);
                };

                dispatch(authAction.register.request({ email: account, phone: '', password, onSuccess, onFailure }));
                return;
        }
    };

    const checkPassword = (value: TYPE_AUTH_FORM_ERROR) => {
        const password = passwordRef.current?.input?.value?.trim() || '';
        const passwordHill = passwordHillRef.current?.input?.value?.trim() || '';
        setStatus(value);
        setPasswordSame(!!(passwordHill && password === passwordHill));
    };

    const error = {
        account: status === AUTH_FORM_ERROR.ACCOUNT_EMPTY,
        password: status === AUTH_FORM_ERROR.PASSWORD_EMPTY,
        passwordHill: status === AUTH_FORM_ERROR.PASSWORD_HILL_EMPTY,
        passwordShort: status === AUTH_FORM_ERROR.PASSWORD_SHORT,
        passwordDifferent: status === AUTH_FORM_ERROR.PASSWORD_DIFFERENT,
        incorrect: status === AUTH_FORM_ERROR.ACCOUNT_INCORRECT,
        registered: status === AUTH_FORM_ERROR.ACCOUNT_REGISTERED,
    };

    return (
        <FormStyle
            name="tola_register_form"
            initialValues={{
                remember: true,
            }}>
            <FormInput
                ref={accountRef}
                name="username"
                validateStatus={error.account || error.incorrect || error.registered ? 'error' : undefined}
                help={
                    error.account
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.account.empty'] })
                        : error.registered
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.account.registered'] })
                        : error.incorrect
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.account.incorrect'] })
                        : undefined
                }
                hasFeedback={error.account || error.incorrect || error.registered}
                type="text"
                autoFocus
                placeholder={getTextIntl({ message: authMessage['module.auth.form.input.placeholder.account'] })}
                resetStatus={setStatus}
            />
            <FormInput
                ref={passwordRef}
                name="password"
                validateStatus={
                    passwordSame ? 'success' : error.password || error.incorrect || error.passwordShort ? 'error' : undefined
                }
                help={
                    error.password
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.password.empty'] })
                        : error.passwordShort
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.password.incorrect'] })
                        : error.incorrect
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.account.incorrect'] })
                        : undefined
                }
                hasFeedback={passwordSame || error.password || error.incorrect || error.passwordShort}
                type="password"
                placeholder={getTextIntl({ message: authMessage['module.auth.form.input.placeholder.password'] })}
                resetStatus={checkPassword}
            />
            <FormInput
                ref={passwordHillRef}
                name="passwordHill"
                validateStatus={
                    passwordSame
                        ? 'success'
                        : error.passwordHill || error.incorrect || error.passwordDifferent
                        ? 'error'
                        : undefined
                }
                help={
                    error.passwordHill
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.passwordHill.empty'] })
                        : error.passwordDifferent
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.passwordHill.incorrect'] })
                        : error.incorrect
                        ? getTextIntl({ message: authMessage['module.auth.form.input.error.account.incorrect'] })
                        : undefined
                }
                hasFeedback={passwordSame || error.passwordHill || error.incorrect || error.passwordDifferent}
                type="password"
                placeholder={getTextIntl({ message: authMessage['module.auth.form.input.placeholder.passwordHill'] })}
                resetStatus={checkPassword}
            />

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>{getTextIntl({ message: authMessage['module.auth.form.checkbox.giveMe'] })}</Checkbox>
                </Form.Item>

                <ButtonSubmit type="primary" size="large" htmlType="submit" onClick={onSubmit} loading={isSubmit}>
                    {getTextIntl({ message: authMessage['module.auth.form.title.register'] })}
                </ButtonSubmit>
            </Form.Item>

            <FormFooter />
        </FormStyle>
    );
}

export default RegisterForm;
