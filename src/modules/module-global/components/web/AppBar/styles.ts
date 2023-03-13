/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import styled from 'styled-components';

/** components */
import { Sider } from '@module-base/components/Layout';

/** utils */
import { APP_BAR_WIDTH } from '@module-global/constants';
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

export const AppBar = styled(Sider)<{ visibleAppBar: boolean }>(({ visibleAppBar }) => ({
    ...getAppBarWidth(visibleAppBar),
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
