/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import MenuList from '@module-base/components/stack/MenuList';
import styled from 'styled-components';
import Button from '@module-base/components/stack/Button';
import { Expand } from '@module-base/components/stack/Button/Animation';
import { BorderRadiusCustom, FlexCustom } from '@module-theme/constants';

export const Menu = styled.div(({ theme }) => ({
    ...FlexCustom({ flexDirection: 'column', alignItems: 'flex-end' }),
    zIndex: theme.zIndex.max,
}));

export const ButtonMenu = styled(Button)(({ theme }) => ({
    ...FlexCustom({ overflow: 'hidden' }),
    ...Expand({ borderRadius: '50%', size: theme.iconSize.large + 10 }),
}));

export const MenuContent = styled(MenuList)(({ theme }) => ({
    ...BorderRadiusCustom(6),
    zIndex: theme.zIndex.max,
}));
