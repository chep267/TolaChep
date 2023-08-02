/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { useIntl } from 'react-intl';

/** components */
import { Button } from 'antd';

/** utils */
import { emptyObject } from '@module-base/constants';
import { baseMessage } from '@module-base/utils';

/** types */
import type { ButtonProps } from 'antd';
import type { MouseEventHandler } from 'react';

type Event = MouseEventHandler<HTMLElement> | undefined;

type ModalFooterProps = {
    onlyButton?: 'cancel' | 'ok';
    okText?: string;
    cancelText?: string;
    continueText?: string;
    disabled?: boolean;
    loading?: boolean;
    buttonProps?: ButtonProps;
    onCancel?: Event;
    onOk?: Event;
    onContinue?: Event;
};

function ModalFooter(props: ModalFooterProps) {
    const {
        onlyButton,
        okText,
        cancelText,
        continueText,
        onCancel,
        onContinue,
        onOk,
        disabled,
        loading,
        buttonProps = emptyObject,
    } = props;
    const { formatMessage } = useIntl();

    if (onlyButton === 'ok') {
        return (
            <Button type="primary" key="ok" onClick={onOk} disabled={disabled} loading={loading} {...buttonProps}>
                {okText || formatMessage(baseMessage['module.base.component.button.ok.text'])}
            </Button>
        );
    }

    if (onlyButton === 'cancel') {
        return (
            <Button key="cancel" onClick={onCancel} {...buttonProps}>
                {cancelText || formatMessage(baseMessage['module.base.component.button.cancel.text'])}
            </Button>
        );
    }

    return (
        <>
            <Button key="cancel" onClick={onCancel} {...buttonProps}>
                {cancelText || formatMessage(baseMessage['module.base.component.button.cancel.text'])}
            </Button>
            <Button key="ok" type="primary" onClick={onOk} disabled={disabled} loading={loading} {...buttonProps}>
                {okText || formatMessage(baseMessage['module.base.component.button.ok.text'])}
            </Button>
            {typeof onContinue === 'function' ? (
                <Button
                    key="continue"
                    type="primary"
                    onClick={onContinue}
                    disabled={disabled}
                    loading={loading}
                    {...buttonProps}>
                    {continueText || formatMessage(baseMessage['module.base.component.button.continue.text'])}
                </Button>
            ) : null}
        </>
    );
}

export type { ModalFooterProps };
export default ModalFooter;
