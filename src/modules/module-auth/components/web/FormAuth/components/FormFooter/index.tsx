/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { Form } from 'antd';

/** constants */
import { SCREEN } from '@module-global/constants';

/** utils */
import { authMessage } from '@module-auth/utils';

function FormFooter() {
    const { formatMessage } = useIntl();
    const { pathname } = useLocation();

    return (
        <Form.Item>
            {pathname !== SCREEN.SIGN_IN && (
                <div>
                    <Link to={SCREEN.SIGN_IN}>{formatMessage(authMessage['module.auth.form.navigate.signin'])}</Link>
                </div>
            )}
            {pathname !== SCREEN.REGISTER && (
                <div>
                    <Link to={SCREEN.REGISTER}>{formatMessage(authMessage['module.auth.form.navigate.register'])}</Link>
                </div>
            )}
            {pathname !== SCREEN.RECOVER && (
                <div>
                    <Link to={SCREEN.RECOVER}>{formatMessage(authMessage['module.auth.form.navigate.recover'])}</Link>
                </div>
            )}
        </Form.Item>
    );
}

export default FormFooter;
