/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
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
