/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

/** components */
import { FeedContainer, FeedLeft, FeedRight, FeedBody, FeedContent } from './styles';

/** utils */

function FeedScreen() {
    return (
        <FeedContainer>
            <FeedLeft>FeedLeft</FeedLeft>
            <FeedBody>
                <FeedContent>{/*<Content1 />*/}</FeedContent>
            </FeedBody>
            <FeedRight>FeedRight</FeedRight>
        </FeedContainer>
    );
}

export default FeedScreen;
