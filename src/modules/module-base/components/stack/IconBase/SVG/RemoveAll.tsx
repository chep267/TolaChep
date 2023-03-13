import * as React from 'react';

interface Props {
    color?: string;
}

function Icon(props: Props) {
    return (
        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M6 1H3a2 2 0 00-2 2v12a2 2 0 002 2h3M13 5l4 4-4 4M17 9H5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Icon;
