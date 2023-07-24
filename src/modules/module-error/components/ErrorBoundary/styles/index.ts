/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import styled from 'styled-components';
import { Button } from 'antd';

/** components */
import { PureContainer, TextIntl } from '@module-base/components/web';

/** utils */
import { FlexBase } from '@module-theme/constants';

export const FallBackLayout = styled.div({
    ...FlexBase,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
});

export const Container = styled(PureContainer)(({ theme }) => ({
    ...FlexBase,
    flexDirection: 'column',
    zIndex: theme.zIndex.max,
    img: {
        width: 'auto',
        height: 150,
        borderRadius: '50%',
    },
}));

export const ButtonRetry = styled(Button)({
    margin: '40px 0 20px',
});

export const Title = styled(TextIntl)(({ theme }) => ({
    zIndex: theme.zIndex.max,
    fontSize: theme.fontSize.huge,
    margin: '20px 0 10px 0',
}));

export const Content = styled(TextIntl)(({ theme }) => ({
    zIndex: theme.zIndex.max,
    fontSize: theme.fontSize.medium,
}));

export const TextAutoReload = styled(TextIntl)(({ theme }) => ({
    zIndex: theme.zIndex.max,
    color: `#fff !important`,
    fontSize: theme.fontSize.large,
}));
