/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { Layout } from 'antd';
import styled, { css } from 'styled-components';

/** utils */
import { AppSizeCustom } from '@module-global/constants';

/** components */
const { Content } = Layout;

const resize = (width: number = AppSizeCustom.messenger.leftWidth.max) => css`
    flex: 0 0 ${width}px !important;
    max-width: ${width}px !important;
    min-width: ${width}px !important;
    width: ${width}px !important;
`;

const MessengerLayout = styled(Layout)`
    display: flex;
    width: 100%;
    height: 100%;
    padding: ${AppSizeCustom.global.padding}px 0;
    background: transparent;
    overflow: hidden;
`;

const LayoutContent = styled(Layout)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 ${AppSizeCustom.global.padding}px;
    overflow: hidden;
`;

const MessengerContent = styled(Content)<{ $colorBg: string }>`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1300px;
    border-radius: 12px;
    background-color: ${(props) => props.$colorBg};
`;

const LeftRight = styled(Content)<{ $colorBg: string }>`
    display: flex;
    ${resize()};
    height: 100%;
    transition:
        width 0.35s,
        min-width 0.35s,
        max-width 0.35s;
    border-radius: 12px;
    background-color: ${(props) => props.$colorBg};
    overflow: hidden;
    overscroll-behavior: none;
    @media screen and (max-width: ${AppSizeCustom.screen.sm}) {
        display: none !important;
    }
`;

const MessengerLeft = styled(LeftRight)<{ $colorBg?: string }>`
    margin-left: ${AppSizeCustom.global.padding}px;
    flex-direction: column;
    @media screen and (max-width: ${AppSizeCustom.screen.xxl}) {
        ${resize(AppSizeCustom.messenger.leftWidth.min)}
    }
    @media screen and (max-width: ${AppSizeCustom.screen.lg}) {
        ${resize(AppSizeCustom.messenger.leftWidth.mini)}
    }
`;

const MessengerRight = styled(LeftRight)<{ $colorBg?: string }>`
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

export { MessengerLeft, MessengerRight, MessengerContent, MessengerLayout, LayoutContent };
