import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function Edit(props: Props) {
    const { color = '#434343', ...others } = props;
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path
                d="M4.833 15.598v3.569h3.57l8.92-8.922L20 7.57 16.431 4l-2.676 2.676-8.922 8.922ZM17.324 10.244l-3.569-3.568"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Edit;
