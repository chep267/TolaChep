/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { Form } from 'antd';
import { Link, useLocation } from 'react-router-dom';

/** utils */
import { SCREEN } from '@module-global/constants';
import { authMessage } from '@module-auth/utils';

/** styles */

function FormFooter() {
    const intl = useIntl();
    const { pathname } = useLocation();

    return (
        <Form.Item>
            {pathname !== SCREEN.SIGN_IN && (
                <div>
                    <Link to={SCREEN.SIGN_IN}>{intl.formatMessage(authMessage['module.auth.form.navigate.signin'])}</Link>
                </div>
            )}
            {pathname !== SCREEN.REGISTER && (
                <div>
                    <Link to={SCREEN.REGISTER}>{intl.formatMessage(authMessage['module.auth.form.navigate.register'])}</Link>
                </div>
            )}
            {pathname !== SCREEN.RECOVER && (
                <div>
                    <Link to={SCREEN.RECOVER}>{intl.formatMessage(authMessage['module.auth.form.navigate.recover'])}</Link>
                </div>
            )}
        </Form.Item>
    );
}

export default FormFooter;
