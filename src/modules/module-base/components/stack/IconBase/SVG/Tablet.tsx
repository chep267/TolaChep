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
}

function Icon(props: Props) {
    const { color } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M7.333 21h9.334C17.955 21 19 20.055 19 18.889V4.11C19 2.945 17.955 2 16.667 2H7.333C6.045 2 5 2.945 5 4.111V18.89C5 20.055 6.045 21 7.333 21z"
            />
            <path stroke={color} strokeWidth="1.2" d="M5 17h14" />
            <path
                fill={color}
                d="M13.143 19.6a.6.6 0 000-1.2v1.2zm-2.286-1.2a.6.6 0 100 1.2v-1.2zm2.286 0h-2.286v1.2h2.286v-1.2z"
            />
        </svg>
    );
}

export default Icon;
