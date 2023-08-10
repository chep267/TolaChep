/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import styled, { css } from 'styled-components';
import { Button, Spin } from 'antd';

/** types */
import type { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';

const ListBaseElement: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>> = styled.div`
    display: flex;
    position: relative;
    flex: 1;
    align-items: center;
    flex-direction: column;
    overscroll-behavior: none;
    * {
        box-sizing: border-box;
    }
`;

const ListTitleElement = styled.div`
    display: flex;
    justify-content: flex-start;
    width: calc(100% - 24px);
    margin: 6px 12px;
`;

const ListSearchElement = styled.div<{ $colorBg: string }>`
    display: flex;
    position: sticky;
    top: 0;
    padding-bottom: 20px;
    background-color: ${({ $colorBg }) => $colorBg};
    opacity: 1;
    z-index: ${({ theme }) => theme.zIndex.layout};
`;

const ListContentLoadingElement = styled(Spin)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 24px);
    margin: 6px 12px;
`;

const ListContentEmptyElement = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 24px);
    margin: 6px 12px;
`;

const ListContentElementWrap = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

const ListContentElement = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 10px;
    padding: 0 12px 50px;
    overflow: hidden auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
    }
    &:hover::-webkit-scrollbar-thumb {
        background: grey;
    }
`;

const ListContentButtonScroll = styled(Button)<{ $visible: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: ${({ theme }) => theme.zIndex.layout};
    bottom: 15px;
    right: 15px;
    visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
    span {
        font-size: 26px;
    }
`;

const ListItemElement = styled(Button)<{ $isHovered?: boolean; $isSelected?: boolean; $colorBgHover?: string }>`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    border-radius: 6px;
    margin: 2px 0;
    padding: unset;
    line-height: unset;
    ${({ $isHovered, $colorBgHover }) =>
        $isHovered &&
        css`
            border-color: ${$colorBgHover};
        `}
    ${({ $isSelected }) =>
        $isSelected &&
        css`
            &&& {
                background-color: rgba(43, 170, 255, 0.2) !important;
                border-color: rgba(43, 170, 255, 0.2) !important;
            }
        `}
`;

const ListItemBaseElement = styled.div<{ $isHovered?: boolean; $isSelected?: boolean }>`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    padding: 5px 12px;
`;

const NameItemBaseElement = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 10px;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;

    & > span {
        display: inline-block;
        width: calc(100% - 10px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
    }
`;

export {
    ListBaseElement,
    ListTitleElement,
    ListSearchElement,
    ListContentElementWrap,
    ListContentElement,
    ListContentButtonScroll,
    ListContentLoadingElement,
    ListContentEmptyElement,
    ListItemElement,
    ListItemBaseElement,
    NameItemBaseElement,
};
