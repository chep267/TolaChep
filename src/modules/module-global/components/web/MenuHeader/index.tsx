/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { Button, Dropdown } from 'antd';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import { MenuBase } from '@module-base/components/web';

/** constants */
import { localeObject } from '@module-language/constants';
import { FlexBase, FlexCustom, themeObject } from '@module-theme/constants';

/** utils */
import { useAppDispatch } from '@module-global/utils';
import { authMessage } from '@module-auth/utils';
import { useLanguage, langMessage } from '@module-language/utils';
import { useTheme, themeMessage } from '@module-theme/utils';

/** types */
import type { MenuInfo } from 'rc-menu/lib/interface';
import type { MenuBaseType } from '@module-base/models';

const LayoutMenu = styled.div(({ theme }) => ({
    ...FlexCustom({ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start' }),
    zIndex: theme.zIndex.max,
    width: '100%',
}));

const ButtonMenu = styled(Button)(({ theme }) => ({
    ...FlexBase,
    borderRadius: '50%',
    width: theme.iconSize.medium * 2,
    height: theme.iconSize.medium * 2,
    overflow: 'hidden',
}));

export default function MenuHeader() {
    const { toggleLanguage } = useLanguage();
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const items: MenuBaseType[] = React.useMemo(() => {
        const icon = <SettingOutlined />;
        return [
            {
                key: 'lang',
                type: 'intl',
                message: langMessage['module.language.lang'],
                icon,
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
                icon,
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
                    {
                        key: 'theme.purple',
                        type: 'intl',
                        message: themeMessage['module.theme.theme.purple'],
                    },
                ],
            },
            {
                key: 'divider2',
                type: 'divider',
            },
            {
                key: 'signout',
                type: 'intl',
                message: authMessage['module.auth.form.title.signout'],
                icon,
            },
        ];
    }, []);

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
            case 'theme.purple': {
                toggleTheme(themeObject.purple);
                break;
            }
            case 'signout': {
                dispatch(authAction.signOut.request(null));
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
