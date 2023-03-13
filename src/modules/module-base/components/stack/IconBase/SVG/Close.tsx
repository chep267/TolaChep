import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

function Close(props: Props) {
    const { color = '#2E3A59', ...others } = props;
    return (
        <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path d="M8.59 0 5 3.59 1.41 0 0 1.41 3.59 5 0 8.59 1.41 10 5 6.41 8.59 10 10 8.59 6.41 5 10 1.41 8.59 0Z" fill="#2E3A59" />
        </svg>
    );
}

export default Close;
