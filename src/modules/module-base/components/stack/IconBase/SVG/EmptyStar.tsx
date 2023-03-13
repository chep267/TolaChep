import * as React from 'react';

interface Props {
    color?: string;
    width?: number;
    height?: number;
}

function EmptyStar(props: Props) {
    return (
        <svg width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M9.99984 1.66675L12.5748 6.88341L18.3332 7.72508L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72508L7.42484 6.88341L9.99984 1.66675Z"
                stroke="#BFBFBF"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
export default EmptyStar;
