import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function Delete(props: Props) {
    const { color, ...others } = props;
    return (
        <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path
                d="M17.708 22.917H7.292a2.083 2.083 0 0 1-2.084-2.084V7.293H3.125V5.209h4.167V4.167c0-1.15.932-2.083 2.083-2.083h6.25c1.15 0 2.083.932 2.083 2.083v1.042h4.167v2.083h-2.083v13.541c0 1.151-.933 2.084-2.084 2.084ZM7.292 7.292v13.542h10.416V7.292H7.292Zm2.083-3.125v1.042h6.25V4.167h-6.25Z"
                fill={color || '#2E3A59'}
            />
        </svg>
    );
}

export default Delete;
