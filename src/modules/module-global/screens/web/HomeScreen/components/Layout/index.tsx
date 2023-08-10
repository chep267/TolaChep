/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import { Layout } from 'antd';
import styled, { css } from 'styled-components';

/** constants */
import { AppSizeCustom } from '@module-global/constants';

/** types */
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { BasicProps } from 'antd/es/layout/layout';
import type { SiderProps } from 'antd/es/layout/Sider';

const SiderLayout: ForwardRefExoticComponent<SiderProps & RefAttributes<HTMLDivElement>> = styled(Layout.Sider)`
    &&& {
        position: sticky;
        height: calc(100vh - ${AppSizeCustom.global.headerHeight}px);
        min-height: calc(100vh - ${AppSizeCustom.global.headerHeight}px);
        max-height: calc(100vh - ${AppSizeCustom.global.headerHeight}px);
        overflow: hidden auto;
        overscroll-behavior: none;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    }
`;

const HeaderLayout: ForwardRefExoticComponent<BasicProps & { $colorBg: string } & RefAttributes<HTMLElement>> = styled(
    Layout.Header
)`
    &&& {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        background-color: ${(props) => props.$colorBg};
        top: 0;
        height: ${AppSizeCustom.global.headerHeight}px;
        min-height: ${AppSizeCustom.global.headerHeight}px;
        max-height: ${AppSizeCustom.global.headerHeight}px;
        padding-inline: 25px;
        -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
        z-index: 999;
        overflow: hidden;
    }
`;
const HeaderLeft = styled.div`
    display: flex;
    flex: 1 1 30%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    span {
        margin-left: 10px;
        width: 100%;
        font-weight: bold;
        font-size: 20px;
    }
`;
const HeaderRight = styled.div`
    display: flex;
    flex: 1 1 30%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;

    div[class*='ant-space-item'] {
        display: flex;
    }
`;

const ContentLayout = styled(Layout.Content)`
    &&& {
        position: relative;
        width: 100%;
        overflow: hidden auto;
        scroll-behavior: smooth;
        overscroll-behavior: none;
        ${() => {
            const height = `calc(100vh - ${AppSizeCustom.global.headerHeight})`;
            return css`
                height: ${height};
                min-height: ${height};
                max-height: ${height};
            `;
        }}
    }
`;

export { SiderLayout, HeaderLayout, HeaderRight, HeaderLeft, ContentLayout };
