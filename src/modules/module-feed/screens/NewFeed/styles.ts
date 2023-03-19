/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';

/** components */
import { SafeLayout, ScrollBar } from '@module-base/components/web/Layout';

/** utils */
import {
    BODY_PADDING,
    MESSENGER_CENTER_MAX_WIDTH,
    MESSENGER_CENTER_MIN_WIDTH,
    MESSENGER_LEFT_MAX_WIDTH,
    HEADER_HEIGHT,
} from '@module-global/constants';

export const FeedContainer = styled(ScrollBar)({
    padding: BODY_PADDING,
    flex: '1 1 500px',
    height: 'auto',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
});

const LeftRight = styled(SafeLayout)`
    position: sticky;
    top: ${HEADER_HEIGHT}px;
    bottom: 0;
    flex: 1 1 ${MESSENGER_LEFT_MAX_WIDTH}px;
    max-width: ${MESSENGER_LEFT_MAX_WIDTH}px;
    min-width: ${MESSENGER_LEFT_MAX_WIDTH}px;
    height: calc(100vh - ${HEADER_HEIGHT}px - 2 * ${BODY_PADDING}px);
    max-height: calc(100vh - ${HEADER_HEIGHT}px - 2 * ${BODY_PADDING}px);
    min-height: calc(100vh - ${HEADER_HEIGHT}px - 2 * ${BODY_PADDING}px);

    transition: width 0.35s, min-width 0.35s, max-width 0.35s;
    border-radius: 12px;
    overflow: hidden;
    background-color: #cfcfcf;
`;

export const FeedLeft = styled(LeftRight)`
    @media screen and (max-width: 860px) {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
    }
`;

export const FeedRight = styled(LeftRight)`
    @media screen and (max-width: 1200px) {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
    }
`;

export const FeedBody = styled(SafeLayout)({
    flex: '1 1 500px',
    justifyContent: 'center',
    padding: `0 ${BODY_PADDING}px`,
    backgroundColor: 'red',
    height: 3000,
});

export const FeedContent = styled(SafeLayout)({
    maxWidth: MESSENGER_CENTER_MAX_WIDTH,
    minWidth: MESSENGER_CENTER_MIN_WIDTH,
    borderRadius: 12,
    backgroundColor: 'grey',
    height: 3000,
});
