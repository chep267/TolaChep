/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import React, { ComponentPropsWithoutRef } from 'react';

/** components */
import { Container } from './Styles';
import Icon, { IconBaseType } from '@module-base/components/web/IconBase';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: {
        name: IconBaseType;
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
