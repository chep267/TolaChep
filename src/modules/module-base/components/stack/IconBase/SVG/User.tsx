import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#a)">
                <path fill="#fff" d="M0 0h22v22H0z" />
                <path d="M0 11a11 11 0 1 0 22 0 11 11 0 0 0-22 0Z" fill="#fff" />
                <path
                    d="M2.062 16.972A10.75 10.75 0 1 1 19.939 5.028 10.75 10.75 0 0 1 2.062 16.972Z"
                    stroke="#000"
                    strokeOpacity={0.62}
                    strokeWidth={0.5}
                />
                <path
                    d="M15.813 14.5v2.031a.313.313 0 0 1-.31.313H6.187a.313.313 0 0 1-.309-.313v-2.032c0-1.64 2.224-2.97 4.967-2.97 2.743 0 4.967 1.33 4.967 2.97ZM10.845 9.405c1.22 0 2.207-.951 2.207-2.124 0-1.174-.988-2.125-2.207-2.125-1.219 0-2.207.951-2.207 2.125 0 1.173.988 2.124 2.207 2.124Z"
                    stroke="#000"
                    strokeOpacity={0.6}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h22v22H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgComponent;
