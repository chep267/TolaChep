import * as React from 'react';

function SVGComponent(props) {
    return (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M26.6663 12.9999C26.6663 19.4434 21.4432 24.6666 14.9997 24.6666C8.55617 24.6666 3.33301 19.4434 3.33301 12.9999C3.33301 6.55759 8.55617 1.33325 14.9997 1.33325C21.4432 1.33325 26.6663 6.55759 26.6663 12.9999Z"
                fill="url(#paint0_linear_10770_6740)"
            />
            <g filter="url(#filter0_d_10770_6740)">
                <path
                    d="M19.503 9.15569L17.613 15.129C17.543 15.374 17.3447 15.5724 17.0997 15.6435L11.1497 17.509C10.753 17.6385 10.368 17.2524 10.4963 16.8557L12.363 10.8707C12.433 10.6257 12.6313 10.439 12.8763 10.3574L18.8497 8.49069C19.258 8.36236 19.6313 8.74736 19.503 9.15569Z"
                    fill="url(#paint1_linear_10770_6740)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_10770_6740"
                    x={0.471191}
                    y={0.465576}
                    width={29.0576}
                    height={29.0688}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation={5} />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10770_6740" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10770_6740" result="shape" />
                </filter>
                <linearGradient
                    id="paint0_linear_10770_6740"
                    x1={14.9997}
                    y1={1.33325}
                    x2={14.9997}
                    y2={24.6666}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8EEBFF" />
                    <stop offset={1} stopColor="#06B7DE" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_10770_6740"
                    x1={14.9999}
                    y1={8.46558}
                    x2={14.9999}
                    y2={17.5345}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    );
}
export default SVGComponent;
