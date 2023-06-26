/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 10/11/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import type { InputSearchProps } from '@snw-components/web-antd-custom/InputBase';
import type { ItemIdsType } from '@snw-global/constants/type';

interface ListSearchProps extends InputSearchProps {
    visible?: boolean;
}

interface ListBaseProps {
    wrapClassName?: string;
    contentClassName?: string;

    title?: React.ReactNode;
    empty?: React.ReactNode;
    inputSearchProps?: InputSearchProps;

    idSelect: string;
    loading?: boolean;
    disableEventKey?: boolean;
    data?: string[] | ItemIdsType;
    onSelect?(item: string, key?: number): void;
    renderItem?(item: string, index: number): React.ReactNode;
}

type ListTitleProps = Pick<ListBaseProps, 'title'>;

interface ListHookStates {
    disableEventKey: boolean;
    total: number;
    itemSelect: number;
    itemHover: number;
    idSelect: string;
}

interface ListHookProps {
    itemSelect: number;
    itemHover: number;
    idSelect: string;
    onSelect(data: Partial<Pick<ListHookStates, 'idSelect' | 'itemSelect'>>): void;
    onKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void;
    onUpdate(data?: Partial<ListHookStates>): void;
    onRefresh(): void;
}

interface ListContentProps extends Omit<ListBaseProps, 'title' | 'wrapClassName'> {
    listHook: ListHookProps;
}

interface ListItemProps {
    item: string;
    index: number;
    isHovered?: boolean;
    isSelected?: boolean;
    onClick?(id: string, key: number): void;
    renderItem?(item: string, index: number): React.ReactNode;
}

export type {
    ListBaseProps,
    ListSearchProps,
    ListTitleProps,
    ListContentProps,
    ListItemProps,
    ListHookProps,
    ListHookStates,
};
