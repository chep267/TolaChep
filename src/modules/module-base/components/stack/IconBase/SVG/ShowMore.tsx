/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author DangNHk@bkav.com on 24/08/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';

interface Props {
    color?: string;
    width?: number;
    height?: number;
}

function Icon(props: Props) {
    const { color, width, height } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 18 18"
            {...props}>
            <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12l3-3-3-3" />
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 17.25A8.25 8.25 0 109 .75a8.25 8.25 0 000 16.5z"
            />
        </svg>
    );
}

export default Icon;
