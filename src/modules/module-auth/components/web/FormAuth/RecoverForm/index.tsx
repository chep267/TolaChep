/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { App, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
import type { FormErrorType, FormStatusType, FormDataType } from '@module-auth/models';
import type { InputBaseRef } from '@module-base/models';

const statusDefault: Pick<FormStatusType, 'account'> = {
    account: AUTH_FORM_ERROR.DEFAULT,
};

function RecoverForm() {
    const dispatch = useAppDispatch();
    const { message } = App.useApp();
    const { formatMessage } = useIntl();

    const accountRef = React.useRef<InputBaseRef>(null);

    const [form] = Form.useForm<FormDataType>();

    const [status, setStatus] = React.useState<Pick<FormStatusType, 'account'>>(statusDefault);
    const [isSubmit, setIsSubmit] = React.useState(false);

    const onResetStatus = React.useCallback(() => setStatus(statusDefault), []);

    const onSubmit = () => {
        const account = accountRef.current?.input?.value?.trim() || '';
        const isEmail = REGEX_EMAIL.test(account);
        const isPhone = REGEX_PHONE.test(account);

        switch (true) {
            case !account || status.account === AUTH_FORM_ERROR.ACCOUNT_EMPTY: {
                accountRef.current?.focus();
                if (status.account !== AUTH_FORM_ERROR.ACCOUNT_EMPTY) {
                    setStatus({
                        account: AUTH_FORM_ERROR.ACCOUNT_EMPTY,
                    });
                }
                return;
            }
            case !isEmail && !isPhone: {
                accountRef.current?.focus();
                if (status.account !== AUTH_FORM_ERROR.ACCOUNT_FAILED) {
                    setStatus({
                        account: AUTH_FORM_ERROR.ACCOUNT_FAILED,
                    });
                }
                return;
            }
            default:
                setIsSubmit(true);
                const onSuccess = () => {
                    message
                        .success(
                            formatMessage(authMessage['module.auth.form.message.success.recover'], {
                                value: formatMessage(
                                    authMessage[`module.auth.form.message.success.recover.${isEmail ? 'email' : 'phone'}`],
                                    { account }
                                ),
                            }),
                            9
                        )
                        .then();
                    onResetStatus();
                    setIsSubmit(false);
                };

                const onFailure = (error: FormErrorType) => {
                    accountRef.current?.focus();
                    setStatus((prev) => ({
                        ...prev,
                        account: error,
                    }));
                    setIsSubmit(false);
                };

                dispatch(authAction.recover.request({ account, onSuccess, onFailure }));
                return;
        }
    };

    return (
        <FormWrap
            name="tola_recover_form"
            form={form}
            onFinish={onSubmit}
            onValuesChange={onResetStatus}
            initialValues={{
                remember_username: true,
                account: Decrypt(localStorageBase.get(emailLocalKey)),
            }}>
            <Form.Item
                name="username"
                validateStatus={status.account ? 'error' : undefined}
                help={
                    status.account ? formatMessage(authMessage[`module.auth.form.input.error.${status.account}`]) : undefined
                }
                hasFeedback={!!status.account}>
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

            <Form.Item>
                <ButtonSubmit type="primary" size="large" htmlType="submit" loading={isSubmit}>
                    {formatMessage(authMessage['module.auth.form.title.recover'])}
                </ButtonSubmit>
            </Form.Item>

            <FormFooter />
        </FormWrap>
    );
}

export default RecoverForm;
