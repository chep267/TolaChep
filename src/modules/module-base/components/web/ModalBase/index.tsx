/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React from 'react';
import styled from 'styled-components';

/** components */
import { Modal } from 'antd';

/** utils */
import { getTextIntl } from '@module-base/components/web';
import { baseMessage } from '@module-base/utils';

/** types */
import type { FunctionComponent } from 'react';
import type { ModalProps } from 'antd/es/modal';

type ModalBaseProps = ModalProps;

/** styles */
const ModalBaseElement: FunctionComponent<ModalBaseProps> = styled(Modal)`
    border-radius: 8px;
    overflow: hidden;
    & > div[class*='ant-modal-content'] {
        padding: 0;
        max-height: 90vh;
        & > button[class*='ant-modal-close'] {
            border: 1px solid dimgray;
            border-radius: 50%;
        }
        & > div[class*='ant-modal-header'] {
            padding: 16px 50px 16px 20px;
            border-bottom: 0.5px solid grey;
        }
        & > div[class*='ant-modal-body'] {
            min-height: 0;
            max-height: 60vh;
            padding: 10px;
            overflow: hidden auto;
            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 20px;
            }
            &:hover::-webkit-scrollbar-thumb {
                background: grey;
            }
            & > div {
                height: 300px;
            }
        }
        & > div[class*='ant-modal-footer'] {
            padding: 10px 20px;
            border-top: 0.5px solid dimgray;
            margin-top: 8px;
            button[disabled] {
                cursor: not-allowed;
            }
        }
    }
`;

function ModalBase(props: ModalBaseProps) {
    const { okText, cancelText, ...modalProps } = props;

    return (
        <ModalBaseElement
            centered
            closable
            okText={okText || getTextIntl({ message: baseMessage['module.base.component.button.ok.text'] })}
            cancelText={cancelText || getTextIntl({ message: baseMessage['module.base.component.button.cancel.text'] })}
            {...modalProps}
        />
    );
}

export type { ModalBaseProps };
export type { ModalFooterProps } from './ModalFooterBase';
export { default as ModalFooterBase } from './ModalFooterBase';
export default ModalBase;
