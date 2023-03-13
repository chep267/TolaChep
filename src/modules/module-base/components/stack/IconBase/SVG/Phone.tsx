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
                d="M16 3H8a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2z"
            />
            <path fill={color} d="M10.857 4.97a.6.6 0 100 1.2v-1.2zm2.286 1.2a.6.6 0 100-1.2v1.2zm-2.286 0h2.286v-1.2h-2.286v1.2z" />
        </svg>
    );
}

export default Icon;
