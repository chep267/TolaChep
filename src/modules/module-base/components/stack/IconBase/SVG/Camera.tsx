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
                d="M15.774 13.909a3.367 3.367 0 0 1-3.359 3.367 3.367 3.367 0 0 1-3.359-3.367 3.367 3.367 0 0 1 3.359-3.367 3.367 3.367 0 0 1 3.36 3.367Zm7.056-4.781V18.69A2.306 2.306 0 0 1 20.527 21H4.303A2.306 2.306 0 0 1 2 18.691V9.128a2.306 2.306 0 0 1 2.303-2.31h2.833V6.02c0-1.116.902-2.02 2.016-2.02h6.526c1.114 0 2.016.904 2.016 2.02v.798h2.833a2.307 2.307 0 0 1 2.303 2.31Zm-5.328 4.78c0-2.81-2.282-5.098-5.087-5.098-2.804 0-5.086 2.287-5.086 5.099 0 2.811 2.282 5.099 5.086 5.099 2.805 0 5.087-2.288 5.087-5.1Z"
                fill={color || '#000'}
                fillOpacity={0.47}
            />
        </svg>
    );
}

export default SvgComponent;
