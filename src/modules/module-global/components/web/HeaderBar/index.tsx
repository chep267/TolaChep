/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';
import { connect } from 'react-redux';

/** components */
import { BtnMenu, HeaderBar, BtnSetting } from './styles';

/** utils */
import { useGlobalUI } from '@module-global/utils';

function HeaderBase(props: any) {
    const { name, className } = props;
    const { appBar } = useGlobalUI();
    const { visible, toggleVisible } = appBar;

    return (
        <HeaderBar className={className}>
            <BtnMenu onClick={toggleVisible} title="Menu">
                {/*{visible ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}*/}
            </BtnMenu>
            <h2>{name}</h2>
            <BtnSetting />
        </HeaderBar>
    );
}

function mapStateToProps() {
    return {
        name: 'dong',
    };
}

function mapDispatchToProps() {
    return {
        doSignOut: () => {
            // dispatch({ type: LOGIN_ACTION.SIGN_OUT });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBase);
