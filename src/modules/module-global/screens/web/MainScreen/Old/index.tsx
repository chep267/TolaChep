/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

/** components */
import { MainContainer, MainBody, MainHeader, MainSider, MainContent } from './styles';

function MainScreen(props: any) {
    const { element } = props;

    return (
        <MainContainer>
            <MainHeader />
            <MainBody>
                <MainSider />
                <MainContent>{element}</MainContent>
            </MainBody>
        </MainContainer>
    );
}

export default MainScreen;
