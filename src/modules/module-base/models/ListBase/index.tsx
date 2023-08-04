/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import type { InputChangeProps } from '@module-base/models';

interface ListSearchProps extends InputChangeProps {
    visible?: boolean;
}

interface ListBaseProps {
    wrapClassName?: string;
    contentClassName?: string;

    title?: React.ReactNode;
    empty?: React.ReactNode;
    inputSearchProps?: InputChangeProps;

    idSelect: string;
    loading?: boolean;
    disableEventKey?: boolean;
    data?: string[];
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
