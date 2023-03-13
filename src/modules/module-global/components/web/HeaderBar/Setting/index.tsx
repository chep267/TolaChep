/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { connect } from 'react-redux';

/** actions */
import { AUTH_ACTION } from '@module-auth/actions';

/** components */
// import { ListItemIcon, Divider, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
// import { Settings, ExpandMore, Language } from '@mui/icons-material';
import MenuList from '@module-base/components/stack/MenuList';

/** utils */
import { useLanguage } from '@module-language/utils';
import { useTheme } from '@module-theme/utils/themeContext';
import { LOCALE_OBJECT } from '@module-language/constants';

/** message */
import { langMessage } from '@module-language/utils/msg';
import { themeMessage } from '@module-theme/utils/msg';

/** styles */
import { Menu as MenuContainer, ButtonMenu } from './Styles';
import { LIGHT_THEME } from '@module-theme/constants';

type Props = {
    doSignOut(): void;
};

function Setting(props: Props) {
    const { doSignOut } = props;
    const intl = useIntl();
    const { locale, toggleLanguage } = useLanguage();
    const { toggleTheme, theme } = useTheme();

    const [menu, setMenu] = useState<null | HTMLElement>(null);

    const onChangeLanguage = () => toggleLanguage(locale === LOCALE_OBJECT.VI ? LOCALE_OBJECT.EN : LOCALE_OBJECT.VI);

    const onChangeTheme = () => toggleTheme(LIGHT_THEME);

    // const data = [
    //     { id: 'lang', title: intl.formatMessage(msg.lang) },
    //     { id: 'theme', title: 'Giao diện' },
    //     { id: 'test', title: 'abc' },
    // ];

    const onToggleMenu = (event: React.MouseEvent<HTMLElement>) => {
        if (!menu) setMenu(event.currentTarget);
        else setMenu(null);
    };

    return (
        <MenuContainer>
            <ButtonMenu
                icon={{ name: 'menu', size: theme.iconSize.medium, fill: theme.color.icon.base }}
                onClick={onToggleMenu}
            />
            {/*<MenuList menu={menu} onCloseMenu={onToggleMenu}>*/}
            {/*    <Accordion style={{ margin: 0, boxShadow: 'none' }}>*/}
            {/*        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">*/}
            {/*            <ListItemIcon style={{ minWidth: 35 }}>*/}
            {/*                <Language />*/}
            {/*            </ListItemIcon>*/}
            {/*            <Typography style={{ marginRight: 30 }}>*/}
            {/*                {intl.formatMessage(langMessage['module.language.lang'])}*/}
            {/*            </Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeLanguage}>*/}
            {/*            <Typography>{intl.formatMessage(langMessage['module.language.lang.vi'])}</Typography>*/}
            {/*        </AccordionDetails>*/}
            {/*        <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeLanguage}>*/}
            {/*            <Typography>{intl.formatMessage(langMessage['module.language.lang.en'])}</Typography>*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Divider />*/}
            {/*    <Accordion style={{ margin: 0, boxShadow: 'none' }}>*/}
            {/*        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">*/}
            {/*            <ListItemIcon style={{ minWidth: 35 }}>*/}
            {/*                <Settings />*/}
            {/*            </ListItemIcon>*/}
            {/*            <Typography style={{ marginRight: 30 }}>*/}
            {/*                {intl.formatMessage(themeMessage['module.theme.theme'])}*/}
            {/*            </Typography>*/}
            {/*        </AccordionSummary>*/}
            {/*        <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeTheme}>*/}
            {/*            <Typography>{intl.formatMessage(themeMessage['module.theme.theme.light'])}</Typography>*/}
            {/*        </AccordionDetails>*/}
            {/*        <AccordionDetails style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onChangeTheme}>*/}
            {/*            <Typography>{intl.formatMessage(themeMessage['module.theme.theme.dark'])}</Typography>*/}
            {/*        </AccordionDetails>*/}
            {/*    </Accordion>*/}
            {/*    <Accordion*/}
            {/*        style={{ margin: 0, boxShadow: 'none', textAlign: 'center', cursor: 'pointer' }}*/}
            {/*        onClick={doSignOut}>*/}
            {/*        <Typography style={{ marginRight: 30 }}>Sign out</Typography>*/}
            {/*    </Accordion>*/}
            {/*</MenuList>*/}
        </MenuContainer>
    );
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        doSignOut: () => dispatch({ type: AUTH_ACTION.SIGN_OUT.REQUEST, payload: {} }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
