import * as React from 'react';
import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
    color?: string;
}

function Messenger(props: Props) {
    const { color = '#F4F7FC', ...others } = props;
    return (
        <svg width="22" height="19" fill="none" viewBox="0 0 22 19" xmlns="http://www.w3.org/2000/svg" {...others}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 19c6.075 0 11-4.253 11-9.5S17.075 0 11 0 0 4.253 0 9.5c0 2.767 1.37 5.257 3.554 6.993L1.054 19H11Z"
                fill="url(#a)"
            />
            <g filter="url(#b)">
                <ellipse cx={6.994} cy={8.997} rx={0.994} ry={0.997} fill="#fff" />
            </g>
            <g filter="url(#c)">
                <ellipse cx={10.983} cy={8.997} rx={0.994} ry={0.997} fill="#fff" />
            </g>
            <g filter="url(#d)">
                <ellipse cx={14.972} cy={8.997} rx={0.994} ry={0.997} fill="#fff" />
            </g>
            <defs>
                <filter id="b" x={5} y={7.5} width={3.989} height={3.993} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={0.5} />
                    <feGaussianBlur stdDeviation={0.5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4195_9415" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_4195_9415" result="shape" />
                </filter>
                <filter id="c" x={8.989} y={7.5} width={3.989} height={3.993} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={0.5} />
                    <feGaussianBlur stdDeviation={0.5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4195_9415" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_4195_9415" result="shape" />
                </filter>
                <filter id="d" x={12.978} y={7.5} width={3.989} height={3.993} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy={0.5} />
                    <feGaussianBlur stdDeviation={0.5} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4195_9415" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_4195_9415" result="shape" />
                </filter>
                <linearGradient id="a" x1={11} y1={0} x2={11} y2={19} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#149CFF" />
                    <stop offset={1} stopColor="#0077E5" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default Messenger;
