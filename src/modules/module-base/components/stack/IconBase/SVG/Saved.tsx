import * as React from 'react';

function Saved(props) {
    return (
        <svg width={20} height={24} viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                opacity={0.4}
                d="M2.66634 0.333252H17.333C18.4376 0.333252 19.333 1.22868 19.333 2.33325V13.6453C19.333 14.4211 18.8843 15.1269 18.1819 15.4562L2.09077 22.9989C1.42765 23.3097 0.66634 22.8258 0.66634 22.0934V2.33325C0.66634 1.22868 1.56177 0.333252 2.66634 0.333252Z"
                fill="#52C41A"
            />
            <path
                d="M17.3332 0.333252H2.6665C1.56193 0.333252 0.666504 1.22868 0.666504 2.33325V13.6453C0.666504 14.4211 1.11517 15.1269 1.81763 15.4562L17.9087 22.9989C18.5719 23.3097 19.3332 22.8258 19.3332 22.0934V2.33325C19.3332 1.22868 18.4377 0.333252 17.3332 0.333252Z"
                fill="url(#paint0_linear_10770_7098)"
            />
            <rect
                x={5.33301}
                y={7.33325}
                width={9.33333}
                height={2.33333}
                rx={1.16667}
                fill="url(#paint1_linear_10770_7098)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_10770_7098"
                    x1={9.99984}
                    y1={0.333252}
                    x2={9.99984}
                    y2={23.6666}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7FFF41" />
                    <stop offset={1} stopColor="#52C41A" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_10770_7098"
                    x1={9.99967}
                    y1={8.11103}
                    x2={9.99967}
                    y2={9.66659}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    );
}
export default Saved;
