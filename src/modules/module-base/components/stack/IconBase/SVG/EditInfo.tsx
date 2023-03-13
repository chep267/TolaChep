import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function EditInfo(props: Props) {
    const { color = '#2E3A59', ...others } = props;
    return (
        <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path
                d="M4.604 21.436c-.292 0-.57-.123-.768-.34a1.03 1.03 0 0 1-.274-.795l.256-2.806 11.79-11.786 3.684 3.684L7.505 21.177l-2.806.255a.998.998 0 0 1-.095.004Zm15.423-12.78-3.683-3.683 2.21-2.21a1.042 1.042 0 0 1 1.473 0l2.21 2.21a1.042 1.042 0 0 1 0 1.474l-2.209 2.208v.001Z"
                fill={color}
            />
        </svg>
    );
}

export default EditInfo;
