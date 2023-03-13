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
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="4" fill="currentColor" viewBox="0 0 16 4" {...props}>
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            <circle cx="5.5" cy="1.5" r="1.5" fill="currentColor" />
            <circle cx="9.5" cy="1.5" r="1.5" fill="currentColor" />
        </svg>
    );
}

export default Icon;
