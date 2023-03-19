/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React from 'react';

/** components */
import { Item } from '../Styles';
import Icon, { IconsType } from '@module-base/components/web/IconBase';

/** utils */
import { emptyFunction, emptyObject } from '@module-base/constants';

interface ButtonProps {
    itemClassName?: string;
    overlayClassName?: string;
    isDisabled?: boolean;
    onPress?(): void;
    text?: string;
    mode?: string;
    icon?: IconsType;
    size?: number;
    style?: object;
    className?: string;
}

export default function MenuItem(props: ButtonProps) {
    const {
        className = '',
        overlayClassName = '',
        itemClassName = '',
        style = emptyObject,
        onPress = emptyFunction,
        mode,
        icon,
        size,
    } = props;

    return (
        <Item className={`${className} ${overlayClassName}`} onClick={onPress} style={style}>
            {mode === 'text' ? <span className={itemClassName}>text</span> : null}
            {icon ? <Icon name={icon} size={size} /> : null}
        </Item>
    );
}
