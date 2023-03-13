/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

import React, { ComponentPropsWithoutRef } from 'react';

/** components */
import { Container } from './Styles';
import Icon, { IconsType } from '@module-base/components/stack/IconBase';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: {
        name: IconsType;
        size?: number;
        fill?: string;
        stroke?: string;
    };
}

export default function Button(props: ButtonProps) {
    const { text = '', icon, children, ...other } = props;

    return (
        <Container {...other}>
            {text ? <span>{text}</span> : null}
            {icon ? <Icon {...icon} /> : null}
            {children}
        </Container>
    );
}
