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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
            <path
                stroke="currentColor"
                strokeWidth="1.2"
                d="M9 1h2a1 1 0 011 1v.569c0 .428.287.8.682.963.396.164.856.102 1.158-.2l.403-.403a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-.402.403c-.303.302-.365.762-.201 1.158.164.395.535.682.963.682H18a1 1 0 011 1v2a1 1 0 01-1 1h-.569c-.428 0-.8.287-.963.682-.164.396-.102.856.2 1.158l.403.403a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0l-.403-.402c-.302-.303-.762-.365-1.158-.201-.395.164-.682.535-.682.963V18a1 1 0 01-1 1H9a1 1 0 01-1-1v-.569c0-.428-.287-.8-.682-.963-.396-.164-.856-.102-1.158.2l-.403.403a1 1 0 01-1.414 0L2.93 15.657a1 1 0 010-1.414l.402-.403c.303-.302.365-.762.201-1.158-.164-.395-.535-.682-.963-.682H2a1 1 0 01-1-1V9a1 1 0 011-1h.569c.428 0 .8-.287.963-.682.164-.395.102-.856-.2-1.158l-.403-.403a1 1 0 010-1.414L4.343 2.93a1 1 0 011.414 0l.403.402c.302.303.763.365 1.158.201.395-.164.682-.535.682-.963V2a1 1 0 011-1z"
            />
            <path stroke={color} strokeWidth="1.2" d="M13 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

export default Icon;
