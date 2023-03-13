import * as React from 'react';

interface Props {
    color?: string;
}

function Notify(props: Props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M18 10a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9Z"
                stroke="#fff"
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M12 4V2" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
            <path d="M13.73 22a1.999 1.999 0 0 1-3.46 0" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default Notify;
