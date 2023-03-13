import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function Left(props: Props) {
    const { color = '#F4F7FC', ...others } = props;
    return (
        <svg width={22} height={22} fill="none" viewBox="0 0 22 22" {...others}>
            <path d="m15 3-8 8 8 8" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </svg>
    );
}

export default Left;
