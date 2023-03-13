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
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" {...props}>
            <defs>
                <clipPath id="a">
                    <path d="M0 0H20V20H0z" />
                </clipPath>
            </defs>
            <g data-name="Artboard \u2013 5" clipPath="url(#a)">
                <g data-name="Group 7340" transform="translate(-1778 -20)">
                    <g data-name="Rectangle 6031" transform="translate(1780 22)" fill="none" stroke="#000" strokeWidth={1}>
                        <rect width={16} height={16} rx={4} stroke="none" />
                        <rect x={0.5} y={0.5} width={15} height={15} rx={3.5} />
                    </g>
                    <circle data-name="Ellipse 2334" cx={3} cy={3} r={3} transform="translate(1791 21)" />
                </g>
            </g>
        </svg>
    );
}

export default SvgComponent;
