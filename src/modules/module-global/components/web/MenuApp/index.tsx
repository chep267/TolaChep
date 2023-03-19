/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MenuInfo } from 'rc-menu/lib/interface';

/** components */
import { IconBase, MenuBase } from '@module-base/components/web';
import type { TypeMenuBase } from '@module-base/components/web';

/** utils */
import { ListAppBar } from '@module-global/constants';
import { comparePure } from '@module-base/constants';

const MenuCustom = styled(MenuBase)`
    &&& {
        width: 100%;
        height: 100%;
        li {
            height: 60px;
            line-height: 60px;
            padding-left: 10px;
        }
        .ant-menu-item-selected {
            svg[name='feed'],
            svg[name='task'] {
                path {
                    fill: #1668dc;
                    stroke: #1668dc;
                }
            }
            svg[name='messenger'] {
                path {
                    fill: #1668dc;
                }
                circle {
                    fill: #f0f2f5;
                }
            }
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
`;

const AppName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
`;

const MenuApp = React.memo(() => {
    const navigate = useNavigate();

    const onClickItem = ({ key }: MenuInfo) => {
        navigate(key);
    };

    const items: TypeMenuBase[] = React.useMemo(
        () =>
            ListAppBar.map(({ name, path, icon }) => ({
                key: path,
                icon: (
                    <AppIcon>
                        <IconBase name={icon} />
                    </AppIcon>
                ),
                label: <AppName>{name}</AppName>,
            })),
        []
    );

    return <MenuCustom mode="inline" items={items} onClick={onClickItem} />;
}, comparePure());

export default MenuApp;
