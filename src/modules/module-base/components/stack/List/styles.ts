/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import { APP_BAR_WIDTH, HEADER_HEIGHT } from '@module-global/constants';
import styled from 'styled-components';
import { FlexBase } from '@module-theme/constants';

const getAppBarWidth = (visibleAppBar) => {
    if (visibleAppBar) {
        return {
            width: `${APP_BAR_WIDTH}px`,
            minWidth: `${APP_BAR_WIDTH}px`,
            maxWidth: `${APP_BAR_WIDTH}px`,
        };
    }
    return {
        width: 0,
        minWidth: 0,
        maxWidth: 0,
    };
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    max-height: 100%;
    transition: width 0.35s, min-width 0.35s, max-width 0.35s;
    overflow: hidden;
    @media screen and (max-width: 559px) {
        // 60 + 10 + 480 + 10
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
    }
`;

export const AppBarCover = styled(Wrap)<{ visibleAppBar: boolean }>(({ visibleAppBar, theme }) => ({
    ...getAppBarWidth(visibleAppBar),
    zIndex: theme.zIndex.lv1,
}));

export const AppBar = styled(AppBarCover)(({ theme }) => ({
    position: 'fixed',
    top: HEADER_HEIGHT,
    left: 0,
    bottom: 0,
    zIndex: theme.zIndex.underMax,
}));

export const ListApp = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const AppItem = styled.button<{ isSelected: boolean }>(({ isSelected }) => ({
    ...FlexBase,
    backgroundColor: isSelected ? '#0cfc' : '#c3c3c3',
    width: `${APP_BAR_WIDTH - 15}px`,
    height: `${APP_BAR_WIDTH - 15}px`,
    borderRadius: 8,
    marginTop: 10,
    border: 'none',
    cursor: 'pointer',

    ':hover': {
        backgroundColor: '#0cfc',
    },
}));
