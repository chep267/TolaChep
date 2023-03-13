/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

/** components */
import { MessengerContainer, MessengerLeft, MessengerBody, MessengerRight, Conversation } from './styles';

function MessengerScreen() {
    return (
        <MessengerContainer>
            <MessengerLeft />
            <MessengerBody>
                <Conversation />
            </MessengerBody>
            <MessengerRight />
        </MessengerContainer>
    );
}

export default MessengerScreen;
