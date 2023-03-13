/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';
import {
    BODY_PADDING,
    MESSENGER_LEFT_MAX_WIDTH,
    MESSENGER_LEFT_MIN_WIDTH,
    MESSENGER_CENTER_MAX_WIDTH,
    MESSENGER_CENTER_MIN_WIDTH,
    HEADER_HEIGHT,
    BODY_MAX_WIDTH,
    MESSENGER_CENTER_NORMAL_WIDTH,
    MESSENGER_LEFT_MAX_WIDTH_RESIZE,
} from '@module-global/constants';
import { SafeLayout } from '@module-base/components/Layout';

export const MessengerContainer = styled(SafeLayout)`
    padding: ${BODY_PADDING}px 0;
    max-width: ${BODY_MAX_WIDTH}px;
`;

const LeftRight = styled(SafeLayout)`
    flex: 1 1 ${MESSENGER_LEFT_MAX_WIDTH}px;
    max-width: ${MESSENGER_LEFT_MAX_WIDTH}px;
    min-width: ${MESSENGER_LEFT_MAX_WIDTH}px;
    height: calc(100vh - ${HEADER_HEIGHT}px - 2 * ${BODY_PADDING}px);
    transition: width 0.35s, min-width 0.35s, max-width 0.35s;
    border-radius: 12px;
    overflow: hidden;
    overscroll-behavior: none;
    background-color: #cfcfcf;
`;

export const MessengerLeft = styled(LeftRight)`
    margin-left: ${BODY_PADDING}px;
    @media screen and (max-width: 1035px) {
        // 60 + 10 + 360 + 480 + 10
        width: ${MESSENGER_LEFT_MAX_WIDTH_RESIZE}px;
        min-width: ${MESSENGER_LEFT_MAX_WIDTH_RESIZE}px;
        max-width: ${MESSENGER_LEFT_MAX_WIDTH_RESIZE}px;
    }
    @media screen and (max-width: 650px) {
        margin-left: 0;
        width: 0;
        min-width: 0;
        max-width: 0;
    }
`;

export const MessengerRight = styled(LeftRight)`
    margin-right: ${BODY_PADDING}px;
    @media screen and (max-width: 1535px) {
        flex: 1 1 ${MESSENGER_LEFT_MIN_WIDTH}px;
        max-width: ${MESSENGER_LEFT_MIN_WIDTH}px;
        min-width: ${MESSENGER_LEFT_MIN_WIDTH}px;
    }
    @media screen and (max-width: 1200px) {
        position: absolute;
        top: ${HEADER_HEIGHT}px;
        right: ${BODY_PADDING}px;
        bottom: 100px;
        height: calc(100vh - ${HEADER_HEIGHT + 2 * BODY_PADDING + 200}px);
        transition: none;
    }
`;

export const MessengerBody = styled(SafeLayout)`
    flex: 1 1 ${MESSENGER_CENTER_MIN_WIDTH}px;
    min-width: ${MESSENGER_CENTER_NORMAL_WIDTH}px;
    justify-content: center;
    padding: 0 ${BODY_PADDING}px;
    overflow: hidden;
    transition: width 0.35s, min-width 0.35s, max-width 0.35s;
    @media screen and (max-width: 1450px) {
        min-width: ${MESSENGER_CENTER_MIN_WIDTH}px;
    }
    @media screen and (max-width: 1200px) {
        min-width: 600px;
    }
    @media screen and (max-width: 1000px) {
        min-width: ${MESSENGER_CENTER_MIN_WIDTH}px;
    }
`;

export const Conversation = styled(SafeLayout)`
    width: 100%;
    max-width: ${MESSENGER_CENTER_MAX_WIDTH}px;
    background-color: grey;
    border-radius: 12px;
`;
