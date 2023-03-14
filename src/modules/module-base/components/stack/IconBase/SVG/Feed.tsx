import * as React from 'react';

function Feed(props) {
    return (
        <svg width={21} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect opacity={0.2} x={6.5} y={0.333252} width={14} height={21} rx={2.5} fill="#038CF5" />
            <rect x={0.666504} y={1.5} width={18.6667} height={22.1667} rx={2} fill="url(#paint0_linear_10770_7085)" />
            <rect x={3} y={6.1665} width={5.83333} height={5.83333} rx={1} fill="url(#paint1_linear_10770_7085)" />
            <path
                d="M11.1665 7.33325H15.8332"
                stroke="url(#paint2_linear_10770_7085)"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d="M11.1665 10.8333H15.8332"
                stroke="url(#paint3_linear_10770_7085)"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d="M4.1665 14.3333L15.8332 14.3333"
                stroke="url(#paint4_linear_10770_7085)"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d="M4.1665 17.8333L15.8332 17.8333"
                stroke="url(#paint5_linear_10770_7085)"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_10770_7085"
                    x1={9.99984}
                    y1={1.5}
                    x2={9.99984}
                    y2={23.6667}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#68BDFE" />
                    <stop offset={1} stopColor="#038CF5" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_10770_7085"
                    x1={5.91667}
                    y1={6.1665}
                    x2={5.91667}
                    y2={11.9998}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={0.958333} stopColor="white" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_10770_7085"
                    x1={13.4998}
                    y1={7.33325}
                    x2={13.4998}
                    y2={8.33325}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_10770_7085"
                    x1={13.4998}
                    y1={10.8333}
                    x2={13.4998}
                    y2={11.8333}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_10770_7085"
                    x1={9.99984}
                    y1={14.3333}
                    x2={9.99984}
                    y2={15.3333}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_10770_7085"
                    x1={9.99984}
                    y1={17.8333}
                    x2={9.99984}
                    y2={18.8333}
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    );
}
export default Feed;
