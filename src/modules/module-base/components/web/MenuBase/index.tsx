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

/** components */
import { TextIntl } from '@module-base/components/web';

/** utils */
import { textMedium, textSmall } from '@module-theme/constants';

const Label = styled(TextIntl)({
    ...textMedium,
    padding: '10px 20px',
});

const SubLabel = styled(TextIntl)({
    ...textSmall,
    padding: '10px 20px',
});

type TypeMenuAntd = Required<MenuProps>['items'][number];
export type TypeMenuBase =
    | {
          label: string | React.ReactNode;
          key: string;
          icon?: any;
          children?: TypeMenuBase[];
          type?: 'group';
      }
    | {
          message: MessageDescriptor;
          messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
          key: string;
          icon?: any;
          children?: TypeMenuBase[];
          type: 'intl';
      }
    | {
          type: 'divider';
          key: string;
          icon?: any;
      };

const createItem = (item: TypeMenuBase): TypeMenuAntd => {
    const loop = (child: TypeMenuBase, isChild = true): TypeMenuAntd => {
        const { type, key, icon } = child;
        if (type === 'divider') {
            return {
                key,
                type,
            };
        }
        if (type === 'intl') {
            const { key, icon, children, message, messageOption } = child;
            const Text = isChild ? SubLabel : Label;
            return {
                key,
                label: <Text message={message} messageOption={messageOption} />,
                icon,
                children: !children ? undefined : children.map((child: TypeMenuBase) => loop(child)),
            };
        }

        const { label, children } = child;
        return {
            key,
            label,
            icon,
            children: !children ? undefined : children.map((child: TypeMenuBase) => loop(child)),
        };
    };
    return loop(item, false);
};

interface MenuBaseProps extends Omit<MenuProps, 'items'> {
    items: TypeMenuBase[];
}

export default function MenuBase(props: MenuBaseProps) {
    const { items, ...other } = props;

    const getItems = (): MenuProps['items'] => items.map((item) => createItem(item));

    return <Menu items={getItems()} {...other} />;
}
