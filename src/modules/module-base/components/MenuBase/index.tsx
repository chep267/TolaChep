/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import { MessageDescriptor } from '@formatjs/intl/src/types';
import type { MenuProps } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

/** components */
import { TextIntl } from '@module-base/components';

/** utils */
import { textMedium, textSmall } from '@module-theme/constants';

const Label = styled(TextIntl)(({ theme }) => ({
    ...textMedium,
    padding: '10px 20px',
}));

const SubLabel = styled(TextIntl)(({ theme }) => ({
    ...textSmall,
    padding: '10px 20px',
}));

type TypeMenuAntd = Required<MenuProps>['items'][number];
export type TypeMenuBase = {
    message: MessageDescriptor;
    messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
    key: string;
    icon?: any;
    children?: TypeMenuBase[];
    type?: 'group' | 'divider';
};

const createItem = (item: TypeMenuBase): TypeMenuAntd => {
    const loop = ({ message, messageOption, key, icon, children, type }: TypeMenuBase, isChild = true): TypeMenuAntd => {
        if (type === 'divider') {
            return {
                key,
                type,
            };
        }
        const Text = isChild ? SubLabel : Label;
        return {
            key,
            label: <Text message={message} messageOption={messageOption} />,
            icon,
            children: !children ? undefined : children.map((child: TypeMenuBase) => loop(child)),
        };
    };
    return loop(item, false);
};

type MenuBaseProps = {
    items: TypeMenuBase[];
    onClick: (item: MenuInfo) => void;
};

export default function MenuBase(props: MenuBaseProps) {
    const { items, onClick } = props;

    const getItems = (): MenuProps['items'] => items.map((item) => createItem(item));

    return <Menu items={getItems()} onClick={onClick} />;
}
