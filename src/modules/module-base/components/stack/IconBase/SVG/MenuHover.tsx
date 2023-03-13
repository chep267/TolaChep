import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function MenuHover(props: Props) {
    const { color = '#2E3A59', ...others } = props;
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path d="M17 20h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4v-4h4v4Zm-6 0H7v-4h4v4Zm6-6h-4V4h4v4Zm-6 0H7V4h4v4Z" fill={color} />
        </svg>
    );
}

export default MenuHover;
