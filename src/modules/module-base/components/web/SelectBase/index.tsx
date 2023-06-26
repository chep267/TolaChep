/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author dongntd267@gmail.com on 29/11/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import * as React from 'react';
import { Select, SelectProps, RefSelectProps } from 'antd';
import classnames from 'classnames';

// styles
import styles from './styles/index.local.less';

const SelectBase = React.forwardRef((props: SelectProps, ref: React.ForwardedRef<RefSelectProps>) => {
    const { className, placeholder = 'Aa...', popupClassName, ...selectProps } = props;

    return (
        <Select
            ref={ref}
            className={classnames(styles['select-base'], className)}
            popupClassName={classnames(styles['popup-base'], popupClassName)}
            dropdownMatchSelectWidth={false}
            placeholder={placeholder}
            {...selectProps}
        />
    );
});

SelectBase.displayName = 'SelectBase';
export default SelectBase;
export type { SelectProps, RefSelectProps };
