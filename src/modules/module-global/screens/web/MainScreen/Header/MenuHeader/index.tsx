/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { Button, Dropdown } from 'antd';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';

/** actions */
import { authAction } from '@module-auth/actions';

/** components */
import { MenuBase } from '@module-base/components';
import type { TypeMenuBase } from '@module-base/components';

/** utils */
import { useAppDispatch } from '@app/store';
import { localeObject } from '@module-language/constants';
import { FlexBase, FlexCustom, themeObject } from '@module-theme/constants';
import { authMessage } from '@module-auth/utils';
import { useLanguage, langMessage } from '@module-language/utils';
import { useTheme, themeMessage } from '@module-theme/utils';

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

    const items: TypeMenuBase[] = React.useMemo(
        () => [
            {
                key: 'lang',
                message: langMessage['module.language.lang'],
                icon: <SettingOutlined />,
                children: [
                    {
                        key: 'lang.vi',
                        message: langMessage['module.language.lang.vi'],
                    },
                    {
                        key: 'lang.en',
                        message: langMessage['module.language.lang.en'],
                    },
                ],
            },
            {
                key: 'divider1',
                type: 'divider',
                message: {},
            },
            {
                key: 'theme',
                message: themeMessage['module.theme.theme'],
                icon: <SettingOutlined />,
                children: [
                    {
                        key: 'theme.light',
                        message: themeMessage['module.theme.theme.light'],
                    },
                    {
                        key: 'theme.dark',
                        message: themeMessage['module.theme.theme.dark'],
                    },
                ],
            },
            {
                key: 'divider2',
                type: 'divider',
                message: {},
            },
            {
                key: 'signout',
                message: authMessage['module.auth.form.title.signout'],
                icon: <SettingOutlined />,
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
            case 'signout': {
                dispatch(authAction.signOut.request({}));
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
