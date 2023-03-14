/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dangnhk.bkav@gmail.com on 14/09/2022
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';

interface Props {
    color?: string;
}

function SvgComponent(props: Props) {
    const { color } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" {...props}>
            <path
                d="M3 18.5h18M3 12.5h18M3 6.5h18"
                stroke={color || '#fff'}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgComponent;
