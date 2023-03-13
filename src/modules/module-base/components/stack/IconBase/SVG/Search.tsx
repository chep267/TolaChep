import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function Search(props: Props) {
    const { color = '#F4F7FC', ...others } = props;
    return (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path
                d="M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM20 20l-4.197-4.197"
                stroke={color}
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Search;
