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
import { Table, TableProps } from 'antd';
import classnames from 'classnames';

// styles
import styles from './styles/index.local.less';

interface TableBaseProps extends TableProps<any> {
    scrollHeight?: number;
}

function TableBase(props: TableBaseProps) {
    const { className, scrollHeight = 500, loading, ...tableProps } = props;

    return (
        <Table
            rowKey={({ key, id }) => key || id}
            className={classnames(styles['table-base'], className)}
            locale={{
                emptyText: <span className={styles['table-base-empty']}>{loading ? 'Đang tải...' : 'Danh sách trống!'}</span>,
            }}
            loading={loading}
            pagination={false}
            scroll={{
                y: scrollHeight,
                x: 'max-content',
            }}
            {...tableProps}
        />
    );
}

export type { TableBaseProps };
export default TableBase;
