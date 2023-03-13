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
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" fill="none" viewBox="0 0 25 21" {...props}>
            <path
                fill={color}
                fillRule="evenodd"
                d="M22.396 16.23h-7.19c.31 1.72 1.34 2.902 2.292 3.646h1.252a.52.52 0 110 1.041H6.25a.52.52 0 110-1.041h1.252c.951-.744 1.982-1.927 2.292-3.646h-7.19a2.083 2.083 0 01-2.083-2.084V2.168c0-1.15.933-2.083 2.083-2.083h19.792c1.15 0 2.083.933 2.083 2.083v11.98c0 1.15-.933 2.083-2.083 2.083zM9.06 19.876h6.877c-.83-.876-1.57-2.071-1.801-3.646h-3.274c-.232 1.575-.971 2.77-1.802 3.646zM23.438 2.167c0-.575-.467-1.041-1.042-1.041H2.604c-.575 0-1.042.466-1.042 1.041v9.896h21.875V2.167zm0 10.938H1.561v1.041c0 .575.467 1.042 1.042 1.042h19.792c.575 0 1.041-.466 1.041-1.042v-1.041zM12.5 14.667a.52.52 0 11-.001-1.04.52.52 0 01.001 1.04z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default Icon;
