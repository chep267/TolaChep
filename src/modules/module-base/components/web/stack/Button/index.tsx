/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';

/** components */
import { Container } from './Styles';
import Icon from '@module-base/components/web/IconBase';

/** types */
import type { HTMLAttributes } from 'react';
import type { IconBaseType } from '@module-base/components/web/IconBase';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: {
        name: IconBaseType;
        size?: number;
        fill?: string;
        stroke?: string;
    };
}

function Button(props: ButtonProps) {
    const { text = '', icon, children, ...other } = props;

    return (
        <Container {...other}>
            {text ? <span>{text}</span> : null}
            {icon ? <Icon {...icon} /> : null}
            {children}
        </Container>
    );
}

export default Button;
