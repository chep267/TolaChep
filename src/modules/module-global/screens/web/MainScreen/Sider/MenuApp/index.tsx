/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { ListAppBar } from '@module-global/constants';
import type { MenuProps } from 'antd';
import { comparePure } from '@module-base/constants';
import { useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

type MenuItem = Required<MenuProps>['items'][number];

const MenuCustom = styled(Menu)`
    &&& {
        width: 100%;
        height: 100%;
        li {
            height: 60px;
            line-height: 60px;
            padding-left: 10px;
        }
    }
`;

const AppIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: grey;
`;

const AppName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

const MenuApp = React.memo(() => {
    const navigate = useNavigate();

    const onClickItem = ({ key }: MenuInfo) => {
        navigate(key);
    };

    const getItem = (): MenuProps['items'] =>
        ListAppBar.reduce((items, { name, path }) => {
            items.push({
                key: path,
                icon: <AppIcon>name</AppIcon>,
                children: undefined,
                label: <AppName>{name}</AppName>,
            });
            return items;
        }, [] as MenuItem[]);

    return <MenuCustom mode="inline" items={getItem()} onClick={onClickItem} />;
}, comparePure());

export default MenuApp;
