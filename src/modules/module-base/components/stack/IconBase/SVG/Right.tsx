import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

function Right(props: Props) {
    const { color = '#2E3A59', ...others } = props;
    return (
        <svg width={22} height={22} fill="none" viewBox="0 0 22 22" {...others}>
            <path d="m7 19 8-8-8-8" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </svg>
    );
}

export default Right;
