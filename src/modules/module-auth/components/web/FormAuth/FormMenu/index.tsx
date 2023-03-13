/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import * as React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { MenuOutlined, GlobalOutlined, SettingOutlined } from '@ant-design/icons';

/** components */

/** utils */
import { useLanguage } from '@module-language/utils';
import { LOCALE_OBJECT } from '@module-language/constants';
import { useTheme } from '@module-theme/utils/themeContext';

// msg
import { langMessage } from '@module-language/utils/msg';
import { themeMessage } from '@module-theme/utils/msg';
import styled from 'styled-components';
import { Expand } from '@module-base/components/stack/Button/Animation';
import { FlexBase, FlexCustom, LIGHT_THEME, DARK_THEME, PURPLE_THEME } from '@module-theme/constants';
import { textMedium, textSmall } from '@module-theme/constants/mixin/Text';
import { TextIntl } from '@module-base/components';

// Styles

const LayoutMenu = styled.div(({ theme }) => ({
    ...FlexCustom({ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start' }),
    zIndex: theme.zIndex.max,
    width: '100%',
    height: 100,
}));

const ButtonMenu = styled(Button)(({ theme }) => {
    const styleDesktop = window.isMobile
        ? {
              borderRadius: '50%',
              width: theme.iconSize.medium * 2,
              height: theme.iconSize.medium * 2,
          }
        : Expand({ borderRadius: '50%', size: theme.iconSize.large * 2 });
    return {
        ...FlexBase,
        ...styleDesktop,
        overflow: 'hidden',
    };
});

const Label = styled(TextIntl)(({ theme }) => ({
    ...textMedium,
    padding: '10px 20px',
}));

const SubLabel = styled(TextIntl)(({ theme }) => ({
    ...textSmall,
    padding: '10px 20px',
}));

function FormMenu() {
    const { locale, toggleLanguage } = useLanguage();
    const { mode, toggleTheme } = useTheme();

    const items: MenuProps['items'] = React.useMemo(() => {
        return [
            {
                key: 'lang',
                label: <Label message={langMessage['module.language.lang']} />,
                icon: <GlobalOutlined />,
                children: [
                    {
                        key: 'lang-vi',
                        label: (
                            <SubLabel
                                onClick={() => toggleLanguage(LOCALE_OBJECT.VI)}
                                message={langMessage['module.language.lang.vi']}
                            />
                        ),
                    },
                    {
                        key: 'lang-en',
                        label: (
                            <SubLabel
                                onClick={() => toggleLanguage(LOCALE_OBJECT.EN)}
                                message={langMessage['module.language.lang.en']}
                            />
                        ),
                    },
                ],
            },
            {
                type: 'divider',
            },
            {
                key: 'theme',
                label: <Label message={themeMessage['module.theme.theme']} />,
                icon: <SettingOutlined />,
                children: [
                    {
                        key: 'theme-light',
                        label: (
                            <SubLabel
                                onClick={() => toggleTheme(LIGHT_THEME)}
                                message={themeMessage['module.theme.theme.light']}
                            />
                        ),
                    },
                    {
                        key: 'theme-purple',
                        label: (
                            <SubLabel
                                onClick={() => toggleTheme(PURPLE_THEME)}
                                message={themeMessage['module.theme.theme.purple']}
                            />
                        ),
                    },
                    {
                        key: 'theme-dark',
                        label: (
                            <SubLabel
                                onClick={() => toggleTheme(DARK_THEME)}
                                message={themeMessage['module.theme.theme.dark']}
                            />
                        ),
                    },
                ],
            },
        ];
    }, [locale, mode]);

    return (
        <LayoutMenu>
            <Dropdown trigger={['click']} menu={{ items }} placement="bottomRight">
                <ButtonMenu>
                    <MenuOutlined />
                </ButtonMenu>
            </Dropdown>
        </LayoutMenu>
    );
}

export default FormMenu;
