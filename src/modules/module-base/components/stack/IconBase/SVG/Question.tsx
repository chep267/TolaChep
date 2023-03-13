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
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22" {...props}>
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"
            />
            <path
                fill={color}
                d="M11.294 13.372H9.77c.005-.424.041-.78.11-1.066.068-.292.182-.556.341-.793.164-.237.38-.488.65-.752.21-.2.398-.39.567-.568.169-.182.303-.373.403-.574.1-.205.15-.44.15-.704 0-.287-.047-.53-.143-.731a1.008 1.008 0 00-.424-.458c-.182-.105-.41-.158-.683-.158-.228 0-.442.046-.643.137-.2.087-.362.223-.485.41-.123.183-.19.424-.198.725H7.767c.01-.574.146-1.057.41-1.45.265-.391.62-.685 1.067-.881a3.688 3.688 0 011.497-.294c.61 0 1.132.105 1.565.314.433.205.764.506.991.903.233.392.349.866.349 1.422 0 .4-.08.765-.24 1.093-.159.324-.366.627-.621.91a15.8 15.8 0 01-.828.833 1.804 1.804 0 00-.519.76 2.994 2.994 0 00-.144.922zm-1.66 2.133c0-.246.084-.454.252-.622.169-.173.399-.26.69-.26.292 0 .522.087.691.26a.846.846 0 01.253.622.868.868 0 01-.253.629c-.168.168-.399.253-.69.253-.292 0-.522-.085-.69-.253a.868.868 0 01-.254-.63z"
            />
        </svg>
    );
}

export default Icon;
