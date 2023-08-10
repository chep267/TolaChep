/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

/** types */
import type { ReactNode, KeyboardEvent } from 'react';
import type { InputChangeProps } from '@module-base/models';
import type { AvatarSize } from 'antd/es/avatar/AvatarContext';

type ID_ItemDataType = string | number;
type ItemDataType = ID_ItemDataType | ({ id: ID_ItemDataType } & Record<string, any>);

interface ListTitleProps {
    className?: string;
    title?: ReactNode;
}
interface ListSearchProps extends InputChangeProps {}
interface ListContentProps {
    empty?: ReactNode;
    idSelect?: ID_ItemDataType;
    loading?: boolean;
    disableEventKey?: boolean;
    data?: ItemDataType[];
    onSelect?(item: ItemDataType, key?: number): void;
    renderItem?(item: ItemDataType, index: number): ReactNode;
}

interface ListBaseProps {
    className?: string;
    titleProps?: ListTitleProps;
    searchProps?: ListSearchProps;
    contentProps: ListContentProps;
}

interface ListHookStates {
    disableEventKey: boolean;
    total: number;
    itemSelect: number;
    itemHover: number;
    idSelect: ID_ItemDataType;
}

interface ListHookProps {
    itemSelect: number;
    itemHover: number;
    idSelect: ID_ItemDataType;
    onSelect(data: Partial<Pick<ListHookStates, 'idSelect' | 'itemSelect'>>): void;
    onKeyPress(event: KeyboardEvent<HTMLInputElement>): void;
    onUpdate(data?: Partial<ListHookStates>): void;
    onRefresh(): void;
}

interface ListItemProps {
    item: ItemDataType;
    index: number;
    isHovered?: boolean;
    isSelected?: boolean;
    onClick?(item: ItemDataType, key: number): void;
    renderItem?(item: ItemDataType, index: number): ReactNode;
}

interface ListItemBaseProps {
    className?: string;
    avatarProps?: {
        className?: string;
        url?: string;
        size?: AvatarSize;
    };
    nameProps?: {
        className?: string;
        primaryText?: string;
        secondText?: string;
    };
    renderOption?: ReactNode | (() => ReactNode);
}

export type {
    ItemDataType,
    ListBaseProps,
    ListSearchProps,
    ListTitleProps,
    ListContentProps,
    ListItemProps,
    ListHookProps,
    ListHookStates,
    ListItemBaseProps,
};
