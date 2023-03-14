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
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 24 24" {...props}>
            <path
                stroke={color}
                strokeWidth="1.2"
                d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5z"
            />
            <path
                stroke={color}
                strokeWidth="1.2"
                d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5 19.826c0-1.89 1.367-4.326 3.5-4.326h7c2.133 0 3.5 2.437 3.5 4.326"
            />
        </svg>
    );
}

export default Icon;
