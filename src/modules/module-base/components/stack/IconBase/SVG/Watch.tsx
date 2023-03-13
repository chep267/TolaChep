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
                d="M12.5 22.917a10.312 10.312 0 0 1-4.545-1.042 10.458 10.458 0 0 1-1.484-.88l-.143-.104a10.51 10.51 0 0 1-3.088-3.616A10.302 10.302 0 0 1 2.084 12.5c0-5.753 4.664-10.417 10.417-10.417S22.918 6.747 22.918 12.5a10.305 10.305 0 0 1-1.156 4.773 10.51 10.51 0 0 1-3.083 3.614c-.487.357-1.003.67-1.544.938l-.083.042a10.311 10.311 0 0 1-4.551 1.05Zm0-5.209a4.156 4.156 0 0 0-3.704 2.258 8.348 8.348 0 0 0 7.41 0v-.006a4.153 4.153 0 0 0-3.705-2.252Zm0-2.083a6.266 6.266 0 0 1 5.448 3.183l.015-.013.015-.013-.018.016-.01.008a8.333 8.333 0 1 0-10.896 0 6.267 6.267 0 0 1 5.447-3.181Zm0-1.042a4.167 4.167 0 1 1 0-8.333 4.167 4.167 0 0 1 0 8.333Zm0-6.25a2.083 2.083 0 1 0 0 4.167 2.083 2.083 0 0 0 0-4.167Z"
                fill={color || '#1F1F1F'}
            />
        </svg>
    );
}

export default SvgComponent;
