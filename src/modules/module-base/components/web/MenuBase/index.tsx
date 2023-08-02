/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';

/** components */
import { Menu } from 'antd';
import { TextBase } from '@module-base/components/web';

/** constants */
import { getMixinTextStyle } from '@module-theme/constants';

/** types */
import type { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { MenuProps, MenuRef } from 'antd';
import type { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat';
import type { MessageDescriptor } from '@formatjs/intl/src/types';

type MenuAntdType = Required<MenuProps>['items'][number];
type MenuBaseRef = MenuRef;
type MenuBaseType =
    | {
          label: ReactNode;
          key: string;
          icon?: ReactNode;
          children?: MenuBaseType[];
          type?: 'group';
      }
    | {
          message: MessageDescriptor;
          messageOption?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>;
          key: string;
          icon?: ReactNode;
          children?: MenuBaseType[];
          type: 'intl';
      }
    | {
          type: 'divider';
          key: string;
          icon?: ReactNode;
          children?: MenuBaseType[];
      };
interface MenuBaseProps extends Omit<MenuProps, 'items'> {
    items: MenuBaseType[];
}

/** styles */
const MenuBaseElement: ForwardRefExoticComponent<MenuBaseProps & RefAttributes<MenuBaseRef>> = styled(Menu)`
    div[class*='ant-menu-item-icon'] {
        height: 100% !important;
    }
`;
const Label = styled(TextBase)({
    ...getMixinTextStyle('medium'),
    padding: '10px 20px',
});
const SubLabel = styled(TextBase)({
    ...getMixinTextStyle('small'),
    padding: '10px 20px',
});

const createItem = (item: MenuBaseType): MenuAntdType => {
    const loop = (child: MenuBaseType, isChild = true): MenuAntdType => {
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
                children: !children ? undefined : children.map((child) => loop(child)),
            };
        }

        const { label, children } = child;
        return {
            key,
            label,
            icon,
            children: !children ? undefined : children.map((child) => loop(child)),
        };
    };
    return loop(item, false);
};

const MenuBase = React.forwardRef((props: MenuBaseProps, ref: MenuBaseRef) => {
    const { items, ...menuProps } = props;

    const itemsCustom: MenuProps['items'] = React.useMemo(() => items.map((item) => createItem(item)), [items]);

    return <MenuBaseElement ref={ref} items={itemsCustom} {...menuProps} />;
});

MenuBase.displayName = 'MenuBase';
export type { MenuBaseProps, MenuBaseType, MenuBaseRef };
export default MenuBase;
