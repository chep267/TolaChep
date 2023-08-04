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
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { MenuProps } from 'antd';
import type { MenuAntdType, MenuBaseProps, MenuBaseType, MenuBaseRef } from '@module-base/models';

/** styles */
const MenuBaseElement: ForwardRefExoticComponent<MenuProps & RefAttributes<MenuBaseRef>> = styled(Menu)`
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

const MenuBase = React.forwardRef<MenuBaseRef, MenuBaseProps>((props, ref) => {
    const { items, ...menuProps } = props;

    const itemsCustom: MenuProps['items'] = React.useMemo(() => items.map((item) => createItem(item)), [items]);

    return <MenuBaseElement ref={ref} items={itemsCustom} {...menuProps} />;
});

MenuBase.displayName = 'MenuBase';
export default MenuBase;
