/**
 *
 * @author dongntd267@gmail.com on 01/12/2022.
 *
 */

import * as React from 'react';
import { Table } from 'antd';
import classnames from 'classnames';

/** styles */
import styles from './styles/index.local.less';

/** types */
import type { TableProps } from 'antd';

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
