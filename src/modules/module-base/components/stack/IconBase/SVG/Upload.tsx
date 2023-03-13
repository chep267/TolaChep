/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author sonnghb@bkav.com on 01/12/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
    const { color } = props;
    return (
        <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M9.375 7.087h2.062v9.44c0 .122.1.223.223.223h1.674c.123 0 .223-.1.223-.224V7.087h2.068c.187 0 .29-.215.175-.36l-3.125-3.956a.224.224 0 0 0-.351 0L9.199 6.725a.224.224 0 0 0 .176.362Zm13.337 8.602h-1.674c-.123 0-.224.1-.224.224v4.296H4.185v-4.296c0-.123-.1-.224-.223-.224H2.288c-.123 0-.224.1-.224.224v5.524c0 .494.4.893.893.893h19.085a.892.892 0 0 0 .893-.893v-5.524c0-.123-.1-.224-.223-.224Z"
                fill={color || '#262626'}
            />
        </svg>
    );
}

export default SvgComponent;
