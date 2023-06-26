/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React from 'react';

/** components */
import { Button } from 'antd';

/** utils */
import { emptyObject } from '@module-base/constants';
import { getTextIntl } from '@module-base/components/web';
import { baseMessage } from '@module-base/utils';

/** types */
import type { ButtonProps } from 'antd';
import type { MouseEvent } from 'react';

type Event = MouseEvent<HTMLElement, MouseEvent>;

type ModalFooterProps = {
    onlyButton?: 'cancel' | 'ok';
    okText?: string;
    cancelText?: string;
    continueText?: string;
    disabled?: boolean;
    loading?: boolean;
    buttonProps?: ButtonProps;
    onCancel?: (e: Event) => void;
    onOk?: (e: Event) => void;
    onContinue?: (e: Event) => void;
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

    if (onlyButton === 'ok') {
        return (
            <Button type="primary" key="ok" onClick={onOk} disabled={disabled} loading={loading} {...buttonProps}>
                {okText || getTextIntl({ message: baseMessage['module.base.component.button.ok.text'] })}
            </Button>
        );
    }

    if (onlyButton === 'cancel') {
        return (
            <Button key="cancel" onClick={onCancel} {...buttonProps}>
                {cancelText || getTextIntl({ message: baseMessage['module.base.component.button.cancel.text'] })}
            </Button>
        );
    }

    return (
        <>
            <Button key="cancel" onClick={onCancel} {...buttonProps}>
                {cancelText || getTextIntl({ message: baseMessage['module.base.component.button.cancel.text'] })}
            </Button>
            <Button key="ok" type="primary" onClick={onOk} disabled={disabled} loading={loading} {...buttonProps}>
                {okText || getTextIntl({ message: baseMessage['module.base.component.button.ok.text'] })}
            </Button>
            {typeof onContinue === 'function' ? (
                <Button
                    key="continue"
                    type="primary"
                    onClick={onContinue}
                    disabled={disabled}
                    loading={loading}
                    {...buttonProps}>
                    {continueText || getTextIntl({ message: baseMessage['module.base.component.button.continue.text'] })}
                </Button>
            ) : null}
        </>
    );
}

export type { ModalFooterProps };
export default ModalFooter;
