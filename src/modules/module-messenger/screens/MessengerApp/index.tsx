/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Layout } from 'antd';
import styled, { css } from 'styled-components';

/** utils */
import { AppSizeCustom } from '@module-global/constants';

/** components */
const { Content, Sider } = Layout;

const resize = (width: number = AppSizeCustom.messenger.leftWidth.max) => css`
    flex: 0 0 ${width}px !important;
    max-width: ${width}px !important;
    min-width: ${width}px !important;
    width: ${width}px !important;
`;

const LayoutMessenger = styled(Layout)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${AppSizeCustom.global.padding}px 0;
    background: transparent;
    overflow: hidden;
`;

const LayoutContent = styled(Layout)`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 ${AppSizeCustom.global.padding}px;
    overflow: hidden;
`;

const MessengerContent = styled(Content)`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: grey;
    border-radius: 12px;
`;

const LeftRight = styled(Sider)`
    display: flex;
    ${resize()};
    height: 100%;
    transition:
        width 0.35s,
        min-width 0.35s,
        max-width 0.35s;
    border-radius: 12px;
    overflow: hidden;
    overscroll-behavior: none;
    background-color: #cfcfcf;
    @media screen and (max-width: ${AppSizeCustom.screen.sm}) {
        display: none !important;
    }
`;

const MessengerLeft = styled(LeftRight)`
    margin-left: ${AppSizeCustom.global.padding}px;
    @media screen and (max-width: ${AppSizeCustom.screen.xxl}) {
        ${resize(AppSizeCustom.messenger.leftWidth.min)}
    }
    @media screen and (max-width: ${AppSizeCustom.screen.lg}) {
        ${resize(AppSizeCustom.messenger.leftWidth.mini)}
    }
`;

const MessengerRight = styled(LeftRight)`
    margin-right: ${AppSizeCustom.global.padding}px;
    @media screen and (max-width: ${AppSizeCustom.screen.xxl}) {
        ${resize(AppSizeCustom.messenger.leftWidth.min)}
    }
    @media screen and (max-width: ${AppSizeCustom.screen.xls}) {
        position: absolute !important;
        top: 20px;
        right: 10px;
        bottom: 20px;
        height: calc(100% - 40px);
        ${resize(AppSizeCustom.messenger.leftWidth.max)}
    }
`;

function MessengerScreen() {
    return (
        <LayoutMessenger hasSider>
            <MessengerLeft />
            <LayoutContent>
                <MessengerContent />
            </LayoutContent>
            <MessengerRight />
        </LayoutMessenger>
    );
}

export default MessengerScreen;
