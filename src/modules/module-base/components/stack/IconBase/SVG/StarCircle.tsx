/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author DanhHNT@bkav.com on 06/12/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';

function StarCircle(props: any) {
    return (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx={15} cy={15} r={15} fill="#D9D9D9" fillOpacity={0.51} />
            <path
                d="M13.588 7.52179L11.5131 11.4002L6.87067 12.0242C6.03815 12.1355 5.7045 13.0817 6.30824 13.6236L9.66692 16.6408L8.87253 20.9029C8.72954 21.6734 9.60973 22.2504 10.3469 21.8901L14.5 19.8777L18.6531 21.8901C19.3903 22.2475 20.2705 21.6734 20.1275 20.9029L19.3331 16.6408L22.6918 13.6236C23.2955 13.0817 22.9619 12.1355 22.1293 12.0242L17.4869 11.4002L15.412 7.52179C15.0402 6.83047 13.963 6.82168 13.588 7.52179Z"
                fill="#484848"
                fillOpacity={0.64}
            />
        </svg>
    );
}
export default StarCircle;
