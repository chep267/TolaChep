/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { Button, Dropdown } from 'antd';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';

/** components */
import { MenuBase } from '@module-base/components/web';

/** utils */
import { localeObject } from '@module-language/constants';
import { FlexBase, FlexCustom, themeObject } from '@module-theme/constants';
import { useLanguage, langMessage } from '@module-language/utils';
import { useTheme, themeMessage } from '@module-theme/utils';

/** type */
import type { MenuInfo } from 'rc-menu/es/interface';
import type { MenuBaseType } from '@module-base/models';

const LayoutMenu = styled.div(({ theme }) => ({
    ...FlexCustom({ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start' }),
    zIndex: theme.zIndex.max,
    width: '100%',
    height: 100,
}));

const ButtonMenu = styled(Button)(({ theme }) => ({
    ...FlexBase,
    borderRadius: '50%',
    width: theme.iconSize.medium * 2,
    height: theme.iconSize.medium * 2,
    overflow: 'hidden',
}));

function FormMenu() {
    const { toggleLanguage } = useLanguage();
    const { toggleTheme } = useTheme();

    const items: MenuBaseType[] = React.useMemo(
        () => [
            {
                key: 'lang',
                type: 'intl',
                message: langMessage['module.language.lang'],
                icon: <SettingOutlined />,
                children: [
                    {
                        key: 'lang.vi',
                        type: 'intl',
                        message: langMessage['module.language.lang.vi'],
                    },
                    {
                        key: 'lang.en',
                        type: 'intl',
                        message: langMessage['module.language.lang.en'],
                    },
                ],
            },
            {
                key: 'divider1',
                type: 'divider',
            },
            {
                key: 'theme',
                type: 'intl',
                message: themeMessage['module.theme.theme'],
                icon: <SettingOutlined />,
                children: [
                    {
                        key: 'theme.light',
                        type: 'intl',
                        message: themeMessage['module.theme.theme.light'],
                    },
                    {
                        key: 'theme.dark',
                        type: 'intl',
                        message: themeMessage['module.theme.theme.dark'],
                    },
                ],
            },
        ],
        []
    );

    const onClickMenuItem = ({ key }: MenuInfo) => {
        switch (key) {
            case 'lang.vi': {
                toggleLanguage(localeObject.vi);
                break;
            }
            case 'lang.en': {
                toggleLanguage(localeObject.en);
                break;
            }
            case 'theme.light': {
                toggleTheme(themeObject.light);
                break;
            }
            case 'theme.dark': {
                toggleTheme(themeObject.dark);
                break;
            }
            default:
                break;
        }
    };

    const renderMenu = () => <MenuBase onClick={onClickMenuItem} items={items} />;

    return (
        <LayoutMenu>
            <Dropdown trigger={['click']} placement="bottomRight" dropdownRender={renderMenu}>
                <ButtonMenu>
                    <MenuOutlined />
                </ButtonMenu>
            </Dropdown>
        </LayoutMenu>
    );
}

export default FormMenu;
